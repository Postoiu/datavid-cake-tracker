const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthDate: {
        type: Date,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
});

module.exports = model('Users', usersSchema);