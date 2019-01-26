const express = require('express');
const app = express();

app.use('/')

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/example', (req, res) => {
    res.send('Hitting the example route!');
});

app.get('/example/:name/:age', (req, res) => {
    const params = req.params;

    console.log(params);
    console.log(req.query);
    res.send(params.name + " : " + params.age);

})

app.listen(3000);