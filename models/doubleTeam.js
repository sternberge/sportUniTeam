const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoubleTeamSchema = new Schema({
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'player'
  }]
});

const DoubleTeam = mongoose.model('team', DoubleTeamSchema);
module.exports = DoubleTeam;
