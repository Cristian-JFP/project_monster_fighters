const db = require("../config/db");

const obtenerMovimientos = async () => {
    const [movimientos] = await db.query(`
        SELECT m.id_movimiento, m.nombre, m.descripcion, m.potencia, m.categoria, m.id_tipo, t.nombre AS tipo
        FROM movimiento m
        INNER JOIN tipo t ON m.id_tipo = t.id_tipo
    `);
    return movimientos;
};

const obtenerMovimientoPorId = async (id) => {
    const [movimientos] = await db.query(`
        SELECT m.id_movimiento, m.nombre, m.descripcion, m.potencia, m.categoria, m.id_tipo, t.nombre AS tipo
        FROM movimiento m
        INNER JOIN tipo t ON m.id_tipo = t.id_tipo
        WHERE m.id_movimiento = ?
    `, [id]);
    return movimientos[0];
};

const crearMovimiento = async (nombre, descripcion, potencia, categoria, id_tipo) => {
    const [resultado] = await db.query(
        `INSERT INTO movimiento (nombre, descripcion, potencia, categoria, id_tipo) VALUES (?, ?, ?, ?, ?)`,
        [nombre, descripcion, potencia, categoria, id_tipo]
    );
    return resultado;
};

const actualizarMovimiento = async (id, nombre, descripcion, potencia, categoria, id_tipo) => {
    const [resultado] = await db.query(
        `UPDATE movimiento SET nombre = ?, descripcion = ?, potencia = ?, categoria = ?, id_tipo = ? WHERE id_movimiento = ?`,
        [nombre, descripcion, potencia, categoria, id_tipo, id]
    );
    return resultado;
};

const eliminarMovimiento = async (id) => {
    const [resultado] = await db.query(`DELETE FROM movimiento WHERE id_movimiento = ?`, [id]);
    return resultado;
};

module.exports = { obtenerMovimientos, obtenerMovimientoPorId, crearMovimiento, actualizarMovimiento, eliminarMovimiento };