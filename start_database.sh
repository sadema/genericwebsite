#!/bin/bash

docker run --restart unless-stopped -d -p 6905:5984 -v /usr/local/var/lib/couchdb --name genericwebsite-database --volumes-from genericwebsite-data sadema/couchdb
