const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  assignedModules: [{ moduleId: String, assignedOn: Date }]
});

module.exports = mongoose.model('User', userSchema);
