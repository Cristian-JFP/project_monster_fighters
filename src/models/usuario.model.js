const db = require("../config/db");

const obtenerUsuarios = async () => {
    const [usuarios] = await db.query(`
        SELECT
            id_usuario,
            nombre_usuario,
            correo,
            fecha_registrado,
            id_rango,
            rating
        FROM usuario
    `);

    return usuarios;
};

const obtenerUsuarioPorId = async (id) => {
    const [usuarios] = await db.query(`
        SELECT
            id_usuario,
            nombre_usuario,
            correo,
            fecha_registrado,
            id_rango,
            rating
        FROM usuario
        WHERE id_usuario = ?
    `, [id]);

    return usuarios[0];
};

const crearUsuario = async (
    nombre_usuario,
    correo,
    contraseña,
    id_rango
) => {
    const [resultado] = await db.query(`
        INSERT INTO usuario
        (
            nombre_usuario,
            correo,
            contraseña,
            id_rango,
            rating
        )
        VALUES (?, ?, ?, ?, 0)
    `, [
        nombre_usuario,
        correo,
        contraseña,
        id_rango
    ]);

    return resultado;
};

const actualizarUsuario = async (
    id,
    nombre_usuario,
    correo,
    id_rango,
    rating
) => {
    const [resultado] = await db.query(`
        UPDATE usuario
        SET
            nombre_usuario = ?,
            correo = ?,
            id_rango = ?,
            rating = ?
        WHERE id_usuario = ?
    `, [
        nombre_usuario,
        correo,
        id_rango,
        rating,
        id
    ]);

    return resultado;
};

const eliminarUsuario = async (id) => {
    const [resultado] = await db.query(`
        DELETE FROM usuario
        WHERE id_usuario = ?
    `, [id]);

    return resultado;
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};