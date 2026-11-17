const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/rango.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas PUBLICAS
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);

// Rutas PRIVADAS
router.post('/', verificarToken, ctrl.create);
router.put('/:id', verificarToken, ctrl.update);
router.delete('/:id', verificarToken, ctrl.remove);

module.exports = router;