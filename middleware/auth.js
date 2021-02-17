const jwt = require('jsonwebtoken');
const development_config = require('../config/development.json');


function auth (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token,'jwtPrivateKey'); //development_config.token_expiration
    req.user = decoded; 
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = auth;