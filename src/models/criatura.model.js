const db = require("../config/db");

const obtenerCriaturas = async () => {
    const [criaturas] = await db.query(`
        SELECT
            c.id_criatura,
            c.nombre,
            c.descripcion,
            c.vida_base,
            c.velocidad,
            c.defensa_especial,
            c.ataque_especial,
            c.defensa_base,
            c.ataque_base,
            c.id_tipo,
            t.nombre AS tipo
        FROM criatura c
        INNER JOIN tipo t
            ON c.id_tipo = t.id_tipo
    `);

    return criaturas;
};

const obtenerCriaturaPorId = async (id) => {
    const [criaturas] = await db.query(`
        SELECT
            c.id_criatura,
            c.nombre,
            c.descripcion,
            c.vida_base,
            c.velocidad,
            c.defensa_especial,
            c.ataque_especial,
            c.defensa_base,
            c.ataque_base,
            c.id_tipo,
            t.nombre AS tipo
        FROM criatura c
        INNER JOIN tipo t
            ON c.id_tipo = t.id_tipo
        WHERE c.id_criatura = ?
    `, [id]);

    return criaturas[0];
};

const crearCriatura = async (
    nombre,
    descripcion,
    vida_base,
    velocidad,
    id_tipo,
    defensa_especial,
    ataque_especial,
    defensa_base,
    ataque_base
) => {
    const [resultado] = await db.query(`
        INSERT INTO criatura
        (
            nombre,
            descripcion,
            vida_base,
            velocidad,
            id_tipo,
            defensa_especial,
            ataque_especial,
            defensa_base,
            ataque_base
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        nombre,
        descripcion,
        vida_base,
        velocidad,
        id_tipo,
        defensa_especial,
        ataque_especial,
        defensa_base,
        ataque_base
    ]);

    return resultado;
};

const eliminarCriatura = async (id) => {
    const [resultado] = await db.query(`
        DELETE FROM criatura
        WHERE id_criatura = ?
    `, [id]);

    return resultado;
};

module.exports = {
    obtenerCriaturas,
    obtenerCriaturaPorId,
    crearCriatura,
    eliminarCriatura
};