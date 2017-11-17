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
    unique: true
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
