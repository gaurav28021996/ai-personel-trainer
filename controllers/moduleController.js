const Module = require('../models/Module');
const User = require('../models/User');

exports.getModules = async (_, res) => {
  const modules = await Module.find();
  res.json(modules);
};

exports.assignModule = async (req, res) => {
  const { moduleId } = req.body;
  const user = await User.findById(req.params.userId);
  user.assignedModules.push({ moduleId, assignedOn: new Date() });
  await user.save();
  res.json({ message: 'Module assigned' });
};
