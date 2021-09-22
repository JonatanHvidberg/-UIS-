drop table Relative;
drop table Patient;
drop table HealthProfessionals;
drop table PatientsRelatives;
drop table WorksIn;
drop table Reminders;
drop table Messages;
drop table Notes;
drop table Results;
drop table Questionnaire;
drop table QuestionnaireReply;
drop table Person CASCADE;
drop table Department;
drop table Patientshealthprofessionals;
drop table ResultsData;
/*Person and ther relation */
/*----------------------------------------------------------------------------------------------------*/
create table IF NOT EXISTS Person(
  cpr bigint,
  password varchar(100),
  name varchar(100),
  History varchar(100),
  Phone_number varchar(8),
  Address varchar(400),
  email varchar(100),
  primary key(cpr)
);

CREATE TABLE IF NOT EXISTS Relative (
person_cpr bigint not null REFERENCES Person(cpr),
PRIMARY KEY(person_cpr)
);

CREATE TABLE IF NOT EXISTS Patient (
person_cpr bigint not null REFERENCES Person(cpr),
PRIMARY KEY(person_cpr)
);

CREATE TABLE IF NOT EXISTS HealthProfessionals (
person_cpr bigint not null REFERENCES Person(cpr),
Role varchar(100),
PRIMARY KEY(person_cpr)
);

create table IF NOT EXISTS PatientsRelatives(
  Patients_cpr bigint not null REFERENCES Person(cpr),
  Relatives_cpr bigint not null REFERENCES Person(cpr),
  primary key(Patients_cpr, Relatives_cpr)
);

create table IF NOT EXISTS PatientsHealthProfessionals(
  Patients_cpr bigint,
  HealthProfessionals_cpr bigint not null REFERENCES Person(cpr),
  primary key(Patients_cpr, HealthProfessionals_cpr)
);

/*Department  Health Professionals Works In */
/*----------------------------------------------------------------------------------------------------*/
create table IF NOT EXISTS Department(
  Address varchar(100),
  Specialty varchar(10),
  primary key(Address)
);

create table IF NOT EXISTS  WorksIn(
  Department_Address varchar(100) not null REFERENCES Department(Address),
  HealthProfessionals_cpr bigint,
  primary key(Department_Address,HealthProfessionals_cpr)
);

/*Health Professionals Provides*/
/*----------------------------------------------------------------------------------------------------*/

create table IF NOT EXISTS Reminders(
  some_Text varchar(500),
  some_time varchar(14),
  Address varchar(100),
  Regarding varchar(50),
  Patients_cpr bigint,
  HealthProfessionals_cpr bigint,
  primary key(some_time,Patients_cpr)
);


create table IF NOT EXISTS Messages(
  Patients_cpr bigint,
  some_Text varchar(500),
  some_time varchar(14),
  Regarding varchar(50),
  id int,
  HealthProfessionals_cpr bigint,
  primary key(id)
);

create table IF NOT EXISTS Notes(
  Patients_cpr bigint,
  some_Text varchar(500),
  id int,
  HealthProfessionals_cpr bigint,
  primary key(id)
);

/*----------------------------------------------------------------------------------------------------*/

create table IF NOT EXISTS Results(
  Patients_cpr bigint,
  HealthProfessionals_cpr bigint,
  some_Date DATE,
  id int,
  primary key(id)
);

create table IF NOT EXISTS ResultsData(
  units varchar(20),
  description varchar(50),
  data bigint,
  id int,
  idx int,
  primary key(idx)
);

/*----------------------------------------------------------------------------------------------------*/


  /*Questionnaire and the replay*/
  /*----------------------------------------------------------------------------------------------------*/


create table IF NOT EXISTS Questionnaire(
  Questions varchar(500),
  idx bigint,
  primary key(idx)
);


create table IF NOT EXISTS QuestionnaireReply(
  Answer varchar(500),
  idx bigint,
  cpr varchar(10),
  primary key(idx,cpr)
);
