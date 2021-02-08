const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const user = require('./routes/user');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', user);

// production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));


