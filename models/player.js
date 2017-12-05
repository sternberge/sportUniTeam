const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
  userInformations: { type: Schema.Types.ObjectId, ref: 'user' },
  status: {
    type: String,
    enum: ['active','graduated','quit','transferred','deleted','duplicate'],
    required: true
  },
  year: {
    type: String,
    enum: ['Freshman','Junior','Sophomore','Senior','Inactive'],
    required: true
  },
  team: { type: Schema.Types.ObjectId, ref: 'team' },
  ranking: {
    rank: Number,
    rankPoints: Number,
    rankDate: Date
  }
});

const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;
