const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
    },

    name: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    usdAmount: {
        type: Number,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    },

    transactionType: {
        type: String,
        required: true
    }
})

module.exports = Tx = mongoose.model('Transaction', TransactionSchema);