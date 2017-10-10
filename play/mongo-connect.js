const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log('Unable to connect to MongoDB', error);
        return;
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todo').insertOne({
    //     text: 'some text',
    //     complete: false
    // }, (error, result) => {
    //     if(error) {
    //         console.log('Unable to insert', error);
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    // db.collection('User').insertOne({
    //     name: 'Scott',
    //     age: 29,
    //     location: 'Atlanta'
    // }, (error, result) => {
    //     if(error) {
    //         console.log('Unable to insert', error);
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    db.close();
});