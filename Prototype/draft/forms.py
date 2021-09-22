from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, IntegerField, SelectField, DateField
from wtforms.validators import DataRequired, Length, EqualTo, ValidationError

class CustomerLoginForm(FlaskForm):
    id = IntegerField('CPR Nummer', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Husk Mig')
    submit = SubmitField('Login')


class GraphForm(FlaskForm):
    from_date = DateField('Vælg Start Dato', validators=[DataRequired()])
    to_date = DateField('Vælg Slut Dato', validators=[DataRequired()])
    types = SelectField("Type", choices=[], validators=[DataRequired()])
    submit = SubmitField('Vis Graf')


class SearchForm(FlaskForm):
	search = StringField('Søg Efter')
	submit = SubmitField('Vis Resultater')
