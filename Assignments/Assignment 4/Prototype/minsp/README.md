#How to use the program

##First create the database 'diabetes' for the user postgres

1. From the terminal
	- sudo psql -U postgres
2. Inside the psql terminal
	- CREATE DATABASE diabetes;
	- GRANT ALL PRIVILEGES ON DATABASE diabetes TO postgres;
3. Exiting the psql terminal, and running the following command from the  terminal
	- psql -d diabetes -U postgres -f minSP.sql
 	- psql -d diabetes -U postgres -f Data.sql

##Running the prototype
1. Run the script 'run.py' with python3, ie "$ python3 run.py", this will start up the flask server on the local host, and the webpage "http://127.0.0.1:5000" will show the prototype.

2. Log in with any of the defined users' cpr number [2503902323, 2405952323, 2110992324], all having no password, but the form requires some input before it can be submitted. The user 2503902323 has the most data connected to them.

3. The first page that is loaded is the profile page, displaying information about the user, name, phone number and email address. All of these are made up to just showcase the possiblities. At the moment a banner in yellow reading "Nyheder om COVID-19" is shown, click on this will take on to "Sundhedsstyrelsen"'s page about the COVID-19 situation in Denmark.


##Options for possible actions
* When logged in it is possible to view all healthcare professionals associated with the user by going to "Mine Læger", this subpage can be accessed from the home page menu "Mine Genveje" or by the dropdown menu "Mine Muligheder".

* Going to the subpage "Mine Testresulter", it is possible to see all test results that are associeted with the user

* Going to the subpage 'Mine Grafer' the user can get a graph over time of any of the type of test results associated with the logged in user. The picture is dynamical generated and deleted upon loggin out.

* The subpage "Vores Information" shows some information about the creators of the prototype.