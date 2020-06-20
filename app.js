const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const assets = require('./routes/api/assets')
const passport = require('passport');

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Middleware configuration
app.use(express.json());
app.use(passport.initialize());

app.use('/api/users', users);
app.use('/api/assets', assets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));