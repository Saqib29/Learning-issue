const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello World');
});

app.get('/alien', (req, res) => {
    const id = req.query.id;
    res.send('Welcome Alien ' + id);
});

app.get('/alien/:id', function(req, res){
    const id = req.params.id;
    res.send('Hay Saqib from:- '+id);
})

app.listen(9000, (req, res) => {
    console.log('Running...')
});