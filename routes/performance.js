const express = require('express');
const router = express.Router();
const {
  recordPerformance,
  getUserPerformance,
  getModulePerformance
} = require('../controllers/performanceController');

// Record or update performance for a user on a module
router.post('/', recordPerformance);

// Get all performance records for a specific user
router.get('/user/:userId', getUserPerformance);

// Get all performance records for a specific module
router.get('/module/:moduleId', getModulePerformance);

module.exports = router;
