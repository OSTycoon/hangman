export SOURCE_BRANCH=$(git symbolic-ref -q --short HEAD)
export GIT_SHA1=$(git rev-parse -q HEAD)
export VERSION=${SOURCE_BRANCH}
export IMAGE_NAME=hangman:${VERSION}