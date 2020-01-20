from flask import Flask
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import request
import hashlib 
import os
import uuid
import json
import jwt
import math       
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
if __name__ == "__main__":
    app.run()

app.config["MONGO_URI"] = "mongodb://localhost:27017/cars"
mongo = PyMongo(app)


@app.route('/addcar', methods = ['POST'])
def addcar():
    car_model = request.json['car_model']
    car_type = request.json['car_type']
    seats = request.json['seats']
    color = request.json['color']
    car_id = str(uuid.uuid1().int)[:6]
    mongo.db.car.insert({'car_model' : car_model, 'car_type' : car_type, 'seats': seats, 'color' :color,'car_id':car_id})
    return {'status' : 200}


@app.route('/read/cars')
def readbycar():
    cars = mongo.db.car.find({})
    return dumps(cars)


@app.route('/book', methods = ['POST'])
def book():
    start = request.json['start']
    destination = request.json['destination']
    name = request.json['name']
    mobile = request.json['mobile']
    email = request.json['email']
    mongo.db.car.insert({'start' : start, 'destination' : destination, 'name': name, 'mobile' :mobile, 'email':email})
    return {'status' : 200}


if __name__ == "__main__":
    app.run()

