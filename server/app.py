from flask import Flask, jsonify, request
from flask_cors import CORS


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/fetch_based_on_Division_name', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        post_data = request.get_json()
        print(post_data)
        return jsonify('5')


if __name__ == '__main__':
    app.run()