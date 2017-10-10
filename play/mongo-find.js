//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log('Unable to connect to MongoDB', error);
        return;
    }

    console.log('Connected to MongoDB server');

    db.collection('Todo').find({
        _id: new ObjectID('59d6924a460a811e381bb890')
    }).toArray().then(docs => {
        console.log(JSON.stringify(docs, null, 4));
    }, error => {

    });

    db.collection('Todo').find().count().then(count => {
        console.log('Todos count: ' + count);
    }, err => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});