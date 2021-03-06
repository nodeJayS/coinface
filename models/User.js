const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
  'name': String,
})

const AssetSchema = new Schema({
  'name': String,

  'balance': Number
})

const UserSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },

    lastName: {
        type: String,
        required: true
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true
    },

    usdBalance: {
      type: Number,
      default: 0
    },

    watchlist: [WatchlistSchema],

    assets: [AssetSchema]
  })

module.exports = User = mongoose.model('User', UserSchema);