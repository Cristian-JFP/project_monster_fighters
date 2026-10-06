const express = require("express");
const rateLimit = require("express-rate-limit");

const router = express.Router();

const autenticacionController = require("../controllers/autenticacion.controller");

// Máximo 10 intentos de login cada 15 minutos por IP
const limiteLogin = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    message: { ok: false, msg: "Demasiados intentos, intenta más tarde" }
});

router.post("/register", autenticacionController.register);
router.post("/login", limiteLogin, autenticacionController.login);

module.exports = router;