#!/bin/bash

docker run --restart unless-stopped -d -p 7905:5984 -v /usr/local/var/lib/couchdb --name genericwebsite-test-database --volumes-from genericwebsite-test-data sadema/couchdb
