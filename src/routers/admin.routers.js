const express = require('express');

const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');

router.get('/users', ctrlAdmin.getUsers);

router.get('/users/:id', ctrlAdmin.getUserById);

router.put('/users/:id/status', ctrlAdmin.updateUserStatus);

