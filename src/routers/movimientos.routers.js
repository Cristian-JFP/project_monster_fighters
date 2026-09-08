const express = require('express');

const router = express.Router();

const ctrlMovimientos = require('../controllers/movimientos.controller');

router.get('/', ctrlMovimientos.getAll);

router.get('/:id', ctrlMovimientos.getById);

module.exports = router;