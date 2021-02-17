const development_config = require('../config/development.json');
const mongoose = require('mongoose');
const winston = require('winston');


function db() {

    mongoose.connect(`mongodb://localhost/${development_config.db}`,{ useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => winston.info(`Connected to mongodb://localhost/${development_config.db}`)).
    catch(err => winston.error("Could not connect to MongoDB..."))
}
    
module.exports = db;