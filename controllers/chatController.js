const Chat = require('../models/Chat');

exports.logChat = async (req, res) => {
  await Chat.create({ ...req.body, userId: req.params.userId });
  res.json({ message: 'Chat log saved' });
};

exports.getChats = async (req, res) => {
  const chat = await Chat.find({ userId: req.params.userId });
  res.json(chat);
};
