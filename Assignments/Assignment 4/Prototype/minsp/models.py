# write all your SQL queries in this file.
from datetime import datetime
from minsp import conn, login_manager
from flask_login import UserMixin
from psycopg2 import sql
import dateutil.parser
from datetime import datetime


@login_manager.user_loader
def load_user(user_id):
    cur = conn.cursor()

    schema = 'person'
    id = 'cpr'

    user_sql = sql.SQL("""
    SELECT * FROM {}
    WHERE {} = %s;
    """).format(sql.Identifier(schema), sql.Identifier(id))

    cur.execute(user_sql, (int(user_id),))
    if cur.rowcount > 0:
        return Customers(cur.fetchone())
    else:
        return None


class Customers(tuple, UserMixin):
    def __init__(self, user_data):
        self.CPR_number = user_data[0]
        self.risktype = False
        self.password = user_data[1]
        self.name = user_data[2]
        self.address = user_data[5]

    def get_id(self):
        return (self.CPR_number)


def select_Customers(CPR_number):
    cur = conn.cursor()
    sql = """
    SELECT * FROM Person
    WHERE cpr = %s
    """
    cur.execute(sql, (CPR_number,))
    user = Customers(cur.fetchone()) if cur.rowcount > 0 else None;
    cur.close()
    return user


def select_Result_Types(CPR_number):
    cur = conn.cursor()
    sql = """
    SELECT DISTINCT description FROM (
        SELECT ID FROM Results WHERE Results.Patients_cpr=%s
            ) AS types
    LEFT JOIN ResultsData ON types.ID = ResultsData.ID;
    """
    cur.execute(sql, (CPR_number,))
    user = Result_Types(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return user

class HealthProfessionals(tuple, UserMixin):
    def __init__(self, user_data):
        self.name = user_data[0]

    def get_id(self):
        return (self.name)


class Graph_Me(tuple, UserMixin):
    def __init__(self, user_data):
        self.x = user_data[3]
        self.y = user_data[2]

"""
Getting all health professionals that are connected to the user
"""
def select_Health_Prof(CPR_number):
    cur = conn.cursor()
    sql = """
    SELECT name, phone_number,department_address, role From(
    SELECT name, phone_number, role, cpr FROM
    (SELECT * FROM (
    SELECT healthprofessionals_cpr FROM (
        SELECT * FROM person WHERE person.cpr = %s)
    AS P
    Inner JOIN patientshealthprofessionals ON
    P.cpr = patientshealthprofessionals.patients_cpr) AS HP
    Inner JOIN person ON HP.healthprofessionals_cpr = person.cpr) AS Health
    Inner JOIN healthprofessionals ON
    Health.healthprofessionals_cpr = healthprofessionals.person_cpr) as HHP
    Inner JOIN WorksIn ON HHP.cpr = WorksIn.HealthProfessionals_cpr;
    """
    cur.execute(sql, (CPR_number,))
    user = HealthProfessionals(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return user


def select_test_res(CPR_number):
    cur = conn.cursor()
    sql = """
        SELECT * FROM Results WHERE Patients_cpr = %s;
    """
    cur.execute(sql, (CPR_number,))
    # TODO: We need to make a specific class for test result
    # As it stands we are using HealthProfessionals which is not
    # super
    user = HealthProfessionals(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return user


def search_test_res(CPR_number, search_text):
    cur = conn.cursor()

    search_text = "%"+search_text+"%"
    sql = """
        SELECT * FROM(
            SELECT * FROM(
                SELECT ID, some_Date FROM Results WHERE Results.Patients_cpr = %s
        ) AS type
        NATURAL JOIN ResultsData) AS RD
        WHERE UPPER(RD.Description) LIKE UPPER(%s) OR UPPER(RD.Units) LIKE UPPER(%s)
        ORDER BY some_date, id;
    """
    cur.execute(sql, (CPR_number,search_text, search_text))
    search_res = HealthProfessionals(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return search_res

def select_test_list(CPR_number):
    cur = conn.cursor()
    sql = """
        SELECT * FROM (
            SELECT ID,some_Date FROM Results
            WHERE Results.Patients_cpr=%s) AS foo
        NATURAL JOIN ResultsData
        ORDER BY some_date, id;
    """
    cur.execute(sql, (CPR_number,))
    ret = Result_Types(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return ret


def select_specific_type_res(CPR_number, of_type):
    cur = conn.cursor()
    sql = """
        SELECT some_Date, data FROM(
            SELECT * FROM(
                SELECT ID, some_Date FROM Results WHERE Results.Patients_cpr = %s
        ) AS type
        LEFT JOIN ResultsData ON type.ID = ResultsData.ID) AS RD
        WHERE RD.description = %s
    """
    cur.execute(sql, (CPR_number,of_type))
    ret = Result_Types(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return ret

"""
Query to select results based on type and a start and end date
"""
def select_specific_type_res_date(CPR_number, of_type, for_date, to_date):
    cur = conn.cursor()
    sql = """
        SELECT * FROM (
            SELECT some_Date, data FROM(
                SELECT * FROM( SELECT ID,some_Date FROM Results
                WHERE Results.Patients_cpr= %s) AS foo
        LEFT JOIN ResultsData ON foo.ID = ResultsData.ID) AS RD
        WHERE RD.description = %s) AS dat
        WHERE dat.some_Date BETWEEN %s AND %s
        ORDER BY some_date;
    """
    # Python magic to make sure that the input is always in the correct date
    # format that can be understod by sql
    try:
        f_d = dateutil.parser.parse(for_date.raw_data[0]).strftime("%Y-%m-%d")
    except ValueError:
        f_d = datetime.now().strftime("%Y-%m-%d")
    
    try:
        t_d = dateutil.parser.parse(to_date.raw_data[0]).strftime("%Y-%m-%d")
    except ValueError:
        t_d = datetime.now().strftime("%Y-%m-%d")
    
    
    cur.execute(sql, (CPR_number, of_type, f_d, t_d))
    ret = Result_Types(cur.fetchall()) if cur.rowcount > 0 else None;
    cur.close()
    return ret



class Result_Types(tuple, UserMixin):
    def __init__(self, user_data):
        self.type = user_data
