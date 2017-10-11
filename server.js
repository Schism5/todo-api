var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./mongoose');
var Todo = require('./model/todo');
var User = require('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.send(doc);
    }, error => {
        console.log('Unable to save todo', error);
        res.status(400).send(error);
    });
});

app.listen(3000, () => {
    console.log('Server up on port 3000');
});

module.exports = app;