const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankRulePointSchema = new Schema({
  rank: Number,
  winPoints: Number,
  lossPoints: Number,
  bonusPoint: Number,
  rankrule: { type: Schema.Types.ObjectId, ref: 'rankrule' },
});

const RankRulePoint = mongoose.model('rankRulePoint', RankRulePointSchema);
module.exports = RankRulePoint;
