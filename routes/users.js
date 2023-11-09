const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

// Render user profile
router.get('/profile', usersController.profile);

// Render user sign-up page
router.get('/sign-up', usersController.signUp);

// Render user sign-in page
router.get('/sign-in', usersController.signIn);

// Handle user creation (sign-up)
router.post('/create', usersController.create);

// Handle user session creation (sign-in)
router.post('/create-session', usersController.createSession);

// Load user profile edit page
router.get('/edit', usersController.editLoad);

// Handle user profile update
router.post('/edit', usersController.updateProfile);

module.exports = router;
