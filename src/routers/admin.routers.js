const express = require('express');

const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');

router.get('/users', ctrlAdmin.getUsers);

router.get('/users/:id', ctrlAdmin.getUserById);

router.put('/users/:id/status', ctrlAdmin.updateUserStatus);

router.post('/creatures', ctrlAdmin.createCreature);

router.put('/creatures/:id', ctrlAdmin.updateCreature);

router.delete('/creatures/:id', ctrlAdmin.deleteCreature);

router.post('/moves', ctrlAdmin.createMove);

router.put('/moves/:id', ctrlAdmin.updateMove);

router.delete('/moves/:id', ctrlAdmin.deleteMove);

router.post('/items', ctrlAdmin.createItem);

router.put('/items/:id', ctrlAdmin.updateItem);

router.delete('/items/:id', ctrlAdmin.deleteItem);

module.exports = router;