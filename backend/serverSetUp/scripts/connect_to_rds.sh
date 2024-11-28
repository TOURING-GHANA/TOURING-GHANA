#!/bin/bash

# Placeholders to be replaced with actual RDS credentials
ENDPOINT="<RDS_ENDPOINT>"
PORT=5432
USER="<DB_USER>"
DBNAME="<DB_NAME>"

psql --host=$ENDPOINT --port=$PORT --username=$USER --dbname=$DBNAME
