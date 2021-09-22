drop table patients;
drop table allergies;
drop table patient_allergies;

create table patients(
  cpr varchar(10),
  first_name varchar(50),
  last_name varchar(50),
  primary key(cpr)
);

insert into patients values('2503902323','Emil','Henriksen');
insert into patients values('2503912222','Lærke','Sørensen');
insert into patients values('2503922727','Carl','Rasmussen');
insert into patients values('2503932929','Emil','Madsen');
insert into patients values('2503942424','Isabella','Henriksen');

create table allergies(
  allergen varchar(50), 
  allergy_type varchar(50),
  primary key(allergen)
);

insert into allergies values('A','animals');
insert into allergies values('B','pollen');
insert into allergies values('z','light');
insert into allergies values('a','pollen');
insert into allergies values('c','soda');
insert into allergies values('y','nuts');


create table patient_allergies(
  allergen varchar(50),
  cpr varchar(10),
  primary key(allergen,cpr)

);

insert into patient_allergies values('A','2503902323');
insert into patient_allergies values('B','2503912222');
insert into patient_allergies values('B','2503902323');
insert into patient_allergies values('A','2503932929');
insert into patient_allergies values('a','2503942424');
insert into patient_allergies values('B','2503932929');



--commit;
