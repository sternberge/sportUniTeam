const mongoose = require('mongoose');
const CollegeSchema = require('./college');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
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
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthdate: Date,
  ranked : Number,
  status: {
    type: String,
    enum: ['active','graduated','quit','transferred','deleted','duplicate'],
    required: true
  },
  year: {
    type: String,
    enum: ['Freshman','Junior','Sophomore','Senior','Inactive'],
    required: true
  },
  gender: {
    type: String,
    enum: ['Man','Woman'],
    required: true
  },
  college: {
    type: Schema.Types.ObjectId, ref: 'college'
  },
  college: {
    type: Schema.Types.ObjectId, ref: 'team'
  },
});

const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;
