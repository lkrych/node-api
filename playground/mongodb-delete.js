const {MongoClient, ObjectID}  = require('mongodb'); //connect to client using destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Users').deleteMany({name: 'Fideo'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("596a85a861af2d24752d3584")
  }).then((results) => {
    console.log(results);
  });

  db.close(); // closes connection with MongoDB server
});
