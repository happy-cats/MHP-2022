FROM ubuntu:21.04

RUN adduser cat --disabled-password

RUN apt-get update
RUN apt-get install -qqy x11-apps vim
RUN apt-get install -qqy python software-properties-common pip git

RUN add-apt-repository ppa:sumo/stable
RUN apt-get update
RUN apt-get install -qqy sumo sumo-tools sumo-doc

RUN git clone https://github.com/LucasAlegre/sumo-rl
RUN pip install -e sumo-rl

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

ENV SUMO_HOME="/usr/share/sumo"

WORKDIR /opt/app
COPY data data