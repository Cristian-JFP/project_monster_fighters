const express = require("express");
const router = express.Router();
const salaController = require("../controllers/sala.controller");

router.get("/", salaController.obtenerSalas);
router.get("/:id", salaController.obtenerSalaPorId);
router.post("/", salaController.crearSala);
router.put("/:id", salaController.actualizarSala);
router.delete("/:id", salaController.eliminarSala);

module.exports = router;