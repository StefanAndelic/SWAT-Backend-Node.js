const winston = require('winston');

function log (err, req, res, next){
  winston.error(err.message, err);

  res.status(500).send('Something failed.');
}

module.exports = log;