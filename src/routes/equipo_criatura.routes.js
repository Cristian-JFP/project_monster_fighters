const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/equipo_criatura.controller');

router.get('/', ctrl.getAll);
router.get('/:id_equipo/:id_criatura', ctrl.getById);
router.post('/', ctrl.create);
router.delete('/:id_equipo/:id_criatura', ctrl.remove);
router.get('/equipo/:id_equipo', ctrl.getByEquipo);

module.exports = router;