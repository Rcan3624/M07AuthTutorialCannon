const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());           // Code Explanation: https://youtu.be/uiKwHx2K1Fo?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=288 

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://rcannon-auth:Random1234@nodetuts.p9cxa1e.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
  

  //Code Explanation: https://youtu.be/uiKwHx2K1Fo?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&t=82
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);

// cookies
app.get('/set-cookies', (req, res) => {

  res.setHeader('Set-Cookie', 'newUser=true');
  
  res.send('you got the cookies!');

  
})

// Video bookmark: https://www.youtube.com/watch?v=zW_tZR0Ir3Q&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=11