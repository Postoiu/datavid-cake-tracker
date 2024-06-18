const express = require('express');
const router = express.Router();

const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');

router.get('/', (req, res) => {
  res.send('Welcome to Node-API!');
});

router.get('/users', verifyToken, async (req, res) => {
  const users = await User.find();

  res.send(users);
});

router.post('/createUser', verifyToken, async (req, res) => {
  // get data from user form
  let { firstName, lastName, birthDate, country, city } = req.body;
  console.log(birthDate);
  birthDate = new Date(birthDate);

  // validate it and create new entry in database
  const newUser = new User({ firstName, lastName, birthDate, country, city });

  try{
    await newUser.save();
  } catch(err) {
    console.log('Something went wrong! \n' + err);
    res.sendStatus(500);
  }
  

  res.json(newUser);
});

router.get('/deleteUser/:id', verifyToken, async (req, res) => {
  try {
    const response = await User.deleteOne({ _id: req.params.id });

    res.json(response);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
})

router.post('/updateUser/:id', verifyToken, (req, res) => {
  // get data from user form and update user in database
  res.send('This is the update user route')
})

module.exports = router;
