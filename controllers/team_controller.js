const Team = require('../models/Team');

module.exports = {
  findTeamById (req, res) {
    Team.findById(req.params.college_id, (err,team)=>{
      if (err)
        res.send(err);
      res.json(team);
    });
  },
  createTeam(req, res, next) {
    const teamProp = req.body;
    Team.create(teamProp)
      .then(team => res.send(team))
      .catch(next);
  },
  editTeam(req, res, next) {
    const teamId = req.params.team_id;
    const teamProperties = req.body;
    Team.findByIdAndUpdate({ _id: teamId }, teamProperties)
      .then(() => Team.findById({ _id: teamId }))
      .then(team => res.send(team))
      .catch(next);
  },
  deleteTeam(req, res, next) {
    const teamId = req.params.team_id;

    Team.findByIdAndRemove({ _id: teamId})
      .then(team => res.status(204).send(team))
      .catch(next);
  }
};
