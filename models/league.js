const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  leagueLabel: String,
  leagueShortName: String,
  show: Boolean
});

const League = mongoose.model('league', LeagueSchema);
module.exports = League;
