const express = require('express');
const router = express.Router();
const Asset = require('../../models/Asset');

// Retrieve all assets
router.get('/', (req, res) => {
    Asset.find()
    .then(assets => {res.json(assets)})
    .catch(err => {res.json({message: err})})
})

// Retrieve specific asset by id
router.get('/:assetId', (req, res) => {
    Asset.findById(req.params.assetId)
    .then(assets => {res.json(assets)})
    .catch(err => {res.json({message: err})})
})

// Generates new asset
router.post('/', (req, res) => {
    const asset = new Asset({
        assetName: req.body.assetName,
        assetPrice: req.body.assetPrice,
        assetAmount: req.body.assetAmount
    });

    asset.save()
        .then(data => {res.json(data)})
        .catch(err => {res.json({message: err})})
});



module.exports = router;