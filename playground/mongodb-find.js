// const MongoClient = require('mongodb').MongoClient; //connect to client
const {MongoClient, ObjectID}  = require('mongodb'); //connect to client using destructuring

//establish connection to mongo document
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  //return all undone todos
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log("Unable to fetch todos", error);
  // });

  //return count of undone todos
  // db.collection('Todos').find({completed: false}).count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (error) => {
  //   console.log("Unable to fetch todos", error);
  // });

  db.collection('Users').find({name: 'Fideo'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch users", error);
  });

  db.close(); // closes connection with MongoDB server
});
