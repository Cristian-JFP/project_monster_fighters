const express = require("express");

const router = express.Router();

const movimientoController = require("../controllers/movimiento.controller");

router.get("/", movimientoController.obtenerMovimientos);

router.get("/:id", movimientoController.obtenerMovimientoPorId);

router.post("/", movimientoController.crearMovimiento);

module.exports = router;