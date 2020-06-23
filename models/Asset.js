const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    }
})

module.exports = Asset = mongoose.model('Asset', AssetSchema);