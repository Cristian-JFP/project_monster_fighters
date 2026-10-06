const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const autenticacionModel = require("../models/autenticacion.model");

const generarToken = (id_usuario, nombre_usuario) => {
    return jwt.sign(
        { id_usuario, nombre_usuario },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );
};

const register = async (req, res) => {
    try {
        const { nombre_usuario, correo, contraseña } = req.body;
        const id_rango = req.body.id_rango || 1;

        if (!nombre_usuario || !correo || !contraseña) {
            return res.status(400).json({
                ok: false,
                msg: "nombre_usuario, correo y contraseña son obligatorios"
            });
        }

        const existente = await autenticacionModel.obtenerPorCorreo(correo);
        if (existente) {
            return res.status(409).json({
                ok: false,
                msg: "El correo ya está registrado"
            });
        }

        const hash = await bcrypt.hash(contraseña, 10);
        const id_usuario = await autenticacionModel.registrar(
            nombre_usuario, correo, hash, id_rango
        );

        res.status(201).json({
            ok: true,
            msg: "Usuario registrado correctamente",
            token: generarToken(id_usuario, nombre_usuario)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error al registrar el usuario" });
    }
};

const login = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        if (!correo || !contraseña) {
            return res.status(400).json({
                ok: false,
                msg: "correo y contraseña son obligatorios"
            });
        }

        const usuario = await autenticacionModel.obtenerPorCorreo(correo);
        if (!usuario) {
            return res.status(401).json({ ok: false, msg: "Credenciales inválidas" });
        }

        const valida = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!valida) {
            return res.status(401).json({ ok: false, msg: "Credenciales inválidas" });
        }

        res.json({
            ok: true,
            token: generarToken(usuario.id_usuario, usuario.nombre_usuario)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, msg: "Error en el login" });
    }
};

module.exports = { register, login };