
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/equipo_criatura.controller');
const verificarToken = require('../middlewares/auth.middleware');

// RUTAS PUBLICAS
router.get('/', ctrl.getAll);
router.get('/:id_equipo/:id_criatura', ctrl.getById);

// RUTAS PROTEGIDAS
router.post('/', verificarToken, ctrl.create);
router.delete(
    '/:id_equipo/:id_criatura',
    verificarToken,
    ctrl.remove
);

module.exports = router;
