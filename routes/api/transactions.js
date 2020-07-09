const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const Tx = require('../../models/Transaction');

router.get('/', (req, res) => {
  if (req.headers && req.headers.authorization) {
  
    const authorization = req.headers.authorization.split(' ')[1] 
    try {
        decoded = jwt.verify(authorization, keys.secretOrKey);
    } catch (e) {
        return res.status(401).json('unauthorized');
    }
    const userid = decoded.id;

  Tx.find({ user: userid })
    .then(tx => res.json(tx))
  }
})

router.post("/newTx", (req, res) => {
  const userid = req.body.userid
  const coin = req.body

    User.findById(userid, (err, user) => {
      if(err) {
        throw err
      }

      const newTx = new Tx({
        user: userid,
        name: coin.id,
        quantity: coin.quantity,
        price: coin.price,
        usdAmount: coin.usdAmount,
        transactionType: coin.txType
      })

      newTx
        .save()
        .then(newTx => res.json(newTx))
        .catch(err => console.log(err));
    })
})

module.exports = router;