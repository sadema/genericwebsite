#!/bin/bash

docker run -d --rm --name genericwebsite-test -p 81:80 sadema/genericwebsite-test:0.0.1-SNAPSHOT
