const express = require('express');
const development_config = require("./config/development.json")
const events = require('./routes/events');
const users = require('./routes/users');
const auth = require('./routes/auth');
const winston = require('winston');
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(express.static('assets'));
app.use(helmet());
app.use(compression());
require("./startup/db_connection")();
require('./startup/error_logging')();


app.use(express.json());
app.use('/api/events',events);
app.use('/api/users',users);
app.use('/api/auth',auth);

function start(){
    console.log(`Server started on port ${port}`)
}

const port = process.env.PORT || development_config.port;
const server = app.listen(port, start);

module.exports = server;