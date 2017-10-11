const {ObjectID} = require('mongodb');

const mongoose = require('./../mongoose');
const Todo = require('./../model/todo');

var id = "59de7f4f8ae7c931541b6bf9-";

if(!ObjectID.isValid(id)) {
    console.log('ID invalid');
}

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then(todo => {
//     if(!todo) {
//         console.log('ID not found.');
//         return;
//     }
//     console.log('Todo by id: ', todo);
// }).catch(error => {
//     console.log(error);
// });