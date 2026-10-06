const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    `SELECT * FROM equipo_criatura
     ORDER BY id_equipo, posicion`
  );

  return rows;
};

const getById = async (id_equipo, id_criatura) => {
  const [rows] = await pool.query(
    `SELECT * FROM equipo_criatura
     WHERE id_equipo = ? AND id_criatura = ?`,
    [
      id_equipo,
      id_criatura
    ]
  );

  return rows[0];
};

const create = async ({
  id_equipo,
  id_criatura,
  posicion,
  id_objeto
}) => {
  await pool.query(
    `INSERT INTO equipo_criatura
    (id_equipo, id_criatura, posicion, id_objeto)
    VALUES (?, ?, ?, ?)`,
    [
      id_equipo,
      id_criatura,
      posicion,
      id_objeto
    ]
  );

  return {
    id_equipo,
    id_criatura,
    posicion,
    id_objeto
  };
};

const remove = async (id_equipo, id_criatura) => {
  const [result] = await pool.query(
    `DELETE FROM equipo_criatura
     WHERE id_equipo = ? AND id_criatura = ?`,
    [
      id_equipo,
      id_criatura
    ]
  );

  return result.affectedRows;
};

const getByEquipo = async (id_equipo) => {
  const [rows] = await pool.query(
    `SELECT * FROM equipo_criatura
     WHERE id_equipo = ?
     ORDER BY posicion`,
    [id_equipo]
  );

  return rows;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getByEquipo
};