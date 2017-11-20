const mongoose = require('mongoose');
const CollegeSchema = require('./college');
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
  firstName: {
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
    /*validate: {
      validator(email) {
        // eslint-disable-next-line max-len
        const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },
      message: '{VALUE} is not a valid email.',
    },*/
    lowercase: true
  },
  birthdate: Date,
  position: {
    type: String,
    enum: ['Head Coach','Assistant Coach'],
    default: 'Assistant Coach',
    required: true
  },
  password: {
    type: String,
    required: true
  },
  college: {
    type: Schema.Types.ObjectId, ref: 'college'
  }
});

const Coach = mongoose.model('coach', CoachSchema);
module.exports = Coach;
