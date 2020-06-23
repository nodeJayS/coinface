const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

    assetBalance: {
      type: Number,
      default: 0
    },

    assets: {
      type: Array,
      default: []
    }
  })

module.exports = User = mongoose.model('User', UserSchema);