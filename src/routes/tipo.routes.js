const express = require("express");

const router = express.Router();

const tipoController = require("../controllers/tipo.controller");

router.get("/", tipoController.obtenerTipos);

router.get("/:id", tipoController.obtenerTipoPorId);

router.post("/", tipoController.crearTipo);

module.exports = router;