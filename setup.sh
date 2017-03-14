#!/bin/bash

# installs the dependencies, generates & launches the application

npm install;
npm install bower;
bower install;
npm install grunt-cli;
grunt server;