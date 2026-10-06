const pool = require("../config/db");

const obtenerPorCorreo = async (correo) => {
    const [rows] = await pool.query(
        "SELECT * FROM usuario WHERE correo = ?",
        [correo]
    );

    return rows[0];
};

const registrar = async (nombre_usuario, correo, contraseña, id_rango) => {
    const [result] = await pool.query(
        `INSERT INTO usuario (nombre_usuario, correo, contraseña, id_rango, rating)
         VALUES (?, ?, ?, ?, 0)`,
        [nombre_usuario, correo, contraseña, id_rango]
    );

    return result.insertId;
};

module.exports = { obtenerPorCorreo, registrar };