const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model('Admin', adminSchema);