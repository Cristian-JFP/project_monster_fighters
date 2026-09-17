const usuarioModel = require("../models/usuario.model");

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioModel.obtenerUsuarios();

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los usuarios",
            error: error.message
        });
    }
};

const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await usuarioModel.obtenerUsuarioPorId(req.params.id);

        if (!usuario) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el usuario",
            error: error.message
        });
    }
};

const crearUsuario = async (req, res) => {
    try {
        const {
            nombre_usuario,
            correo,
            contraseña,
            id_rango
        } = req.body;

        const resultado = await usuarioModel.crearUsuario(
            nombre_usuario,
            correo,
            contraseña,
            id_rango
        );

        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            id_usuario: resultado.insertId
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el usuario",
            error: error.message
        });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const {
            nombre_usuario,
            correo,
            id_rango,
            rating
        } = req.body;

        const resultado = await usuarioModel.actualizarUsuario(
            req.params.id,
            nombre_usuario,
            correo,
            id_rango,
            rating
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json({
            mensaje: "Usuario actualizado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar el usuario",
            error: error.message
        });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const resultado = await usuarioModel.eliminarUsuario(
            req.params.id
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json({
            mensaje: "Usuario eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar el usuario",
            error: error.message
        });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};