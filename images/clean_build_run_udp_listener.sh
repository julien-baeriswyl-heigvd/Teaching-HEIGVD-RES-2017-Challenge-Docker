#!/bin/bash
docker kill udp_samere
docker rm udp_samere
docker rmi udp_listener
docker build -t udp_listener ./udp-listener/
docker run --name udp_samere udp_listener 239.255.29.4 1111
