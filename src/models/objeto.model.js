const db = require("../config/db");

const obtenerObjetos = async () => {
    const [objetos] = await db.query(`SELECT * FROM objeto`);
    return objetos;
};

const obtenerObjetoPorId = async (id) => {
    const [objetos] = await db.query(`SELECT * FROM objeto WHERE id_objeto = ?`, [id]);
    return objetos[0];
};

const crearObjeto = async (nombre, descripcion, tipo_objeto, valor_efecto) => {
    const [resultado] = await db.query(
        `INSERT INTO objeto (nombre, descripcion, tipo_objeto, valor_efecto) VALUES (?, ?, ?, ?)`,
        [nombre, descripcion, tipo_objeto, valor_efecto]
    );
    return resultado;
};

const actualizarObjeto = async (id, nombre, descripcion, tipo_objeto, valor_efecto) => {
    const [resultado] = await db.query(
        `UPDATE objeto SET nombre = ?, descripcion = ?, tipo_objeto = ?, valor_efecto = ? WHERE id_objeto = ?`,
        [nombre, descripcion, tipo_objeto, valor_efecto, id]
    );
    return resultado;
};

const eliminarObjeto = async (id) => {
    const [resultado] = await db.query(`DELETE FROM objeto WHERE id_objeto = ?`, [id]);
    return resultado;
};

module.exports = { obtenerObjetos, obtenerObjetoPorId, crearObjeto, actualizarObjeto, eliminarObjeto };