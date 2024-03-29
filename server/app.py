from flask import Flask, jsonify, request
from flask_cors import CORS

# Importing files that I created for the project
from data import *
from db import *
from user import *


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        db = Connection()
        post_data = request.get_json()
        user = User(post_data['firstName'], post_data['lastName'], post_data['email'],
                    post_data['userName'], post_data['password'])
        hashed = db.encrypt_pass(post_data)
        user_created = db.insert(user, hashed)
        print('DONE')
        return jsonify(user_created)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        db = Connection()
        post_data = request.get_json()
        username = post_data['userName']
        password = post_data['password']
        login_values = {}
        # Checking to see if the user is in the database
        login_flag, not_found, password_no_match, user = db.check(
            username, password)
        login_values['login_flag'] = login_flag
        login_values['Not_found'] = not_found
        login_values['Password_no_match'] = password_no_match
        login_values['user'] = user
    return jsonify(login_values)


@app.route('/fetch_initial_table', methods=['GET', 'POST'])
def fetch_initial_table():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        table_data, dataset_total_length = data.get_initial_table_data(
            post_data)
        data_container = []
        data_container.append(table_data)
        data_container.append(dataset_total_length)
        return jsonify(data_container)


@app.route('/fetch_based_on_Single_Selection', methods=['GET', 'POST'])
def fetch_based_on_Single_Selection():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        unique_values_list = data.get_distinct_values(post_data)
        df_sorted_by_column, dataset_total_length = data.change_singe_column(
            post_data)
        data_container = []
        data_container.append(unique_values_list)
        data_container.append(df_sorted_by_column)
        data_container.append(post_data['selection'])
        data_container.append(dataset_total_length)
        return jsonify(data_container)


@app.route('/fetch_data_based_on_age', methods=['GET', 'POST'])
def fetch_data_based_on_age():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        age_data_set, dataset_total_length = data.get_data_based_on_age(
            post_data)
        data_container = []
        data_container.append(age_data_set)
        data_container.append(dataset_total_length)
        return jsonify(data_container)


@app.route('/get_data_based_off_range_selection', methods=['GET', 'POST'])
def get_data_based_off_selection():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        age_data_set, dataset_total_length = data.get_data_all_values(
            post_data)
        data_container = []
        data_container.append(age_data_set)
        data_container.append(dataset_total_length)
        return jsonify(data_container)


if __name__ == '__main__':
    app.run()
