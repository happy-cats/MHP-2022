FROM bogaotory/sumo:0.30.0

RUN adduser cat --disabled-password

RUN apt-get update
RUN apt-get install -qqy x11-apps vim

WORKDIR /opt/app
COPY data data