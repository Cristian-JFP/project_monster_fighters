const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/jugador_batalla.controller');

router.get('/', ctrl.getAll);
router.get('/:id_batalla/:id_usuario', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id_batalla/:id_usuario', ctrl.update);
router.delete('/:id_batalla/:id_usuario', ctrl.remove);

module.exports = router;