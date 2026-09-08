const express = require('express');

const router = express.Router();

const ctrlAuth = require('../controllers/auth.controller');

router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

router.get('/me', ctrlAuth.me);

router.post('/logout', ctrlAuth.logout);

module.exports = router;