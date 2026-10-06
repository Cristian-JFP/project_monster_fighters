const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM movimiento ORDER BY id_movimiento DESC'
  );

  return rows;
};


const getById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM movimiento WHERE id_movimiento = ?',
    [id]
  );

  return rows[0];
};


const create = async ({
  nombre,
  descripcion,
  potencia,
  categoria,
  id_tipo
}) => {

  const [result] = await pool.query(
    `INSERT INTO movimiento
    (nombre, descripcion, potencia, categoria, id_tipo)
    VALUES (?, ?, ?, ?, ?)`,
    [
      nombre,
      descripcion,
      potencia,
      categoria,
      id_tipo
    ]
  );

  return {
    id_movimiento: result.insertId,
    nombre,
    descripcion,
    potencia,
    categoria,
    id_tipo
  };
};


const update = async (id, {
  nombre,
  descripcion,
  potencia,
  categoria,
  id_tipo
}) => {

  const [result] = await pool.query(
    `UPDATE movimiento
     SET
       nombre = ?,
       descripcion = ?,
       potencia = ?,
       categoria = ?,
       id_tipo = ?
     WHERE id_movimiento = ?`,
    [
      nombre,
      descripcion,
      potencia,
      categoria,
      id_tipo,
      id
    ]
  );

  return result.affectedRows;
};


const remove = async (id) => {

  const [result] = await pool.query(
    'DELETE FROM movimiento WHERE id_movimiento = ?',
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