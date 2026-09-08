const express = require('express');

const router = express.Router();

const ctrlCriaturas = require('../controllers/criaturas.controller');

router.get('/', ctrlCriaturas.getAll);

router.get('/:id', ctrlCriaturas.getById);

router.post('/', ctrlCriaturas.create);

router.put('/:id', ctrlCriaturas.update);

router.delete('/:id', ctrlCriaturas.remove);

router.get('/:id/moves', ctrlCriaturas.getMoves);

module.exports = router;