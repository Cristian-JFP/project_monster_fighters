const db = require("../config/db");

const obtenerEquipos = async () => {
    const [equipos] = await db.query(`
        SELECT e.id_equipo, e.nombre, e.fecha_creacion, e.id_usuario, u.nombre_usuario
        FROM equipo e
        INNER JOIN usuario u ON e.id_usuario = u.id_usuario
    `);
    return equipos;
};

const obtenerEquipoPorId = async (id) => {
    const [equipos] = await db.query(`
        SELECT e.id_equipo, e.nombre, e.fecha_creacion, e.id_usuario, u.nombre_usuario
        FROM equipo e
        INNER JOIN usuario u ON e.id_usuario = u.id_usuario
        WHERE e.id_equipo = ?
    `, [id]);
    return equipos[0];
};

const crearEquipo = async (nombre, id_usuario) => {
    const [resultado] = await db.query(
        `INSERT INTO equipo (nombre, id_usuario) VALUES (?, ?)`,
        [nombre, id_usuario]
    );
    return resultado;
};

const actualizarEquipo = async (id, nombre, id_usuario) => {
    const [resultado] = await db.query(
        `UPDATE equipo SET nombre = ?, id_usuario = ? WHERE id_equipo = ?`,
        [nombre, id_usuario, id]
    );
    return resultado;
};

const eliminarEquipo = async (id) => {
    const [resultado] = await db.query(`DELETE FROM equipo WHERE id_equipo = ?`, [id]);
    return resultado;
};

module.exports = { obtenerEquipos, obtenerEquipoPorId, crearEquipo, actualizarEquipo, eliminarEquipo };