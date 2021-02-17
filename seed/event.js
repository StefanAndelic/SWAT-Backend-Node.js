const { Event } = require("../models/event");
const mongoose = require("mongoose");
const db = require("../config/development.json")

const data = [
  {
    "name":"Cooking post",
    "image":db.assetsBaseUrl + "pizza.jpg",
    "time":"4-5pm",
    "duration":"4",
    "date":"26/08/2020",
    "description":"Kia ora team",

  },
  {
    "name":"Cooking post",
    "image":db.assetsBaseUrl + "pizza.jpg",
    "time":"4-5pm",
    "duration":"4",
    "date":"26/08/2020",
    "description":"Kia ora team",

  },
  {
   
    "name":"Cooking post",
    "image":db.assetsBaseUrl + "pizza.jpg",
    "time":"4-5pm",
    "duration":"4",
    "date":"26/08/2020",
    "description":"Kia ora team",

  },
  
];

async function seed() {
 
  await mongoose.connect(`mongodb://localhost/${db.testing_db}`,{ useNewUrlParser: true, useUnifiedTopology: true })
  await Event.deleteMany({});

  for (let event of data) {
    const ev = await new Event({name: event.name, image:event.image, time: event.time, duration: event.duration, date: event.date, description: event.description }).save();
    
    await Event.insertMany(event);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
