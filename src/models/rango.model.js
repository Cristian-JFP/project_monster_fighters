const db = require("../config/db");

const obtenerRangos = async () => {
    const [rangos] = await db.query(`SELECT * FROM rango`);
    return rangos;
};

const obtenerRangoPorId = async (id) => {
    const [rangos] = await db.query(`SELECT * FROM rango WHERE id_rango = ?`, [id]);
    return rangos[0];
};

const crearRango = async (nombre, rating_minimo, rating_maximo) => {
    const [resultado] = await db.query(
        `INSERT INTO rango (nombre, rating_minimo, rating_maximo) VALUES (?, ?, ?)`,
        [nombre, rating_minimo, rating_maximo]
    );
    return resultado;
};

const actualizarRango = async (id, nombre, rating_minimo, rating_maximo) => {
    const [resultado] = await db.query(
        `UPDATE rango SET nombre = ?, rating_minimo = ?, rating_maximo = ? WHERE id_rango = ?`,
        [nombre, rating_minimo, rating_maximo, id]
    );
    return resultado;
};

const eliminarRango = async (id) => {
    const [resultado] = await db.query(`DELETE FROM rango WHERE id_rango = ?`, [id]);
    return resultado;
};

module.exports = { obtenerRangos, obtenerRangoPorId, crearRango, actualizarRango, eliminarRango };