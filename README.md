# MHP Mobility Hack 2022
## How to install
* Install poetry on your local system https://python-poetry.org/ 
* run poetry install
  * in pycharm it should be automatically detected

## How to update requirements.txt
* run `poetry export -f requirements.txt --output requirements.txt`

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
