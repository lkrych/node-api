const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = "596c279fcea345106980b5f311";

//use ObjectID from mongo driver to validate ID!
// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid.');
// }

// Todo.find({ //uou can pass in an id as string with mongoose
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("ID not found.");
//
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   return console.log(e);
// });

var id = "596bd20bcae8a10a27048fe3";

User.findById(id).then((user) => {
  if(!user){
    return console.log("ID not found.");
  }
  console.log('User by Id', user);
}, (e) => {
  console.log(e);
});
