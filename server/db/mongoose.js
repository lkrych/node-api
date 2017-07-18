var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //configure mongoose to use standard Promise library
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
