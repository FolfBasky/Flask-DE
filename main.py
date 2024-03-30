from flask import Flask, url_for, render_template, redirect, abort

app = Flask(__name__)
DEBUG = True
menu = [{'link':'/','title':'Startseite'},
        {'link':'/Stadt','title':'Die zukünftige Lebensweise in meiner Stadt'},
        {'link':'/about','title':'Die Informationen über die Schöpfer'}]

@app.route('/')
def index():
    return render_template('index.html',title='Startseite',menu=menu)

@app.route('/Stadt')
def stadt():
    return render_template('stadt.html',title='Stadt page', menu=menu)

@app.route('/Dorf')
def dorf():
    return render_template('dorf.html',title='Dorf page', menu=menu)

@app.route('/about')
def about():
    return render_template('about.html',title='About page', menu=menu)

@app.errorhandler(404)
def page_not_found(error):
    return render_template(f'Page not found <a href={url_for("index")}> return to main page </a>')

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=DEBUG)
# end main