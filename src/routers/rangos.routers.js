const express = require('express');

const router = express.Router();

const ctrlRangos = require('../controllers/rangos.controller');

router.get('/', ctrlRangos.getAll);

router.get('/:id', ctrlRangos.getById);

module.exports = router;