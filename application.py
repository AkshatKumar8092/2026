from flask import Flask

app = Flask(__name__)


from flask_sqlalchemy import SQLAlchemy


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db =SQLAlchemy(app)

class Drink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    dscription = db.Column(db.String(1000))


    def __repr__(self):
        return f"<Drink {self.name}> & {self.dscription}"
    



@app.route('/')
def index():
    return "Hello, World!"




@app.route('/drinks')
def get_drinks():
    return {"drinks": ["coffee", "tea", "juice"]}