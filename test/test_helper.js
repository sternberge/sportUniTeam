const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/coach_test');
  mongoose.connection
  .once('open', () => {
    const { coaches, colleges } = mongoose.connection.collections;
    coaches.drop(() => {
      colleges.drop(() => {
        done();
      });
    });
  })
  .on('error', (error) => {
    console.warn('Warning', error);
  });  
});
