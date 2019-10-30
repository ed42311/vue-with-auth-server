#!/bin/bash

DB=grizzly
NOW=$(date +"%x %r %Z")
COLLECTIONS="users appointments slots"

for c in $COLLECTIONS; do
  mongoexport -d $DB -c $c -o $c.json
  echo "$DB collection $c was updated $NOW"
done
