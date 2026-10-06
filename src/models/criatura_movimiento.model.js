const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    `SELECT * FROM criatura_movimiento
     ORDER BY id_criatura, id_movimiento`
  );

  return rows;
};

const getById = async (id_criatura, id_movimiento) => {
  const [rows] = await pool.query(
    `SELECT * FROM criatura_movimiento
     WHERE id_criatura = ? AND id_movimiento = ?`,
    [
      id_criatura,
      id_movimiento
    ]
  );

  return rows[0];
};

const create = async ({
  id_criatura,
  id_movimiento
}) => {
  await pool.query(
    `INSERT INTO criatura_movimiento
    (id_criatura, id_movimiento)
    VALUES (?, ?)`,
    [
      id_criatura,
      id_movimiento
    ]
  );

  return {
    id_criatura,
    id_movimiento
  };
};

const remove = async (id_criatura, id_movimiento) => {
  const [result] = await pool.query(
    `DELETE FROM criatura_movimiento
     WHERE id_criatura = ? AND id_movimiento = ?`,
    [
      id_criatura,
      id_movimiento
    ]
  );

  return result.affectedRows;
};

const getByCriatura = async (id_criatura) => {
  const [rows] = await pool.query(
    `SELECT * FROM criatura_movimiento
     WHERE id_criatura = ?`,
    [id_criatura]
  );

  return rows;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getByCriatura
};