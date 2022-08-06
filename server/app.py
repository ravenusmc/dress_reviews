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

@app.route('/fetch_initial_table', methods=['GET'])
def fetch_initial_table():
    data = Data()
    table_data = data.get_initial_table_data()
    print(table_data)
    return jsonify(table_data)

@app.route('/fetch_based_on_Division_name', methods=['GET', 'POST'])
def fetch_based_on_Division_name():
    if request.method == 'POST':
        post_data = request.get_json()
        print(post_data)
        return jsonify('5')


if __name__ == '__main__':
    app.run()