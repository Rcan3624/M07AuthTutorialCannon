//Lesson 4 Bookmark: https://youtu.be/mnJxyc0DGM8?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp

const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],            // Code Explanation: https://youtu.be/nukNITdis9g?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=83
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 charaters']
    },
});

// fire a function after doc saved to db
userSchema.post('save', function(doc, next) {
    console.group('new user was created & saved', doc);
    next();
});

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  const User = mongoose.model('user', userSchema);
  
  module.exports = User;
