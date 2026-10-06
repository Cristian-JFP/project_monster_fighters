const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM tipo ORDER BY id_tipo DESC'
  );

  return rows;
};

const getById = async (id_tipo) => {
  const [rows] = await pool.query(
    'SELECT * FROM tipo WHERE id_tipo = ?',
    [id_tipo]
  );

  return rows[0];
};

const create = async ({
  nombre,
  descripcion
}) => {
  const [result] = await pool.query(
    `INSERT INTO tipo
    (nombre, descripcion)
    VALUES (?, ?)`,
    [
      nombre,
      descripcion
    ]
  );

  return {
    id_tipo: result.insertId,
    nombre,
    descripcion
  };
};

const update = async (id_tipo, {
  nombre,
  descripcion
}) => {
  const [result] = await pool.query(
    `UPDATE tipo
     SET
       nombre = ?,
       descripcion = ?
     WHERE id_tipo = ?`,
    [
      nombre,
      descripcion,
      id_tipo
    ]
  );

  return result.affectedRows;
};

const remove = async (id_tipo) => {
  const [result] = await pool.query(
    'DELETE FROM tipo WHERE id_tipo = ?',
    [id_tipo]
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