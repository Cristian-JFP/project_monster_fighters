const db = require("../config/db");

const obtenerSalas = async () => {
    const [salas] = await db.query(`
        SELECT
            s.id_sala,
            s.nombre,
            s.codigo,
            s.estado,
            s.id_creador,
            s.fecha_creacion,
            u.nombre_usuario AS creador
        FROM sala s
        INNER JOIN usuario u
            ON s.id_creador = u.id_usuario
    `);

    return salas;
};

const obtenerSalaPorId = async (id) => {
    const [salas] = await db.query(`
        SELECT
            s.id_sala,
            s.nombre,
            s.codigo,
            s.estado,
            s.id_creador,
            s.fecha_creacion,
            u.nombre_usuario AS creador
        FROM sala s
        INNER JOIN usuario u
            ON s.id_creador = u.id_usuario
        WHERE s.id_sala = ?
    `, [id]);

    return salas[0];
};

const crearSala = async (
    nombre,
    codigo,
    estado,
    id_creador
) => {
    const [resultado] = await db.query(`
        INSERT INTO sala
        (
            nombre,
            codigo,
            estado,
            id_creador
        )
        VALUES (?, ?, ?, ?)
    `, [
        nombre,
        codigo,
        estado,
        id_creador
    ]);

    return resultado;
};

module.exports = {
    obtenerSalas,
    obtenerSalaPorId,
    crearSala
};