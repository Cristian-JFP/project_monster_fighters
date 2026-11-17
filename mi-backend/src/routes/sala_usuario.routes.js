const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/sala_usuario.controller');
const verificarToken = require('../middlewares/auth.middleware');

// Rutas PÚBLICAS — sin autenticación
router.get('/', ctrl.getAll);
router.get('/:id_sala/:id_usuario', ctrl.getById);
router.get('/sala/:id_sala', ctrl.getBySala);

// Rutas PROTEGIDAS — requieren token válido
router.post('/',       verificarToken, ctrl.create);
//router.put('/:id',    verificarToken, ctrl.update);
router.delete('/:id_sala/:id_usuario', verificarToken, ctrl.remove);

module.exports = router;
