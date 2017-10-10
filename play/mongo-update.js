//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) {
        console.log('Unable to connect to MongoDB', error);
        return;
    }

    console.log('Connected to MongoDB server');

    db.collection('Todo').findOneAndUpdate({
        text: "some text"
    }, {
        $set : { completed:true }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    db.close();
});