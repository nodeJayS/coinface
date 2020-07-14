const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');

router.get('/allAssetData', (req, res) => {
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

      const assetData = {
        usdBalance: user.usdBalance,
        assets: user.assets
      }
      res.json(assetData)
    })
  }
})

router.patch("/depositUSD", (req, res) => {
  const userid = req.body.userid
  const depositAmt = req.body.usdAmount

  User.findById(userid, (err, user) => {
    if(err) {
      throw err
    }

    user.usdBalance += Number(depositAmt)
      user
      .save()
      .then(user => res.json({
        usdBalance: user.usdBalance
        }))
      .catch(err => console.log(err));
  })
})

router.patch("/withdrawUSD", (req, res) => {
  const userid = req.body.userid
  const subtractAmt = req.body.usdAmount

    User.findById(userid, (err, user) => {
      if(err) {
        throw err
      }
      
      user.usdBalance -= Number(subtractAmt)
      user
        .save()
        .then(user => res.json({
          usdBalance: user.usdBalance
          }))
        .catch(err => console.log(err));
    })
})

router.post("/createAsset", (req, res) => {
  const userid = req.body.userid
  const coin = req.body

  const newAsset = {
    name: coin.id,
    balance: Number(coin.quantity)
  }

  User.findById(userid, (err, user) => {
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
})

router.patch("/updateAsset", (req, res) => {
  const userid = req.body.userid
  const coin = req.body

  User.findById(userid, (err, user) => {
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
})

router.patch("/updateSellAsset", (req, res) => {
  const userid = req.body.userid
  const coin = req.body

  User.findById(userid, (err, user) => {
    if(err) {
      throw err
    }
    let assetIndex = user.assets.findIndex(asset => asset.name === coin.id)
    user.assets[assetIndex].balance -= Number(coin.quantity)
    user.usdBalance += Number(coin.usdAmount)
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
})

router.patch("/deleteAsset", (req, res) => {
  const userid = req.body.userid
  const coin = req.body

  User.findById(userid, (err, user) => {
    if(err) {
      throw err
    }
    let assetIndex = user.assets.findIndex(asset => asset.name === coin.id)
    user.assets.splice(assetIndex, 1)
    user.usdBalance += Number(coin.usdAmount)
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
})

module.exports = router;