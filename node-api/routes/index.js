const express = require('express');
const router = express.Router();

const Users = require('../models/Users');

router.get('/', (req, res, next) => {
  res.send('Welcome to Node-API!');
});

router.get('/users', async (req, res, next) => {
  const users = await Users.find();

  res.send('This is the read all users route');
});

router.post('/createUser', async (req, res, next) => {
  // get data from user form
  // validate it and create new entry in database
  res.send('This is the create user route');
});

router.post('/deleteUser/:id', async (req, res, next) => {
  res.send('This is the delete user ' + req.params.id + ' route')
})

router.post('/updateUser', (req, res, next) => {
  // get data from user form and update user in database
  res.send('This is the update user route')
})

module.exports = router;
