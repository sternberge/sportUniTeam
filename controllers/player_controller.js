const Player = require('../models/Player');

module.exports = {
  findPlayerById (req, res) {
    Player.findById(req.params.player_id, (err,player)=>{
      if (err)
        res.send(err);
      res.json(player);
    });
  },
  createPlayer(req, res, next) {
    const playerProp = req.body;
    Player.create(playerProp)
      .then(player => res.send(player))
      .catch(next);
  },
  editPlayer(req, res, next) {
    const playerId = req.params.player_id;
    const playerProperties = req.body;
    Player.findByIdAndUpdate({ _id: playerId }, playerProperties)
      .then(() => Player.findById({ _id: playerId }))
      .then(player => res.send(player))
      .catch(next);
  },
  deletePlayer(req, res, next) {
    const playerId = req.params.player_id;

    Player.findByIdAndRemove({ _id: playerId})
      .then(player => res.status(204).send(player))
      .catch(next);
  },
  findPlayerTeam(req, res, next){
    const playerId = req.params.player_id;
    Player.findById({ _id: playerId })
      .populate('team')
      .then(player => res.send(player))
      .catch(next);
  }
};
