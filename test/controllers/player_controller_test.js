/*const PlayerController = require('../../controllers/college_controller');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Player = mongoose.model('college');
const assert =  require('assert');
//mongoose.Promise = global.Promise;


describe('Player Controller Test', () => {

  it('Post request to create a new player', (done) => {
    request(app)
    .post('/api/players')
    .send({name : 'ecetoto1',
    division: 'Division 1 Men',
    conference: 'conference',
    ranking: 1,
    phone: 02457889456,
    mascot: 'ours'})
    .end(() =>{

      done();
    })
  });

  it('Get request to api/college/college_id to find a college by id', (done) => {
    const college = new College({
      name : 'ecetest',
      division: 'Division 1 Men',
      conference: 'conference',
      ranking: 1
    });
    college.save().then(() => {
      request(app)
      .get(`/api/colleges/$college._id`)
      .end((err, response) => {
        //console.log(response);
        done();
      })
    });
  });


  it('Put to /api/colleges/college_id can update a record', done => {
    const college = new College({
      name : 'Heriot Watt',
      division: 'Division 1 Men',
      conference: 'conference',
      ranking: 1
    });

    college.save().then(() => {
      request(app)
      .put(`/api/colleges/${college._id}`)
      .send({ ranking: 2 })
      .end(() => {
        College.findOne({ name : 'Heriot Watt' })
        .then(college => {
          assert(college.ranking === 2);
          done();
        });
      });
    });
  });
});
*/
