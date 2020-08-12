"""import MySQLdb

'''Conection a MySQL'''
db = MySQLdb.connect(host=MY_HOST, user=MY_USER, passwd=MY_PASS, db=MY_DB)
'''Obtener un cursor en MySQL Python'''
cur = db.cursor()


'''Ejecutando consultas MySQL en Python'''
''' Example 1: Create Table '''
cur.execute("CREATE TABLE song ( id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, title TEXT NOT NULL )")

''' Example 2: Execute Insert / Single Substitution Query '''
songs = ('Purple Haze', 'All Along the Watch Tower', 'Foxy Lady')
for song in songs:
    cur.execute("INSERT INTO song (title) VALUES (%s)", song)
    print "Auto Increment ID: %s" % cur.lastrowid

''' Example 3: Multiple Substitution Query '''
cur.execute("SELECT * FROM song WHERE id = %s or id = %s", (1,2))


''' Example 4: Execute Select '''
numrows = cur.execute("SELECT * FROM song")
print "Selected %s rows" % numrows'''No es preferida por la api 2.0'''  
print "Selected %s rows" % cur.rowcount


''' 
Obteniendo resultados de consultas
Método 1: recuperar todo a la vez '''
# Print results in comma delimited format
cur.execute("SELECT * FROM song")
rows = cur.fetchall()
for row in rows:
    for col in row:
        print "%s," % col
    print "\n"

''' Método 2: buscar uno a la vez '''
cur.execute("SELECT * FROM song WHERE id = 1")
print "Id: %s -- Title: %s" % cur.fetchone()

''' 
Excepciones y Errores '''
# Get data from database
try:
    cur.execute("SELECT * FROM song")
    rows = cur.fetchall()
except MySQLdb.Error, e:
    try:
        print "MySQL Error [%d]: %s" % (e.args[0], e.args[1])
    except IndexError:
        print "MySQL Error: %s" % str(e)
# Print results in comma delimited format
for row in rows:
    for col in row:
        print "%s," % col
    print "\n"

''' Clean Up '''
# Close all cursors
cur.close()
# Close all databases
db.close()

''' Connecting with sqlalchemy '''
from sqlalchemy import create_engine
engine = create_engine('sqlite:///:memory:', echo=True)

"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:/home/usuario/Escritorio/youtube/youtube.bd"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Equipo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String)
    pais = db.Column(db.String)
    
    def __repr__(self):
        return "<Equipo %r>" % self.nombre
    
if __name__ == '__main__':
    app.run(debug=True)
    