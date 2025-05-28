const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: false // Optional: associate with a module
  }
});

module.exports = mongoose.model('Chat', chatSchema);
