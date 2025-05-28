const express = require('express');
const router = express.Router();
const { chatWithAI, getUserChats } = require('../controllers/chatController');

// Send a chat message to AI and get response
router.post('/', chatWithAI);

// Optional: Get all chat history for a user
router.get('/user/:userId', getUserChats);

module.exports = router;
