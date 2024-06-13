const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true // Allows unique index to be optional
  },
  username: {
    type: String,
    required: false
  },
  profilePhoto: {
    type: String,
    required: false
  }
});

// Add passport-local-mongoose plugin to handle local authentication
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email" // Set the email field as the username
});

module.exports = mongoose.model('User', userSchema);
