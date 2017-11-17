const assert = require('assert');
const Coach = require('../models/coach');
const College = require('../models/college');


describe('Creating Records', () => {
  it('save a coach and university', (done) => {
    var a;
    var  address = ['chemin des fleurs','Miami','citycenter'];
    const monCollege = new College({name: 'Stanford', address: address, division:'Division 1 Men', conference: '1', ranking:2 })
    const joe = new Coach({ firstName: 'Joe', lastName: 'dupont', email:'joe2dupont@gmail.com', password:'password', college: monCollege});
    monCollege.coaches = [joe];
    joe.save(function (err) {
      monCollege.save()
        .then(() => {
          done();
        });
    });
  });
  it('Find the relation between a college and its coaches', (done) => {
    College.findOne({ name: 'Stanford' })
      .populate('coaches')
      .then((college) => {
        console.log(college);
        done();
      });
  });
});
