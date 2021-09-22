DELETE FROM Person;
DELETE FROM Relative;
DELETE FROM Patient;
DELETE FROM HealthProfessionals;
DELETE FROM PatientsRelatives;
DELETE FROM HealthProfessionals;
DELETE FROM Department;
DELETE FROM WorksIn;
DELETE FROM Reminders;
DELETE FROM Messages;
DELETE FROM Notes;
DELETE FROM Results;
DELETE FROM Questionnaire;
DELETE FROM QuestionnaireReply;

/*----------------------------------------------------------------------------------------------------*/
insert into Person values(2503902323,'uis','Emil Henriksen','Hjerteproblemer','34343434','Danmark','@mail.dk');
insert into Person values(2405952323,'uis','Jonatan Hvidberg','UIS problemer','26125422','Danmark','@mail.dk');

insert into Person values(2110992324,'uis','Jasmin Pedersen','Hjerteproblemer','24242424','Danmark','@mail.dk');


insert into Person values(1311951114,'uis','Amalje Lærke','Noget er galt','11442233','Torstensgade 487','@mail.dk');
insert into Person values(2506883113,'uis','Anders Kalseen','Notat','46534238','Torstensgade 48','@mail.dk');
insert into Person values(3101502232,'uis','Ursula Brøndum','Galt','11442233','Torstensgade 47','@mail.dk');
insert into Person values(0112553232,'uis','Lise Dyhr','Galt','11442233','Torstensgade 47','@mail.dk');
/*----------------------------------------------------------------------------------------------------*/
insert into Relative values(2503902324);

/*----------------------------------------------------------------------------------------------------*/

insert into Patient values(2503902323);
insert into Patient values(2405952323);
insert into Patient values(2110992324);


/*----------------------------------------------------------------------------------------------------*/
insert into HealthProfessionals values(1311951114,'Læge');
insert into HealthProfessionals values(2506883113,'Hudlæge');
insert into HealthProfessionals values(0112553232,'Mavetarm Specialist');
insert into HealthProfessionals values(3101502232,'Hjerte Specialist');


/*----------------------------------------------------------------------------------------------------*/

insert into PatientsRelatives values(2503902323,2503902324);

/*----------------------------------------------------------------------------------------------------*/

insert into PatientsHealthProfessionals values(2503902323,1311951114);
insert into PatientsHealthProfessionals values(2503902323,2506883113);
insert into PatientsHealthProfessionals values(2503902323,2506883113);
insert into PatientsHealthProfessionals values(2110992324,3101502232);

insert into PatientsHealthProfessionals values(2405952323,1311951114);
insert into PatientsHealthProfessionals values(2110992324,2506883113);

/*----------------------------------------------------------------------------------------------------*/

insert into Department values('Lægevej 6','Hud');
insert into Department values('Sygevej 32','Hospital');
insert into Department values('FindVej 02','Øjne');

/*----------------------------------------------------------------------------------------------------*/

insert into WorksIn values('Lægevej 6',2506883113);
insert into WorksIn values('Sygevej 32',1311951114);
insert into WorksIn values('Sygevej 32',3101502232);

/*----------------------------------------------------------------------------------------------------*/

insert into Reminders values('Husk at vaske føderne','2020/05/02','Lægevej 6','Fodvorter','2503902323','2506883113');
insert into Reminders values('Husk at have spist inden','2020/05/02','Sygevej 32','Blodprøver','2503902323','1311951114');

/*----------------------------------------------------------------------------------------------------*/

insert into Messages values(2503902323,'Der er problemer med prøven, den skal tages igen','02/03/20:13.30','Blodprøvesvar',1,'1311951114');


/*----------------------------------------------------------------------------------------------------*/

insert into Notes values(2503902323,'Patienten er et bjeg, det virker som jernmangel',2,'1311951114');

/*----------------------------------------------------------------------------------------------------*/

insert into Results values(2503902323,1311951114,'2020-01-30',1);
insert into Results values(2503902323,1311951114,'2020-01-26',2);
insert into Results values(2503902323,1311951114,'2020-01-27',3);
insert into Results values(2503902323,1311951114,'2020-01-28',4);
insert into Results values(2503902323,1311951114,'2020-01-29',5);
insert into Results values(2503902323,1311951114,'2020-01-25',6);

insert into Results values(2405952323,1311951114,'2020-01-25',7);


/*----------------------------------------------------------------------------------------------------*/

insert into ResultsData values('mg/Dl','Blodsukker',734,1,1);
insert into ResultsData values('mg/Dl','Insulin Level',59,1,2);

insert into ResultsData values('mg/Dl','Blodsukker',723,2,3);
insert into ResultsData values('mg/Dl','Insulin Level',68,2,4);

insert into ResultsData values('mg/Dl','Blodsukker',745,3,5);

insert into ResultsData values('mg/Dl','Blodsukker',735,4,6);
insert into ResultsData values('mg/Dl','Insulin Level',70,4,7);

insert into ResultsData values('mg/Dl','Blodsukker',798,6,16);
insert into ResultsData values('mg/Dl','Insulin Level',75,6,17);

insert into ResultsData values('mg/Dl','Blodsukker',1,7,18);
insert into ResultsData values('mg/Dl','Insulin Level',72,7,19);

insert into ResultsData values('mg/kg','Blodtryk - Systolisk',77,1, 20);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',92,2, 21);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',81,3, 22);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',121,4,23);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',94,5, 24);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',116,6,25);
insert into ResultsData values('mg/kg','Blodtryk - Systolisk',93,7, 26);

/*----------------------------------------------------------------------------------------------------*/


insert into Questionnaire values('Ondt i ryggen, opkast, mangel på apetit',1);
insert into Questionnaire values('Smerter i hovedet, dårlig ånde',2);
insert into Questionnaire values('Træt,Sur,Glad',3);

/*----------------------------------------------------------------------------------------------------*/

insert into QuestionnaireReply values('5, Ja, Enig', 2, 2503902323);
insert into QuestionnaireReply values('3, 4, 2', 3, 2503902323);

/*----------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------*/
