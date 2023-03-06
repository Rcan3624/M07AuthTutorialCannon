//Lesson 4 Bookmark: https://youtu.be/mnJxyc0DGM8?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
});

const User = mongoose.model('user', userSchema)

module.exports = User;