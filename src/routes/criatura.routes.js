const express = require("express");
const router = express.Router();
const criaturaController = require("../controllers/criatura.controller");

router.get("/", criaturaController.obtenerCriaturas);
router.get("/:id", criaturaController.obtenerCriaturaPorId);
router.post("/", criaturaController.crearCriatura);
router.put("/:id", criaturaController.actualizarCriatura);
router.delete("/:id", criaturaController.eliminarCriatura);

module.exports = router;