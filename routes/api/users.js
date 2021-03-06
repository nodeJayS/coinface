const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Asset = require('../../models/Asset')
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
router.post("/signin", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({ email })
        .then(user => {
          if (!user) {
            return res.status(400).json({ msg: "Email does not exist." });
          }
  
          bcrypt
            .compare(password, user.password)
            .then(isMatch => {
              if (isMatch) {
                const payload = { 
                  id: user.id,
                };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            } 
          else {
            return res.status(400).json({ msg: "Invalid password."});
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

  User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({ msg: "Email already registered."});
        } 
        else {
          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            usdBalance: req.body.usdBalance,
        });
        
      
      // Secure password with salt and hash
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {

              const payload = { 
                id: user.id,
              };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                if(err) throw err;

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