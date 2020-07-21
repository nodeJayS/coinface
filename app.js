const express = require("express");
const app = express();

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const cors = require('cors');
var bodyParser = require('body-parser')
const path = require('path')

const users = require('./routes/api/users');
const transactions = require('./routes/api/transactions');
const assets = require('./routes/api/assets');
const watchlist = require('./routes/api/watchlist');

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Middleware configuration
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/transactions', transactions);
app.use('/api/assets', assets);
app.use('/api/watchlist', watchlist)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));