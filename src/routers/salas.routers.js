const express = require('express');

const router = express.Router();

const ctrlSalas = require('../controllers/salas.controller');

router.get('/', ctrlSalas.getAll);

router.post('/', ctrlSalas.create);

router.get('/:id', ctrlSalas.getById);

router.post('/:id/join', ctrlSalas.join);

router.post('/:id/leave', ctrlSalas.leave);

module.exports = router;