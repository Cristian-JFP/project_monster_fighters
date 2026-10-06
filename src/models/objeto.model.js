const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM objeto ORDER BY id_objeto DESC'
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM objeto WHERE id_objeto = ?',
    [id]
  );
  return rows[0];
};

const create = async ({
  nombre,
  descripcion,
  tipo_objeto,
  valor_efecto
}) => {
  const [result] = await pool.query(
    `INSERT INTO objeto
    (nombre, descripcion, tipo_objeto, valor_efecto)
    VALUES (?, ?, ?, ?)`,
    [
      nombre,
      descripcion,
      tipo_objeto,
      valor_efecto
    ]
  );

  return {
    id_objeto: result.insertId,
    nombre,
    descripcion,
    tipo_objeto,
    valor_efecto
  };
};

const update = async (id, {
  nombre,
  descripcion,
  tipo_objeto,
  valor_efecto
}) => {
  const [result] = await pool.query(
    `UPDATE objeto
     SET
       nombre = ?,
       descripcion = ?,
       tipo_objeto = ?,
       valor_efecto = ?
     WHERE id_objeto = ?`,
    [
      nombre,
      descripcion,
      tipo_objeto,
      valor_efecto,
      id
    ]
  );

  return result.affectedRows;
};

const remove = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM objeto WHERE id_objeto = ?',
    [id]
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