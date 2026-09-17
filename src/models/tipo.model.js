const db = require("../config/db");

const obtenerTipos = async () => {
    const [tipos] = await db.query(`
        SELECT *
        FROM tipo
    `);

    return tipos;
};

const obtenerTipoPorId = async (id) => {
    const [tipos] = await db.query(`
        SELECT *
        FROM tipo
        WHERE id_tipo = ?
    `, [id]);

    return tipos[0];
};

const crearTipo = async (nombre, descripcion) => {
    const [resultado] = await db.query(`
        INSERT INTO tipo
        (
            nombre,
            descripcion
        )
        VALUES (?, ?)
    `, [
        nombre,
        descripcion
    ]);

    return resultado;
};

module.exports = {
    obtenerTipos,
    obtenerTipoPorId,
    crearTipo
};