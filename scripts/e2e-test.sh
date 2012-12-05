#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Testacular Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

grunt apiary2js && testacular start $BASE_DIR/../testacular-e2e.conf.js $*