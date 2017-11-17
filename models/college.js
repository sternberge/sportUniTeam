const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  /*address : {
    street: String,
    city: String,
    zipCode: String
  },*/
  address: [String],
  division: {
    type: String,
    enum: ['Division 1 Men', 'Division 1 Women', 'Division 2 Men','Division 2 Women'],
    required: true
  },
  conference: {
    type: String,
    required: true
  },
  ranking: {
    type: Number,
    required: true,
    default: 0
  },
  coaches: [{
    type: Schema.Types.ObjectId,
    ref: 'coach'
  }]

});

const College = mongoose.model('college', CollegeSchema);
module.exports = College;
