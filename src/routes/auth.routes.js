const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Asegúrate que authController.login y authController.register son funciones
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

