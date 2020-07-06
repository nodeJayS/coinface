const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');

router.post("/createAsset", (req, res) => {
    const coin = req.body
  
    if (req.headers && req.headers.authorization) {
    
      const authorization = req.headers.authorization.split(' ')[1] 
      try {
        decoded = jwt.verify(authorization, keys.secretOrKey);
      } catch (e) {
        return res.status(401).json('unauthorized');
      }
      const userId = decoded.id;

      const newAsset = {
        name: coin.id,
        balance: Number(coin.quantity)
      }
    
      User.findById(userId, (err, user) => {
        if(err) {
          throw err
        }
        user.assets.push(newAsset)
          user.usdBalance -= Number(coin.usdAmount)
          user.save()
          .then(user => 
            { let userData = {
                usdBalance: user.usdBalance,
                assets: user.assets
              }
            res.json(userData)
            }
          )
            .catch(err => console.log(err));
      })
    }
})

router.patch("/updateAsset", (req, res) => {
  const coin = req.body

  if (req.headers && req.headers.authorization) {
  
    const authorization = req.headers.authorization.split(' ')[1] 
    try {
      decoded = jwt.verify(authorization, keys.secretOrKey);
    } catch (e) {
      return res.status(401).json('unauthorized');
    }
    const userId = decoded.id;

    User.findById(userId, (err, user) => {
      if(err) {
        throw err
      }
      let assetIndex = user.assets.findIndex(asset => asset.name === coin.id)
      user.assets[assetIndex].balance += Number(coin.quantity)
      user.usdBalance -= Number(coin.usdAmount)
      user.save()
        .then(user => 
          { let userData = {
              usdBalance: user.usdBalance,
              assets: user.assets
            }
          res.json(userData)
          }
        )
        .catch(err => console.log(err));

    })
  }
})

module.exports = router;