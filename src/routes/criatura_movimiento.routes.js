const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/criatura_movimiento.controller');
const verificarToken = require('../middlewares/auth.middleware');

// RUTAS PUBLICAS
router.get('/', ctrl.getAll);
router.get('/criatura/:id_criatura', ctrl.getByCriatura);
router.get('/:id_criatura/:id_movimiento', ctrl.getById);

// RUTAS PRIVADAS
router.post('/', verificarToken, ctrl.create);
router.delete(
    '/:id_criatura/:id_movimiento',
    verificarToken,
    ctrl.remove
);

module.exports = router;
