const express = require('express');

const router = express.Router();

const ctrlUsuarios = require('../controllers/usuarios.controller');

router.get('/', ctrlUsuarios.getAll);

router.get('/:id', ctrlUsuarios.getById);

router.post('/', ctrlUsuarios.create);

router.put('/:id', ctrlUsuarios.update);

router.get('/:id/stats', ctrlUsuarios.getStats);

router.get('/:id/battles', ctrlUsuarios.getBattles);

module.exports = router;