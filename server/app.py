from flask import Flask, jsonify, request
from flask_cors import CORS

# Importing files that I created for the project
from data import *


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/fetch_initial_table', methods=['GET', 'POST'])
def fetch_initial_table():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        table_data = data.get_initial_table_data(post_data)
        return jsonify(table_data)

@app.route('/fetch_based_on_Single_Selection', methods=['GET', 'POST'])
def fetch_based_on_Single_Selection():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        print(post_data)
        unique_values_list = data.get_distinct_values(post_data)
        df_sorted_by_column = data.change_singe_column(post_data)
        data_container = []
        data_container.append(unique_values_list)
        data_container.append(df_sorted_by_column)
        return jsonify(data_container)


if __name__ == '__main__':
    app.run()