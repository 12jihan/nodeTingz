const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example', (req, res) => {
    res.send('Hitting the example route!');
});

app.get('/example/:name/:age', (req, res) => {
    const params = req.params;

    console.log(params);
    console.log(req.query);
    res.send(params.name + " : " + params.age);

});

app.listen(3000);