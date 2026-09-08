const express = require('express');

const router = express.Router();

const ctrlObjetos = require('../controllers/objetos.controller');

router.get('/', ctrlObjetos.getAll);

router.get('/:id', ctrlObjetos.getById);

module.exports = router;