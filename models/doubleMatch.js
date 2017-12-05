const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoubleMatchSchema = new Schema ({
  winnerDouble: [{ type: Schema.Types.ObjectId, ref: 'doubleTeam' }],
  loserDouble: [{ type: Schema.Types.ObjectId, ref: 'doubleTeam' }],
  score: Number,
  date: Date,
  springFall: Boolean,
  springPosition: Number,
  round: Number,
  locationCity: String,
  locationState: String,
  homeAway: String,
  isRanked: Boolean,
  springMatchType: String,
  tournament: { type: Schema.Types.ObjectId, ref: 'tournament' },
});

const DoubleMatch = mongoose.model('doubleMatch', DoubleMatchSchema);
module.exports = DoubleMatchSchema;
