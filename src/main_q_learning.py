import argparse
import os
import sys
from datetime import datetime

import attr

if 'SUMO_HOME' in os.environ:
    tools = os.path.join(os.environ['SUMO_HOME'], 'tools')
    sys.path.append(tools)
else:
    sys.exit("Please declare the environment variable 'SUMO_HOME'")

from sumo_rl import SumoEnvironment
from sumo_rl.agents import QLAgent
from sumo_rl.exploration import EpsilonGreedy


@attr.s
class QLearningParams:
    route_file = attr.ib(default='data/vienna-small/single-intersection-vhvh.rou.xml')
    net_file = attr.ib(default='data/vienna-small/single-intersection.net.xml')
    out_file = attr.ib(default='outputs/vienna-small/')
    simulation_tile = attr.ib(default=100000)
    min_green_time = attr.ib(default=3)
    max_green_time = attr.ib(default=45)
    alpha_learning_rate = attr.ib(default=0.1)
    gamma_discount_rate = attr.ib(default=0.99)
    epsilon = 0.05

    def format_out_path(self, time, alpha, gamma, epsilon, decay, reward) -> str:
        return (self.out_file+'{}_alpha-{}_gamma-{}_eps-{}_decay-{}_reward-{}').format(time, alpha, gamma, epsilon, decay, reward)

    def get_q_learning_args(self):
        prs = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter,
                                      description="""Q-Learning Single-Intersection""")
        prs.add_argument("-route", dest="route", type=str, default=self.route_file,
                         help="Route definition xml file.\n")
        prs.add_argument("-a", dest="alpha", type=float, default=self.alpha_learning_rate, required=False,
                         help="Alpha learning rate.\n")
        prs.add_argument("-g", dest="gamma", type=float, default=self.gamma_discount_rate, required=False,
                         help="Gamma discount rate.\n")
        prs.add_argument("-e", dest="epsilon", type=float, default=self.epsilon, required=False, help="Epsilon.\n")
        prs.add_argument("-me", dest="min_epsilon", type=float, default=0.005, required=False,
                         help="Minimum epsilon.\n")
        prs.add_argument("-d", dest="decay", type=float, default=1.0, required=False, help="Epsilon decay.\n")
        prs.add_argument("-mingreen", dest="min_green", type=int, default=self.min_green_time, required=False,
                         help="Minimum green time.\n")
        prs.add_argument("-maxgreen", dest="max_green", type=int, default=self.max_green_time, required=False,
                         help="Maximum green time.\n")
        prs.add_argument("-gui", action="store_true", default=True, help="Run with visualization on SUMO.\n")
        prs.add_argument("-fixed", action="store_true", default=False, help="Run with fixed timing traffic signals.\n")
        prs.add_argument("-s", dest="seconds", type=int, default=self.simulation_tile, required=False,
                         help="Number of simulation seconds.\n")
        prs.add_argument("-r", dest="reward", type=str, default='wait', required=False,
                         help="Reward function: [-r queue] for average queue reward or [-r wait] for waiting time reward.\n")
        prs.add_argument("-runs", dest="runs", type=int, default=1, help="Number of runs.\n")
        return prs.parse_args()


if __name__ == '__main__':

    params = QLearningParams()
    args = params.get_q_learning_args()
    experiment_time = str(datetime.now()).split('.')[0]
    out_csv = params.format_out_path(experiment_time, args.alpha, args.gamma, args.epsilon, args.decay, args.reward)

    env = SumoEnvironment(net_file=params.net_file,
                          route_file=args.route,
                          out_csv_name=out_csv,
                          use_gui=args.gui,
                          num_seconds=args.seconds,
                          min_green=args.min_green,
                          max_green=args.max_green,
                          sumo_warnings=False)

    for run in range(1, args.runs + 1):
        initial_states = env.reset()
        ql_agents = {ts: QLAgent(starting_state=env.encode(initial_states[ts], ts),
                                 state_space=env.observation_space,
                                 action_space=env.action_space,
                                 alpha=args.alpha,
                                 gamma=args.gamma,
                                 exploration_strategy=EpsilonGreedy(initial_epsilon=args.epsilon,
                                                                    min_epsilon=args.min_epsilon, decay=args.decay)) for
                     ts in env.ts_ids}

        done = {'__all__': False}
        infos = []
        if args.fixed:
            while not done['__all__']:
                _, _, done, _ = env.step({})
        else:
            while not done['__all__']:
                actions = {ts: ql_agents[ts].act() for ts in ql_agents.keys()}

                s, r, done, _ = env.step(action=actions)

                for agent_id in ql_agents.keys():
                    ql_agents[agent_id].learn(next_state=env.encode(s[agent_id], agent_id), reward=r[agent_id])
        env.save_csv(out_csv, run)
        env.close()
