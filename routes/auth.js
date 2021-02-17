const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(!user){
        return status(400).send("Invalid email");
    }

    const validPassword = await  bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        return status(400).send("Invalid password");
    }

    const token = jwt.sign({_id:user._id, name:user.name,email:user.email, isAdmin: user.isAdmin}, 'jwtPrivateKey' , { expiresIn: 60*60 });
    
    res.send(token);

  });


function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(req, schema);
  }

exports.User = User;
module.exports = router; 
