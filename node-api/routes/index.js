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
  birthDate = new Date(birthDate);

  // validate it and create new entry in database
  const newUser = new User(firstName, lastName, birthDate, country, city);

  try{
    await newUser.save();
  } catch(err) {
    console.log('Something went wrong! \n' + err);
    res.sendStatus(500);
  }
  

  res.send('User created successfully');
});

router.post('/deleteUser/:id', verifyToken, async (req, res) => {
  res.send('This is the delete user ' + req.params.id + ' route')
})

router.post('/updateUser', verifyToken, (req, res) => {
  // get data from user form and update user in database
  res.send('This is the update user route')
})

module.exports = router;
