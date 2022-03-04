FROM ubuntu:21.04

RUN adduser cat --disabled-password

RUN apt-get update
RUN apt-get install -qqy x11-apps vim
RUN apt-get install -qqy sumo sumo-tools sumo-doc
RUN apt-get install -qqy python
WORKDIR /opt/app
COPY data data