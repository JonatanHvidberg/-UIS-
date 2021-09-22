drop table air_Equipment;
drop table air_Can_Fly;
drop table air_Assigned_To;
drop table air_Booked_On;
drop table air_Departure;
drop table air_Pilot; 
drop table air_Employee;


drop table air_Person;
drop table air_Aircraft;
drop table air_Plane;
drop table air_Flight;

create table air_Person (
	Name varchar(15) not null,
	Address varchar(15) not null,
	Phone varchar(12),	-- optional 
	primary key (Name)
);

create table air_Employee (
	Name varchar(15) not null,
	Salary int,
	Emp_No smallint unique not null,
	primary key (Name),
	constraint empfk foreign key (Name) references air_Person(Name)
);


create table air_Pilot (
	Emp_No smallint not null,
	constraint pilfk foreign key (Emp_No) references air_Employee(Emp_No)
);


create table air_Plane (
	Maker varchar(15) not null,
	Model_No varchar(15) not null,
	primary key (Model_No)
);


create table air_Aircraft (			-- subsumes type
	Serial_No smallint not null,
	Model_No varchar(15) not null,
	primary key (Serial_No, Model_No),
	constraint airfk foreign key (Model_No) references air_Plane(Model_No)
);


create table air_Flight (
	Num smallint not null,
	Origin varchar(3),
	Dest varchar(3),
	Dep_Time date,
	Arr_Time date,
	primary key (Num)
);


create table air_Departure (		/* subsumes Instance_Of */
	Dep_Date date not null,
	Num smallint not null,
	primary key (Dep_Date, Num),
	constraint depfk foreign key (Num) references air_Flight(Num)
);


create table air_Booked_On (
	Name varchar(15) not null,
	Dep_Date date not null,
	Num smallint not null,
	primary key (Name, Dep_Date, Num),
	constraint boofk foreign key (Dep_Date, Num) references air_Departure(Dep_Date, Num)
);


create table air_Assigned_To (
	Emp_No smallint not null,
	Dep_Date date not null,
	Num smallint not null,
	primary key (Emp_No, Dep_Date, Num),
	constraint assfk1 foreign key (Emp_No) references air_Employee(Emp_No),
	constraint assfk2 foreign key (Dep_Date, Num) references air_Departure(Dep_Date, Num)
);


create table air_Can_Fly (
	Emp_No smallint not null,
	Model_No varchar(15) not null,
	primary key (Emp_No, Model_No),
	constraint canfk1 foreign key (Emp_No) references air_Employee(Emp_No),
	constraint canfk2 foreign key (Model_No) references air_Plane(Model_No)
);


create table air_Equipment (
	Dep_Date date not null,
	Num smallint not null,
	Serial_No smallint not null,
	Model_No varchar(15) not null,
	primary key (Dep_Date, Num, Serial_No, Model_No),
	constraint equfk1 foreign key (Dep_Date, Num) references air_Departure(Dep_Date, Num),
	constraint equfk2 foreign key (Serial_No, Model_No) references 
		air_Aircraft(Serial_No, Model_No)
);

