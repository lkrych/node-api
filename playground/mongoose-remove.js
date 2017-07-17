const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }); //does not return docs back

// Todo.findOneAndRemove({}).then((result) => {
//
// }); //returns docs

Todo.findByIdAndRemove('596d474fe0df59672bc5d634').then((todo) => {
  console.log(todo);
});
