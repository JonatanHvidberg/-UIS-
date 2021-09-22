drop table Person;
drop table Relative;
drop table Patient;
drop table HealthProfessionals;
drop table PatientsRelatives;
drop table HealthProfessionals;
drop table Department;
drop table WorksIn;
drop table Reminders;
drop table Messages;
drop table Notes;
drop table Results;
drop table Questionnaire;
drop table QuestionnaireReply;
drop table Test_Results;

/*Person and ther relation */
/*----------------------------------------------------------------------------------------------------*/
create table Person(
  cpr varchar(10),
  name varchar(100),
  History varchar(100),
  Phone_number varchar(8),
  Address varchar(400),
  primary key(cpr)
);

insert into Person values('2503902323','Emil Henriksen','Hjerteproblemer','34343434','Danmark');
insert into Person values('2503902324','Emma Henriksen','Hjerteproblemer','24242424','Danmark');

insert into Person values('1311951114','Amalje Lærke','noget er galt','11442233','Torstensgade 487');
insert into Person values('2506883113','Anders Kalseen','notat','46534238','Torstensgade 48');
insert into Person values('3101502232','Ludvig Jortsen','galt','11442233','Torstensgade 47');



CREATE TABLE Relative (
person_cpr VARCHAR(10) not null REFERENCES Person(cpr),
PRIMARY KEY(person_cpr)
);

insert into Relative values('2503902324');


CREATE TABLE Patient (
person_cpr VARCHAR(10) not null REFERENCES Person(cpr),
PRIMARY KEY(person_cpr)
);

insert into Patient values('2503902323');

CREATE TABLE HealthProfessionals (
person_cpr VARCHAR(10) not null REFERENCES Person(cpr),
Role varchar(100),
PRIMARY KEY(person_cpr)
);

insert into HealthProfessionals values('1311951114','læge');
insert into HealthProfessionals values('2506883113','hudlæge');
insert into HealthProfessionals values('3101502232','mavetarmkiror');

create table PatientsRelatives(
  Patients_cpr varchar(10) not null REFERENCES Person(cpr),
  Relatives_cpr varchar(10) not null REFERENCES Person(cpr),
  primary key(Patients_cpr, Relatives_cpr)
);

insert into PatientsRelatives values('2503902323','2503902324');

create table PatientsHealthProfessionals(
  Patients_cpr varchar(10) not null REFERENCES Person(cpr),
  HealthProfessionals_cpr varchar(10) not null REFERENCES Person(cpr),
  primary key(Patients_cpr, HealthProfessionals_cpr)
);

insert into PatientsHealthProfessionals values('2503902323','1311951114');
insert into PatientsHealthProfessionals values('2503902323','2506883113');


/*Department  Health Professionals Works In */
/*----------------------------------------------------------------------------------------------------*/
create table Department(
  Address varchar(100),
  Specialty varchar(10),
  primary key(Address)
);

insert into Department values('lægevej 6','hud');
insert into Department values('sygevej 32','Huspital');
insert into Department values('FindVej 02','øjne');

create table WorksIn(
  Department_Address varchar(100) not null REFERENCES Department(Address),
  HealthProfessionals_cpr varchar(10) not null REFERENCES Person(cpr),
  primary key(Department_Address,HealthProfessionals_cpr)
);

insert into WorksIn values('lægevej 6','2506883113');
insert into WorksIn values('sygevej 32','1311951114');
insert into WorksIn values('sygevej 32','3101502232');

/*Health Professionals Provides*/
/*----------------------------------------------------------------------------------------------------*/

create table Reminders(
  som_Text varchar(500),
  som_time varchar(14),
  Address varchar(100),
  Regarding varchar(50),
  Patients_cpr varchar(10),
  HealthProfessionals_cpr varchar(10),
  primary key(som_time,Patients_cp)
);

insert into Reminders values('Husk at vaske føderne','02/05/20:12.30','lægevej 6','fodvorter','2503902323','2506883113');
insert into Reminders values('Husk at have spist','02/05/20:13.30','sygevej 32','blodprøver','2503902323','1311951114');



create table Messages(
  Patients_cpr varchar(10),
  som_Text varchar(500),
  som_time varchar(14),
  Regarding varchar(50),
  id int,
  HealthProfessionals_cpr varchar(10),
  primary key(id)
);

insert into Messages values('2503902323','der er problemer med prøven den skal tages igen','02/03/20:13.30','blodprøversvar',1,'1311951114');



create table Notes(
  Patients_cpr varchar(10),
  som_Text varchar(500),
  id int,
  HealthProfessionals_cpr varchar(10),
  primary key(id)
);

insert into Notes values('2503902323','pertienter er bjeg, det virker som jern mangel',2,'1311951114');



create table Results(
  Patients_cpr varchar(10),
  HealthProfessionals_cpr varchar(10),
  some_Date date,
  id int,
  note varchar(500),
  primary key(id)
);

insert into Results values('2503902323','1311951114','25/01/2020',3,'');
insert into Results values('2503902323','1311951114','23/01/2020',6,'');
insert into Results values('2503902323','1311951114','25/01/2020',5,'Gå til egen læge');
insert into Results values('2503902324','1311951114','25/01/2020',10,'Gå til egen læge');


  /*Test result number 
  /*----------------------------------------------------------------------------------------------------*/


create table Test_Results(
  IDX int,
  id int,
  num int,
  description varchar(50),
  type varchar(50),
  primary key(IDX)
);
insert into Test_Results values(1,3,500,'mmol','Blod');
insert into Test_Results values(2,6,240,'gram','Vitamin A');
insert into Test_Results values(3,5,420,'mmol','Vitamin A');
insert into Test_Results values(4,6,420,'gram','Blod');

  /*Questionnaire and the replay*/
  /*----------------------------------------------------------------------------------------------------*/


create table Questionnaire(
  Questions varchar(500),
  idx int,
  primary key(idx)
);

insert into Questionnaire values('ondt i rykken,opkast,mangel på abetit',1);
insert into Questionnaire values('Smærter i hovet, dorlig onde, utilstrakelig',2);
insert into Questionnaire values('trat,sur,glad',3);

create table QuestionnaireReply(
  Answer varchar(500),
  idx int,
  cpr varchar(10),
  primary key(idx,cpr)
);

insert into QuestionnaireReply values('5,ja,enig',2,'2503902323');
insert into QuestionnaireReply values('3,4,2',3,'2503902323');
