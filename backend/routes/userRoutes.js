// Import necessary modules
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

// Initialize router
//Router: The router is defined with routes for user registration and login,
//linked to corresponding controller functions
const router = express.Router();

// Define routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Export the router
module.exports = router;


