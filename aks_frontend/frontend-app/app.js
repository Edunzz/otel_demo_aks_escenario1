const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const response = await fetch(`${process.env.BACKEND_IP}/`);
    const productos = await response.json();
    res.render('index', { productos });
});

app.get('/compra', async (req, res) => {
    const response = await fetch(`${process.env.CROSS_IP}/compra`);
    const resultado = await response.text();
    res.render('compra', { resultado });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});