// const MongoClient = require('mongodb').MongoClient; //connect to client
const {MongoClient, ObjectID}  = require('mongodb'); //connect to client using destructuring

//establish connection to mongo document
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  //creates a collection, the NoSQL equivalent of a table
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert to do', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // }); // create Todos collection and document

    // db.collection('Users').insertOne({
    //   name: 'Fideo',
    //   age: 6,
    //   location: 'NoodleTown'
    //   }, (error, result) => {
    //   if(error){
    //     return console.log('Unable to insert user', error);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

  db.close(); // closes connection with MongoDB server
});
