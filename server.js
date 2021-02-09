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
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const user = require('./routes/user');

// Step 2
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected!!!!');
// });

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/user', user);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
