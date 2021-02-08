// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const user = require('./routes/user');
// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/api/user', user);

// // production mode
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));


const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
const path = require('path');

const user = require('./routes/user');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config d
// const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// mongoose
//   .connect(db, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// Passport middleware
// app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

// Use Routes
app.use('/api/user', user);

// production mode
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

