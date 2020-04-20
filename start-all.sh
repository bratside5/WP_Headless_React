#!/bin/bash
shopt -s expand_aliases
echo starting all containers
sleep 2
echo starting Traefik
sleep 2
cd traefik && docker-compose up -d --build && cd ../wordpress-docker-compose
sleep 2
echo starting wp build
docker-compose up -d --build && cd ../react-app
sleep 2
cd ../wordpress-docker-compose
sleep 2
pwd
echo Running WP CLI container 
sleep 2 
alias wp="docker-compose run --rm wpcli"
wp --version


