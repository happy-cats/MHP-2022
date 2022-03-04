# MHP Mobility Hack 2022
## How to install
* Install poetry on your local system https://python-poetry.org/ 
* run poetry install
  * in pycharm it should be automatically detected
  
## How to run sumo gui
* build the docker image
  * `docker build - < Dockerfile -t docker-sumxo`
* connect to bash
```
docker run --rm \
  --env=DISPLAY=$DISPLAY \
  --env=QT_X11_NO_MITSHM=1 \
  --volume=/tmp/.X11-unix:/tmp/.X11-unix:rw \
  -it docker-sumo \
  bash
```
* run `sumo` or `sumo-gui`