const mongoose = require('mongoose');
const CollegeSchema = require('./college');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  firstName : {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobilePhone: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    /*validate: {
      validator(email) {
        // eslint-disable-next-line max-len
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} is not a valid email.',
    }*/
  },
  password: {
    type: String,
    required: true
  },
  birthdate: Date,

  gender: {
    type: String,
    enum: ['Man','Woman'],
    required: true
  },

});

const User = mongoose.model('user', UserSchema);
module.exports = User;
