from flask import Flask, request, make_response, redirect, render_template, session, url_for, flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired
import unittest

"""instancia WSGI de la clase Flask"""
''''Así Flask conoce la ubicación de los templates o archivos estaticos que se usen en la app.'''
app = Flask(__name__)
bootstrap = Bootstrap(app)

app.config['SECRET_KEY'] = 'SUPER SECRETO'

todos = ['Comprar cafe', 'Entregar solicitud de comprar', 'Entregar video del comprador']

class LoginForm(FlaskForm):
    username = StringField('Nombre de usuario', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Enviar')


@app.cli.command()
def test():
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner().run(tests)
    
    
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html', error=error)

@app.route('/')
def index():
    """Obteniendo ip"""
    user_ip = request.remote_addr
    """Redirrecionando la pagina a hello"""
    response = make_response(redirect('/hello'))
    """Guardandola en una cookie"""
    session['user_ip'] = user_ip

    return response

"""Donde queremos se corra la aplicacion"""
@app.route('/hello', methods=['GET', 'POST'])
def hello():
    """IP del usuario desde la cookie"""
    user_ip = session.get('user_ip')
    login_form = LoginForm()
    username = session.get('username')
    context = {
        'user_ip':user_ip,
        'todos':todos,
        'login_form': login_form,
        'username': username
    }
    
    if login_form.validate_on_submit():
        username = login_form.username.data
        session['username'] = username
        
        flash('Nombre de usuario registrado con exito')
        return redirect(url_for('index'))
    """Los asteriscos se deben a que locals() nos regresa un dict con las variables del contexto,
    pero render_template solo resive un argumento, asi que pasamos el diccionario con key y values
    en forma de argumentos opcionales. 

    Esto es util cuando empezamos a tener muchos datos enel entorno.
    """
    return render_template('hello.html', **context)

