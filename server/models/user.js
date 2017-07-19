const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


//in order to create model methods/instance methods you need to use a schema
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
     validator: validator.isEmail,
      message: `{VALUE} is not a valid email.`
      }
    },
    password: {
      type: String,
      require: true,
      minLength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token){
  var User = this;
  var decoded; //keep undefined

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch(e) {
    return Promise.reject(); //if token cannot be verified, throw an error
  }

  //use handy mongoDB . notation
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

//mongoose middleware, runs before save
UserSchema.pre('save', function (next){
  var user = this;

  if(user.isModified('password')){ //only hash password if it is changing
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (error, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};
