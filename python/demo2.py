# /// script
# requires-python = ">=3.12"
# dependencies = ["flask"]
# ///
from flask import Flask
import flask

# Use some syntax added in Python 3.12
type Point = tuple[float, float]

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World! %s"%Point

app.run(host='0.0.0.0', port=3333, debug=False)