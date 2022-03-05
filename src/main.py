import sumo_rl

if __name__ == '__main__':
    env = sumo_rl.env(single_agent=True,
                      num_seconds=500,
                      net_file='data/vienna-osm/osm.net.xml',
                      route_file='data/vienna-osm/osm.pedestrian.rou.xml')
    env.reset()
