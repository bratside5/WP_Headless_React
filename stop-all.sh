#!  
echo stopping all containers
sleep 2
cd wordpress-docker-compose
pwd
sleep 2
docker-compose down
echo stopping Traefik
sleep 2
cd ../traefik && pwd && docker-compose down 
echo Containers stopped
