const {Event, validate} = require('../models/event')
const express = require('express');
const auth = require('../middleware/auth')
const admin = require('../middleware/admin');
const router = express.Router();


router.get('/', auth,  async (req, res) => { 
    const events = await Event.find().select("-__v").sort('name');
    res.send(events);
  });
  
  router.post('/', [auth,admin] ,async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let event_object = new Event({ 
      name: req.body.name,
      image: req.body.image,
      time: req.body.time,
      date : req.body.date,
      duration: req.body.duration,
      description : req.body.description,
      
     
    });
    const event = await event_object.save();
    res.send(event);
  });

  router.delete('/:id',  async (req, res) => {
    const event = await Event.findByIdAndRemove(req.params.id);
  
    if (!event) return res.status(404).send('The event with the given ID was not found.');
  
    res.send(event);
  });
  
  router.get('/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
  
    if (!event) return res.status(404).send('The event with the given ID was not found.');
  
    res.send(event);
  });


module.exports = router; 