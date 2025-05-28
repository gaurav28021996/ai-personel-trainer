const express = require('express');
const router = express.Router();
const {
  createModule,
  getAllModules,
  getModuleById,
  generateModule
} = require('../controllers/moduleController');

// Create a new module manually
router.post('/', createModule);

// Get all modules
router.get('/', getAllModules);

// Get a single module by ID
router.get('/:id', getModuleById);

// Generate module content automatically using Gemini AI
router.post('/generate', generateModule);

module.exports = router;
