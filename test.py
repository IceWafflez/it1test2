from flask import request
from flask import Flask
from flask_cors import CORS
from datetime import datetime



app = Flask(__name__)
CORS(app)


print("test")
@app.route("/")
def hello():
    return "Hello, World!"
@app.route('/test',methods=['GET', 'POST']) 
def main():
    # datetime object containing current date and time
    print("buffer")
    data= request.get_json()
    print(data["mail"])
    now = datetime.now()
    dt_string = now.strftime("%H:%M:%S %d/%m/%Y ")
    return {"test":f"serveren har kontakt kl {dt_string}"}
    
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)