#!/bin/bash
. env.sh
export DOCKER_BUILDKiT=1 
docker build \
    --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
	--build-arg "SOURCE_COMMIT=$GIT_SHA1" \
	--build-arg "VERSION=$VERSION" \
	-t $IMAGE_NAME \
    hangman