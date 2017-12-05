const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConferenceSchema = new Schema({
  conferenceLabel: String,
  isDeleted: Boolean
});

const Conference = mongoose.model('conference', ConferenceSchema);
module.exports = Conference;
