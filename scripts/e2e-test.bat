@echo off

REM Windows script for running e2e tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Testacular (npm install -g testacular)

set BASE_DIR=%~dp0
grunt apiary2js && testacular start "%BASE_DIR%\..\testacular-e2e.conf.js" %*