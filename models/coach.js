const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
  userInformations: { type: Schema.Types.ObjectId, ref: 'user' },
  position: {
    type: String,
    enum: ['Head Coach','Assistant Coach'],
    default: 'Assistant Coach',
    required: true
  }
});

const Coach = mongoose.model('coach', CoachSchema);
module.exports = Coach;
