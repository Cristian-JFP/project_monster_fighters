const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM rango ORDER BY id_rango DESC'
  );

  return rows;
};

const getById = async (id_rango) => {
  const [rows] = await pool.query(
    'SELECT * FROM rango WHERE id_rango = ?',
    [id_rango]
  );

  return rows[0];
};

const create = async ({
  nombre,
  rating_minimo,
  rating_maximo
}) => {
  const [result] = await pool.query(
    `INSERT INTO rango
    (nombre, rating_minimo, rating_maximo)
    VALUES (?, ?, ?)`,
    [
      nombre,
      rating_minimo,
      rating_maximo
    ]
  );

  return {
    id_rango: result.insertId,
    nombre,
    rating_minimo,
    rating_maximo
  };
};

const update = async (id_rango, {
  nombre,
  rating_minimo,
  rating_maximo
}) => {
  const [result] = await pool.query(
    `UPDATE rango
     SET
       nombre = ?,
       rating_minimo = ?,
       rating_maximo = ?
     WHERE id_rango = ?`,
    [
      nombre,
      rating_minimo,
      rating_maximo,
      id_rango
    ]
  );

  return result.affectedRows;
};

const remove = async (id_rango) => {
  const [result] = await pool.query(
    'DELETE FROM rango WHERE id_rango = ?',
    [id_rango]
  );

  return result.affectedRows;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};