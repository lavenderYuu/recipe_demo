const express = require('express');
const router = express.Router();

// Import your middleware and controllers
const userController = require('../controllers/userController');

// POST route - First-time users are allowed to post
router.post('/', userController.postByGmail);

// GET route - Check if user is allowed (is_allow: true)
router.get('/', userController.getByGmail);

module.exports = router;


