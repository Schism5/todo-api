//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log('Unable to connect to MongoDB', error);
        return;
    }

    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todo').deleteMany({
    //     text:'learn vue'
    // }).then(result => {
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todo').deleteOne({text:'learn react'}).then(result => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todo').findOneAndDelete({
    //     completed:false
    // }).then(result => {
    //     console.log(result);
    // });

    //quiz
    db.collection('User').findOneAndDelete({
        "_id" : new ObjectId("59d6930a45d7623064a6fc1d")
    }).then(result => {
        console.log(result);
    });

    db.close();
});