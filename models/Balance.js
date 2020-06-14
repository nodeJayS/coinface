const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BalanceSchema = new Schema({
    
    user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
    },

    balance: {
        type: Number,
        required: true
    },
    },
    {
    timestamps: true
})

module.exports = Balance = mongoose.model('Balanceo', BalanceSchema);