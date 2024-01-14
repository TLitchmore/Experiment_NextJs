from flask import Flask, jsonify

app = Flask(__name__)



@app.route("/", methods = ["GET"])
def hello_world():
    return jsonify({
        "messages":[
            {"content":"Hello world"},
            {"content": "Goodbye world"},
            {"content": "Finally"}
        ]
    })

if __name__ == "__main__":
    app.run(debug=True)


