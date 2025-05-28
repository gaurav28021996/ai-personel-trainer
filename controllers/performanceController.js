const Performance = require('../models/Performance');

exports.logPerformance = async (req, res) => {
  const performance = await Performance.create({
    ...req.body,
    userId: req.params.userId
  });
  res.json({ message: 'Performance data logged' });
};

exports.getPerformance = async (req, res) => {
  const performance = await Performance.find({ userId: req.params.userId });
  res.json(performance);
};
