const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  gender: {
    type: String,
    enum: ['Man','Woman'],
    required: true
  },
  college: { type: Schema.Types.ObjectId, ref: 'college' },
  coaches: [{
    type: Schema.Types.ObjectId,
    ref: 'coach'
  }]

});

const Team = mongoose.model('team', TeamSchema);
module.exports = Team;
