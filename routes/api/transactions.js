const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const Tx = require('../../models/Transaction');

router.post("/buy", (req, res) => {
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

        const newTx = new Tx({
          user: user['_id'],
          name: coin.id,
          quantity: coin.quantity,
          price: coin.price,
          usdAmount: coin.usdAmount,
          transactionType: 'BUY'
        })

        newTx
          .save()
          .catch(err => console.log(err));
          // .then(newTx => {console.log(newTx)
          //   if (user.assets.hasOwnProperty(newTx.name)) {
          //     user.assets[newTx.name] += Number(newTx.quantity)
          //     user.usdBalance -= Number(newTx.usdAmount)
          //   } else {
          //     user.assets[newTx.name] = Number(newTx.quantity)
          //     user.usdBalance -= Number(newTx.usdAmount)
          //   }
          //   user
          //     .save()
          //     .then(user => console.log(user.assets))
          // })

        // if (user.assets[coin.name] > 0) {
        //   user.assets[coin.name] += Number(coin.quantity)
        //   user.usdBalance -= Number(coin.quantity)
        // } else {
        //   user.assets[coin.name] = Number(coin.quantity)
        //   user.usdBalance -= Number(coin.usdAmount)
        // }

        // user
        //   .save()
        //   .then(user => console.log(user.assets))
      })
    }
})


module.exports = router;