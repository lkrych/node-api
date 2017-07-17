var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
