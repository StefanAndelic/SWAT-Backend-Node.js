const Joi = require('joi');
const mongoose = require('mongoose');


const Event = mongoose.model('Event', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
 image: { 
    type: String, 
    required: true,
    minlength:5,
    maxlength:255,
  },
  time: { 
    type: String, 
    required: true,
    minlength:5,
    maxlength:255,
  },
  date:{ 
    type: String, 
    required: true,
    minlength:5,
    maxlength:255,
  },
  duration: { 
    type: Number, 
    required: true,
    minlength:5,
    maxlength:255,
  },
  description: { 
    type: String, 
    required: true,
    minlength:5,
    maxlength:255,
  },
  
}));


function validateEvent(event){
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    image: Joi.string().min(5).max(50).required(),
    time: Joi.string().min(5).max(50).required(),
    date: Joi.string().min(5).max(50).required(), 
    duration: Joi.string().min(0).max(5).required(),
    description: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(event);
  }

exports.Event = Event; 
exports.validate = validateEvent;