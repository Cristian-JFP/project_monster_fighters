const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/accion_batalla.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas PÚBLICAS — sin autenticación
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);

// Rutas PROTEGIDAS — requieren token válido
router.post('/', verificarToken, ctrl.create);
router.put('/:id', verificarToken, ctrl.update);
router.delete('/:id', verificarToken, ctrl.remove);

module.exports = router;