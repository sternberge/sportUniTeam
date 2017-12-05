const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankRuleSchema = new Schema({
  description: String,
  participantType: String,
  date: Date,
  nonRankedWinPoints: Number,
  nonRankedLossPoints: Number,
  nonRankedBonusPoint: Number,
  league: { type: Schema.Types.ObjectId, ref: 'league' },
});

const RankRule = mongoose.model('team', RankRuleSchema);
module.exports = RankRule;
