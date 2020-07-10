const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');

router.get('/', (req, res) => {
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
            res.json(user.watchlist)
        })
    }
})

router.post("/add", (req, res) => {
    const userid = req.body.userid
    const coin = req.body

    const newAsset = {
        name: coin.name,
    }

    User.findById(userid, (err, user) => {
        if(err) {
        throw err
        }
        user.watchlist.push(newAsset)
        user.save()
            .then(user =>res.json(user.watchlist) )
            .catch(err => console.log(err));
    })
})

router.patch("/remove", (req, res) => {
    const userid = req.body.userid
    const coin = req.body
    
    User.findById(userid, (err, user) => {
        if(err) {
        throw err
        }
        let watchIndex = user.watchlist.findIndex(asset => asset.name === coin.name)
        user.watchlist.splice(watchIndex, 1)
        user.save()
            .then(user => res.json(user.watchlist))
            .catch(err => console.log(err));
    })
})

module.exports = router;