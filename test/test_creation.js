
/*const Coach = require('../models/coach');
const assert = require('assert');
const College = require('../models/college');
const Player = require('../models/player');




describe('Creating Records', () => {
  it('save a coach and university', (done) => {
    var  address = ['chemin des fleurs','Miami','citycenter'];
    const monCollege = new College({name: 'ECE123', address: address, division:'Division 1 Men', conference: '1', ranking:2 });
    const joe = new Coach({ firstName: 'Martin', lastName: 'dupont', email:'joedupont@gmail.com', password:'password', college: monCollege});
    const joePlayer = new Player({firstName:'Mouloud',lastName: 'dupont', email:'joe222dupont@gmail.com', password:'password',ranked: 2,status:'active',year:'Freshman',gender:'Man'});
    //monCollege.coaches = [joe];
    joe.save(() => {
      monCollege.save(() => {
        joePlayer.save(() => {
          done();
        });
      });
    });
  });*/

  /*
  it('Find the relation between a college and its coaches', (done) => {
    College.findOne({ name: 'Stanford' })
      .populate('coaches')
      .then((college) => {
        //console.log(college);
        done();
      });
  });
  it('Find the relation between a college and its coaches', (done) => {
    College.findOne({ name: 'Stanford' })
      .then((college) => {
        //console.log(college);
        done();
      });
  });*/
//});
