const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/coach_test');
  mongoose.connection
  .once('open', () => {
    const { coaches, colleges, players } = mongoose.connection.collections;
    //coaches.drop(() => {
      colleges.drop(() => {
        //players.drop(() => {
          done();
        //});
      });
    //});
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });
});
// NODE_ENV=test a rajouter dans la partie packageconfig dans test
