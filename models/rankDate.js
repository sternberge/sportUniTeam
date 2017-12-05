const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankDateSchema = new Schema({
  participantType: String,
  date: Date,
  description: String,
  show: Boolean,
  status: Number,
  entityRank: Number,
  league: { type: Schema.Types.ObjectId, ref: 'league' }
});

const RankDate = mongoose.model('team', RankDateSchema);
module.exports = RankDate;
