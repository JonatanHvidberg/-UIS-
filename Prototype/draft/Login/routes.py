import random, os
from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, send_from_directory
from minsp import app, conn, bcrypt
from minsp.forms import CustomerLoginForm, GraphForm, SearchForm
from flask_login import login_user, current_user, logout_user, login_required
from minsp.models import *#Customers, select_Customers, select_Health_Prof, select_test_res,select_Result_Types,select_specific_type_res
from minsp.helper_functions import *
import os


Login = Blueprint('Login', __name__)

posts = [{}]


@Login.route("/")
@Login.route("/home")
def home():
    return render_template('home.html', posts=posts)


@Login.route("/about")
def about():
    return render_template('about.html', title='About')


@Login.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('Login.home'))
    form = CustomerLoginForm()
    if form.validate_on_submit():
        user = select_Customers(form.id.data)
        # need some salt for that
        if user != None: # and bcrypt.check_password_hash(user[1], form.password.data):
            login_user(user, remember=form.remember.data)
            flash('Login successful.','success')
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('Login.home'))
        else:
            flash('Login Unsuccessful. Please check identifier and password', 'danger')
    return render_template('login.html', title='Login', form=form)


@Login.route("/logout")
def logout():
    print_debug(os.getcwd())
    #Cleaning up images that was created during session
    base = "minsp/static/images"
    files = os.listdir(base)
    for f in files:
        if str(current_user[0]) in f:
            os.remove(base+'/'+f)
    logout_user()

    return redirect(url_for('Login.home'))


@Login.route("/graph", methods=['GET', 'POST'])
@login_required
def graph():
    form = GraphForm()
    types_of_res = select_Result_Types(current_user[0])
    types_of_res = unpack(types_of_res)
    form.types.choices = types_of_res

    if form.is_submitted():
        selected = form.types.raw_data
        res = select_specific_type_res_date(current_user[0], selected[0],form.from_date, form.to_date)
        filename = create_fig(selected, res, current_user[0])
        return render_template('graph.html', name='new_plot', url=filename, form=form)

    else:
        return render_template('graph.html', form=form)


@Login.route("/health")
@login_required
def health():
    doctor = select_Health_Prof(current_user[0])
    return render_template("health.html", doctor=doctor, title="Contacts")


@Login.route("/results", methods=['GET', 'POST'])
@login_required
def results():
    form = SearchForm()
    cpr = current_user[0]
    types = select_test_list(cpr)
    if form.is_submitted():
        search_text = form.search.raw_data[0]
        types = search_test_res(cpr, search_text)
        
    if types == None:
        types = []
    return render_template("results.html", types=types, title="Test Resulter", form=form)
