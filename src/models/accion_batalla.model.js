const db = require("../config/db");

const obtenerAccionesBatalla = async () => {
    const [acciones] = await db.query(`SELECT * FROM accion_batalla`);
    return acciones;
};

const obtenerAccionBatallaPorId = async (id) => {
    const [acciones] = await db.query(`SELECT * FROM accion_batalla WHERE id_accion = ?`, [id]);
    return acciones[0];
};

const crearAccionBatalla = async (id_batalla, id_usuario, turno, tipo_accion, id_criatura, id_movimiento, id_objeto, dano) => {
    const [resultado] = await db.query(
        `INSERT INTO accion_batalla (id_batalla, id_usuario, turno, tipo_accion, id_criatura, id_movimiento, id_objeto, \`daño\`)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id_batalla, id_usuario, turno, tipo_accion, id_criatura, id_movimiento, id_objeto, dano]
    );
    return resultado;
};

const actualizarAccionBatalla = async (id, tipo_accion, id_movimiento, id_objeto, dano) => {
    const [resultado] = await db.query(
        `UPDATE accion_batalla SET tipo_accion = ?, id_movimiento = ?, id_objeto = ?, \`daño\` = ? WHERE id_accion = ?`,
        [tipo_accion, id_movimiento, id_objeto, dano, id]
    );
    return resultado;
};

const eliminarAccionBatalla = async (id) => {
    const [resultado] = await db.query(`DELETE FROM accion_batalla WHERE id_accion = ?`, [id]);
    return resultado;
};

module.exports = { obtenerAccionesBatalla, obtenerAccionBatallaPorId, crearAccionBatalla, actualizarAccionBatalla, eliminarAccionBatalla };