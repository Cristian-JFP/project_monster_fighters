const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require('../middlewares/auth.middleware');

// Asegúrate que authController.login y authController.register son funciones
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/profile', verifyToken, authController.perfil);

module.exports = router;