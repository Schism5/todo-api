var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var mongoose = require('./mongoose');
var Todo = require('./model/todo');
var User = require('./model/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send({todos});
    }, error => {
        console.log('Unable to get all todos', error);
        res.status(400).send(error);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!id || !ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    Todo.findById(id).then(todo => {
        if(todo) {
            res.send(todo);
            return;
        }

        res.status(400).send();
    }).catch(error => {
        console.log('Error finding todo by ID');
        res.status(500).send();
    });
});

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});

module.exports = app;