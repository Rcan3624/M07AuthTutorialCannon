const User = require('../models/User');

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: ''}

    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registred';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {            //Code Explanation: https://youtu.be/nukNITdis9g?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=687
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

// Code Explanation: https://youtu.be/mnJxyc0DGM8?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=388
module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.create({ email, password });
      res.status(201).json(user);
    }
    catch(err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
   
  }

//https://youtu.be/uiKwHx2K1Fo?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=309
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
  
    console.log(email, password);
    res.send('user login');
  }