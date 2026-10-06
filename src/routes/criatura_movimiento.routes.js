const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/criatura_movimiento.controller');

router.get('/', ctrl.getAll);
router.get('/:id_criatura/:id_movimiento', ctrl.getById);
router.post('/', ctrl.create);
router.delete('/:id_criatura/:id_movimiento', ctrl.remove);
router.get('/criatura/:id_criatura', ctrl.getByCriatura);

module.exports = router;