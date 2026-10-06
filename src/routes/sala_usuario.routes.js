const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/sala_usuario.controller');

router.get('/', ctrl.getAll);
router.get('/:id_sala/:id_usuario', ctrl.getById);
router.post('/', ctrl.create);
router.delete('/:id_sala/:id_usuario', ctrl.remove);
router.get('/sala/:id_sala', ctrl.getBySala);

module.exports = router;