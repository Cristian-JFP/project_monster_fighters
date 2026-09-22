const express = require("express");
const router = express.Router();
const equipoController = require("../controllers/equipo.controller"); // ojo: NO objetoController

router.get("/", equipoController.obtenerEquipos);
router.get("/:id", equipoController.obtenerEquipoPorId);
router.post("/", equipoController.crearEquipo);
router.put("/:id", equipoController.actualizarEquipo);
router.delete("/:id", equipoController.eliminarEquipo);

module.exports = router;