const College = require('../models/College');

module.exports = {
  findCollegeById (req, res) {
    College.findById(req.params.college_id, (err,college)=>{
      if (err)
        res.send(err);
      res.json(college);
    });
  },
  createCollege(req, res, next) {
    const collegeProp = req.body;
    College.create(collegeProp)
      .then(college => res.send(college))
      .catch(next);
  },
  editCollege(req, res, next) {
    const collegeId = req.params.college_id;
    const collegeProperties = req.body;
    College.findByIdAndUpdate({ _id: collegeId }, collegeProperties)
      .then(() => College.findById({ _id: collegeId }))
      .then(college => res.send(college))
      .catch(next);
  },
  deleteCollege(req, res, next) {
    const collegeId = req.params.college_id;

    College.findByIdAndRemove({ _id: collegeId })
      .then(college => res.status(204).send(college))
      .catch(next);
  }
};
