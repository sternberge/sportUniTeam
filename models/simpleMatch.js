const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SimpleMatchSchema = new Schema ({
  winnerDouble: [{ type: Schema.Types.ObjectId, ref: 'player' }],
  loserDouble: [{ type: Schema.Types.ObjectId, ref: 'player' }],
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

const SimpleMatch = mongoose.model('simpleMatch', SimpleMatchSchema);
module.exports = SimpleMatchSchema;
