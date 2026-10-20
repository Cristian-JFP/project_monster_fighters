const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/jugador_batalla.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas PÚBLICAS — sin autenticación
router.get('/', ctrl.getAll);
router.get('/:id_batalla/:id_usuario', ctrl.getById);

// Rutas PROTEGIDAS — requieren token válido
router.post('/',       verificarToken, ctrl.create);
router.put('/:id_batalla/:id_usuario',    verificarToken, ctrl.update);
router.delete('/:id_batalla/:id_usuario', verificarToken, ctrl.remove);

module.exports = router;

