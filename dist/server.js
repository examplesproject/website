app = require('./app');

exports.start = function() {
  app.listen(3000);
  console.log('Listening on port 3000');
}