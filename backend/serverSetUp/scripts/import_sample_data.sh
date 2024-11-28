#!/bin/bash

# Connect to the PostgreSQL RDS instance and execute the SQL commands
echo "Importing sample data into PostgreSQL..."

# Run the SQL script to insert sample data
psql -h your-rds-endpoint.amazonaws.com -U your-username -d your-database -f schema/sample_data.sql

echo "Sample data import completed successfully."
