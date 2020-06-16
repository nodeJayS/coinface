const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
    
    // user: {
    // type: Schema.Types.ObjectId,
    // ref: 'users'
    // },

    assetName: {
        type: String,
        required: true
    },

    assetPrice: {
        type: Number,
        required: true
    },

    assetAmount: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Asset = mongoose.model('Asset', AssetSchema);