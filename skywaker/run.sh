#!/bin/bash
set -e

CONFIG_PATH=/data/options.json
PORT=$(jq --raw-output ".port" $CONFIG_PATH)
SKYIP=$(jq --raw-output ".skyip" $CONFIG_PATH)


sky-hassio-waker --port=3032 --host=0.0.0.0
sky-hassio-waker --port=${PORT} --skyip=${SKYIP} --host=0.0.0.0


