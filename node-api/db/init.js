const mongoose = require('mongoose');
const Users = require('../models/Users');

const mongodbUri = 'mongodb://127.0.0.1:27017/datavid';

const initUserData = [
    {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: new Date('1993-12-29'),
        country: 'USA',
        city: 'New York'
    },
    {
        firstName: 'Maria',
        lastName: 'Smith',
        birthDate: new Date('2000-05-12'),
        country: 'UK',
        city: 'London'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu',
        birthDate: new Date('2004-08-02'),
        country: 'Romania',
        city: 'Bucharest'
    }
]

mongoose.connect(mongodbUri)
    .then(() => {
        console.log('Connected successfuly to MongoDB!');
    })
    .catch(err => {
        console.log('Connection to MongoDb failed! \n' + err);
    });

async function main() {
    try {
        const users = await Users.findOne();

        if(!users) {
            await Users.insertMany(initUserData);
        }
    } catch (err) {
        console.log('Something went wrong! \n' + err);
    }
    
}

module.exports = main;