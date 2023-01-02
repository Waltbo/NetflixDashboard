import json
from flask_cors import CORS, cross_origin
from flask import Flask
from backend.config.config import *

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello, World!'




#generates data for piechart
@app.route('/pieData', methods=['GET'])
@cross_origin()
def dataPie():
  return json.dumps(getTopCategory('director', 10))


@app.route('/lineData', methods=['GET'])
@cross_origin()
def dataLine():
  return json.dumps(getTopCategory('listed_in', 15))



#populates table for site
@app.route('/getAll', methods=['GET'])
@cross_origin()
def dataTable():
    return json.dumps(process_data())


