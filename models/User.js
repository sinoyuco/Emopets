const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  pronouns: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('User', UserSchema);