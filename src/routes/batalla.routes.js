const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/batalla.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas PUBLICAS — sin autenticación
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);

// Rutas PRIVADAS — requieren token válido
router.post('/', verificarToken, ctrl.create);
router.put('/:id', verificarToken, ctrl.update);
router.delete('/:id', verificarToken, ctrl.remove);

module.exports = router;