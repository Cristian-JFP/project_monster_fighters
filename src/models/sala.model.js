const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM sala ORDER BY id_sala DESC'
  );

  return rows;
};

const getById = async (id_sala) => {
  const [rows] = await pool.query(
    'SELECT * FROM sala WHERE id_sala = ?',
    [id_sala]
  );

  return rows[0];
};

const create = async ({
  nombre,
  codigo,
  estado,
  id_creador,
  fecha_creacion
}) => {
  const [result] = await pool.query(
    `INSERT INTO sala
    (nombre, codigo, estado, id_creador, fecha_creacion)
    VALUES (?, ?, ?, ?, ?)`,
    [
      nombre,
      codigo,
      estado,
      id_creador,
      fecha_creacion
    ]
  );

  return {
    id_sala: result.insertId,
    nombre,
    codigo,
    estado,
    id_creador,
    fecha_creacion
  };
};

const update = async (id_sala, {
  nombre,
  codigo,
  estado,
  id_creador,
  fecha_creacion
}) => {
  const [result] = await pool.query(
    `UPDATE sala
     SET
       nombre = ?,
       codigo = ?,
       estado = ?,
       id_creador = ?,
       fecha_creacion = ?
     WHERE id_sala = ?`,
    [
      nombre,
      codigo,
      estado,
      id_creador,
      fecha_creacion,
      id_sala
    ]
  );

  return result.affectedRows;
};

const remove = async (id_sala) => {
  const [result] = await pool.query(
    'DELETE FROM sala WHERE id_sala = ?',
    [id_sala]
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