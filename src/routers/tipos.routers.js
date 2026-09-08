const express = require('express');

const router = express.Router();

const ctrlTipos = require('../controllers/tipos.controller');

router.get('/', ctrlTipos.getAll);

router.get('/:id', ctrlTipos.getById);

module.exports = router;