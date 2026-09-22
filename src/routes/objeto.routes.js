const express = require("express");
const router = express.Router();
const objetoController = require("../controllers/objeto.controller");

router.get("/", objetoController.obtenerObjetos);
router.get("/:id", objetoController.obtenerObjetoPorId);
router.post("/", objetoController.crearObjeto);
router.put("/:id", objetoController.actualizarObjeto);
router.delete("/:id", objetoController.eliminarObjeto);

module.exports = router;