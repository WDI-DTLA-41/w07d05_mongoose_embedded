var mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
});

var UserSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema]
});


// defining the user schema to that model
var User = mongoose.model("User", UserSchema);

//make this available to our other filesc
module.exports = User
