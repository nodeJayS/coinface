const express = require('express');
const router = express.Router();
const Asset = require('../../models/Asset');

// Retrieve all assets
router.get('/', (req, res) => {
    Asset.find()
        .then(assets => {res.json(assets)})
        .catch(err => res.status(400).json('Error: ' + err))
})

// Retrieve specific asset by id
router.get('/:assetId', (req, res) => {
    Asset.findById(req.params.assetId)
        .then(assets => {res.json(assets)})
        .catch(err => res.status(400).json('Error: ' + err))
})

// Generate new asset
router.post('/', (req, res) => {
    const asset = new Asset({
        name: req.body.name,
        price: req.body.price
    });

    asset.save()
        .then(data => {res.json(data)})
        .catch(err => res.status(400).json('Error: ' + err))
});

router.delete('/:assetId', (req, res) => {
    Asset.deleteOne({_id: req.params.assetId})
        .then(assets => {res.json(assets)})
        .catch(err => res.status(400).json('Error: ' + err))
})

router.patch('/:assetId', (req, res) => {
    Asset.updateOne(
        {_id: req.params.assetId},
        { $set: { assetAmount: req.body.assetAmount }}
        )
        .then(assets => {res.json(assets)})
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;