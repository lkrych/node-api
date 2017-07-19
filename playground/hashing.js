const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = "123abc!";
//
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (error, hash) => {
    console.log(hash);
  });
});

var hashedPassword = "$2a$10$PG5c6Xv8kaEcU8W/rdTZ2.igZDA9lJ8IfUKIEuH3fbXusqDi9QCfG";

bcrypt.compare('123', hashedPassword, (err, result) => {
  console.log(result);
});

//example for using jwt
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'somesecret');
// console.log('JWT: ', token);
//
// var decoded = jwt.verify(token, 'somesecret');
// console.log('Decoded: ', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token ={
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// //man in the middle
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash){
//   console.log('The data was not changed');
// } else {
//   console.log('Data was changed, do not trust the data');
// }
