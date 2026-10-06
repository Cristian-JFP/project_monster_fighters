const express = require("express");

const router = express.Router();

const { verificarToken } = require("../middlewares/auth.middleware");
const tipoController = require("../controllers/tipo.controller");

// Públicas
router.get("/", tipoController.obtenerTipos);
router.get("/:id", tipoController.obtenerTipoPorId);

// Protegida: requiere token válido
router.post("/", verificarToken, tipoController.crearTipo);

module.exports = router;