const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Admin = require('../models/Admin');

const mongodbUri = 'mongodb://mongodb-server/datavid';

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
        const user = await User.findOne();

        if(!user) {
            await User.insertMany(initUserData);
        }

        const admin = await Admin.findOne();

        if(!admin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            const newAdmin = new Admin({username: 'admin', password: hashedPassword});

            await newAdmin.save();
        }

    } catch (err) {
        console.log('Something went wrong! \n' + err);
    }
    
}

module.exports = main;