#!/bin/bash

##############################
# This builds and pushes both the nginx/React image
# and the DRF one.  
#
# The nginx/React image gets built with an environment variable
# that sets the url of the DRF backend REACT_APP_BASE_URL.  Once you
# know the IP address of your EC2 instance, you would pass that in
# instead of localhost
##############################

# BASE_URL=$1
# NEW_VERSION=$2

# docker build --build-arg REACT_APP_BASE_URL=$BASE_URL -t clujana/webserver-prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
# docker push clujana/webserver-prod:$NEW_VERSION

# docker build -t clujana/api-prod:$NEW_VERSION -f api/Dockerfile ./api --no-cache
# docker push clujana/api-prod:$NEW_VERSION

BASE_URL=$1
NEW_VERSION=$2

docker buildx build --platform linux/amd64 --build-arg REACT_APP_BASE_URL=$BASE_URL -t clujana/webserver-prod:$NEW_VERSION -f webserver/Dockerfile . --no-cache
docker push clujana/webserver-prod:$NEW_VERSION

docker buildx build --platform linux/amd64  -t clujana/api-prod:$NEW_VERSION -f api/Dockerfile ./api --no-cache
docker push clujana/api-prod:$NEW_VERSION 