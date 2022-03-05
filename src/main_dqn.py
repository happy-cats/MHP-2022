import attr
from stable_baselines3.dqn.dqn import DQN
import os
import sys
if 'SUMO_HOME' in os.environ:
    tools = os.path.join(os.environ['SUMO_HOME'], 'tools')
    sys.path.append(tools)
else:
    sys.exit("Please declare the environment variable 'SUMO_HOME'")
from sumo_rl import SumoEnvironment


@attr.s
class QLearningParams:
    route_file = attr.ib(default='data/osm-train-simple/osm.rou.xml')
    net_file = attr.ib(default='data/osm-train-simple/map.net.xml')
    out_file = attr.ib(default='outputs/osm-train-simple/dqn/')
    simulation_tile = attr.ib(default=100000)


if __name__ == '__main__':
    params = QLearningParams()
    env = SumoEnvironment(net_file=params.net_file,
                                    route_file=params.route_file,
                                    out_csv_name=params.out_file,
                                    single_agent=True,
                                    use_gui=True,
                                    num_seconds=params.simulation_tile,
                                    max_depart_delay=0)
    model = DQN(
        env=env,
        policy="MlpPolicy",
        learning_rate=0.01,
        learning_starts=0,
        train_freq=2,
        target_update_interval=200,
        exploration_initial_eps=0.25,
        exploration_final_eps=0.1,
        verbose=1
    )
    model.learn(total_timesteps=params.simulation_tile)
