const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  score: {
    type: Number, // out of 100 or any other scale
    default: 0
  },
  progress: {
    type: Number, // 0 to 100%
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  feedback: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Performance', performanceSchema);
