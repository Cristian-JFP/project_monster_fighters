const express = require("express");
const router = express.Router();
const accionBatallaController = require("../controllers/accion_batalla.controller");

router.get("/", accionBatallaController.obtenerAccionesBatalla);
router.get("/:id", accionBatallaController.obtenerAccionBatallaPorId);
router.post("/", accionBatallaController.crearAccionBatalla);
router.put("/:id", accionBatallaController.actualizarAccionBatalla);
router.delete("/:id", accionBatallaController.eliminarAccionBatalla);

module.exports = router;