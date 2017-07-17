const {MongoClient, ObjectID}  = require('mongodb'); //connect to client using destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');

  //use update operator $set
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('596a9d3f187381e03e6d2920')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //change name of user and increment age
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('596a85a3699d35246e3f1096')
  }, {
    $set: {
      name: 'Fideo'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close(); // closes connection with MongoDB server
});
