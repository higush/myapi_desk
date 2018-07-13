#!/usr/bin/env bash
docker login
docker build -t myapi:1.0 .
docker tag myapi:1.0 higush/myapi:1.0
docker push higush/myapi:1.0
