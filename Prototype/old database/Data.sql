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
insert into Person values(2503902323,'uis','Emil Henriksen','Hjerteproblemer','34343434','Danmark');
insert into Person values(2503902324,'uis','Emma Henriksen','Hjerteproblemer','24242424','Danmark');

insert into Person values(1311951114,'uis','Amalje Lærke','Noget er galt','11442233','Torstensgade 487');
insert into Person values(2506883113,'uis','Anders Kalseen','notat','46534238','Torstensgade 48');
insert into Person values(3101502232,'uis','Ludvig Jortsen','galt','11442233','Torstensgade 47');

/*----------------------------------------------------------------------------------------------------*/
insert into Relative values(2503902324);

/*----------------------------------------------------------------------------------------------------*/

insert into Patient values(2503902323);


/*----------------------------------------------------------------------------------------------------*/
insert into HealthProfessionals values(1311951114,'læge');
insert into HealthProfessionals values(2506883113,'hudlæge');
insert into HealthProfessionals values(3101502232,'mavetarmkiror');
/*----------------------------------------------------------------------------------------------------*/

insert into PatientsRelatives values(2503902323,2503902324);

/*----------------------------------------------------------------------------------------------------*/

insert into PatientsHealthProfessionals values(2503902323,1311951114);
insert into PatientsHealthProfessionals values(2503902323,2506883113);

/*----------------------------------------------------------------------------------------------------*/

insert into Department values('lægevej 6','Hud');
insert into Department values('sygevej 32','Hospital');
insert into Department values('FindVej 02','Øjne');

/*----------------------------------------------------------------------------------------------------*/

insert into WorksIn values('lægevej 6',2506883113);
insert into WorksIn values('sygevej 32',1311951114);
insert into WorksIn values('sygevej 32',3101502232);

/*----------------------------------------------------------------------------------------------------*/

insert into Reminders values('Husk at vaske føderne','02/05/20:12.30','lægevej 6','fodvorter','2503902323','2506883113');
insert into Reminders values('Husk at have spist','02/05/20:13.30','sygevej 32','blodprøver','2503902323','1311951114');

/*----------------------------------------------------------------------------------------------------*/

insert into Messages values(2503902323,'der er problemer med prøven den skal tages igen','02/03/20:13.30','blodprøversvar',1,'1311951114');


/*----------------------------------------------------------------------------------------------------*/

insert into Notes values(2503902323,'pertienter er bjeg, det virker som jern mangel',2,'1311951114');

/*----------------------------------------------------------------------------------------------------*/

insert into Results values(2503902323,1311951114,'25/01/2020',835991,1);
insert into Results values(2503902323,1311951114,'26/01/2020',85991,2);
insert into Results values(2503902323,1311951114,'27/01/2020',35991,3);
insert into Results values(2503902323,1311951114,'28/01/2020',8991,4);
insert into Results values(2503902323,1311951114,'29/01/2020',891,5);
insert into Results values(2503902323,1311951114,'30/01/2020',3591,6);

/*----------------------------------------------------------------------------------------------------*/


insert into Questionnaire values('ondt i rykken,opkast,mangel på abetit',1);
insert into Questionnaire values('Smærter i hovet, dorlig onde, utilstrakelig',2);
insert into Questionnaire values('trat,sur,glad',3);

/*----------------------------------------------------------------------------------------------------*/

insert into QuestionnaireReply values('5,ja,enig',2,2503902323);
insert into QuestionnaireReply values('3,4,2',3,2503902323);

/*----------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------*/
