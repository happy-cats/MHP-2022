FROM ubuntu:21.04

RUN adduser cat --disabled-password

RUN apt-get update
RUN apt-get install -qqy x11-apps vim
RUN apt-get install -qqy python software-properties-common
RUN add-apt-repository ppa:sumo/stable
RUN apt-get update
RUN apt-get install -qqy sumo sumo-tools sumo-doc
WORKDIR /opt/app
COPY data data