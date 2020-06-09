const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateLoginInput = require('../../validation/login');
const validateRegisterInput = require('../../validation/register');

// Private authorization route
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({msg: 'Success'});
  })


// Login existing user
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "User not found.";
        return res.status(400).json(errors);
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, email: user.email };
  
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 7200 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password.";
          return res.status(400).json(errors);
        }
      });
    });
});


// Register new user
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists.";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      
      // Secure password with salt and hash
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 7200 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});



module.exports = router;