const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const verifyToken = require('../middlewares/auth.middleware');

// Rutas públicas
router.post('/login', authController.login);
router.post('/register', authController.register);

// Rutas protegidas
router.get('/profile', verifyToken, authController.getProfile);
router.put('/profile', verifyToken, authController.updateProfile);

module.exports = router;