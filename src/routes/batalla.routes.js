const express = require("express");
const router = express.Router();
const batallaController = require("../controllers/batalla.controller");

router.get("/", batallaController.obtenerBatallas);
router.get("/:id", batallaController.obtenerBatallaPorId);
router.post("/", batallaController.crearBatalla);
router.put("/:id", batallaController.actualizarBatalla);
router.delete("/:id", batallaController.eliminarBatalla);

module.exports = router;