const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
    
    user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
    },

    name: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
})

module.exports = Asset = mongoose.model('Asset', AssetSchema);