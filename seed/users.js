const { User } = require("../models/user");
const mongoose = require("mongoose");
const db = require("../config/developmentjson")

const data = [
  {
    "name":"User1",
    "email":"user@hotmail.com",
    "password":"user8"
  },
  {
    "name":"Admin",
    "email":"admin@hotmail.com",
    "password":"admin8",
    "isAdmin":"true",

  }
];

async function seed() {
 
  await mongoose.connect(`mongodb://localhost/${db.testing_db}`,{ useNewUrlParser: true, useUnifiedTopology: true })

  await User.deleteMany({});

  for (let user of data) {
    const user_object = await new User({name: user.name,email: user.email, password: user.password, isAdmin: user.isAdmin }).save();
    
    await User.insertMany(user);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
