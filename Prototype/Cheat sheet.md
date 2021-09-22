#Creating the database

1. sudo psql -U postgres
2. CREATE DATABASE diabetes;
3. GRANT ALL PRIVILEGES ON DATABASE diabetes TO postgres;
4.  

#Insert values into database

1. psql -d diabetes -U postgres -f minSP.sql
2. psql -d diabetes -U postgres -f Data.sql

#Getting into the database with postgres
1. psql -d diabetes -U postgres 


#Not that important
#Changes made in python/flask
1. Change all 'bank' to 'platform'

#Install all requirements
sudo apt update -y && sudo apt upgrade -y
sudo apt-get install libpq-dev python-dev
pip3 install -r requirements.txt