# MHP Mobility Hack 2022
## How to install
* Install poetry on your local system https://python-poetry.org/ 
* run poetry install
  * in pycharm it should be automatically detected

## How to update requirements.txt
* run `poetry export -f requirements.txt --output requirements.txt`

## OSM related config

### How to generate random routes for a sumo osm export
* export map area with https://www.openstreetmap.org
* `netconvert --osm-files map.osm --output-file map.net.xml --geometry.remove --roundabouts.guess --ramps.guess --junctions.join --tls.guess-signals --tls.discard-simple --tls.join`
* `randomTrips.py -n map.net.xml -e 100000 -p 5 -o osm.trips.xml --remove-loops`
* `duarouter -n osm.net.xml --route-files osm.trips.xml -o osm.rou.xml`

### How to edit an osm map
* see [jsom](https://josm.openstreetmap.de/)

## How to run sumo gui
* build the docker image
  * `docker build . -t docker-sumo`
* enable docker access to the ui
  * `xhost +`
* connect to bash
```
docker run --rm \
  --env=DISPLAY=$DISPLAY \
  --env=QT_X11_NO_MITSHM=1 \
  --volume=/tmp/.X11-unix:/tmp/.X11-unix:rw \
  --volume=$(pwd)/src:/opt/app/src \
  --volume=$(pwd)/out:/opt/app/outputs \
  --network=host \
  -it docker-sumo \
  bash
```
* run `sumo` or `sumo-gui`

## Used libraries
* sumo
* traci
* sumo-rl

## Related scientiffic work
* https://people.engr.tamu.edu/guni/Papers/NeurIPS-signals.pdf