const express = require('express');
const router = express.Router();
const { signup, login, getProfile } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Protected route example: get user profile
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
