from flask import Flask, render_template, request



app = Flask(__name__, template_folder='../templates', static_folder='../static')



@app.route('/home')
@app.route('/', methods = ['POST', 'GET'])
def home():
    return render_template("index.html")