const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (request, response) => {
    response.render('home', {
        titulo: 'Home'
    });
});

app.get('/inicio', (request, response) => {
    response.render('inicio', {
        titulo: 'Inicio'
    });
});

app.get('/bienvenidos', (request, response) => {
    response.render('bienvenidos', {
        titulo: 'Bienvenidos'
    });
});

app.listen(8080);