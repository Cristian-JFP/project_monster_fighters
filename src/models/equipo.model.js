const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM equipo ORDER BY id_equipo DESC'
  );

  return rows;
};

const getById = async (id_equipo) => {
  const [rows] = await pool.query(
    'SELECT * FROM equipo WHERE id_equipo = ?',
    [id_equipo]
  );

  return rows[0];
};

const create = async ({
  nombre,
  fecha_creacion,
  id_usuario
}) => {
  const [result] = await pool.query(
    `INSERT INTO equipo
    (nombre, fecha_creacion, id_usuario)
    VALUES (?, ?, ?)`,
    [
      nombre,
      fecha_creacion,
      id_usuario
    ]
  );

  return {
    id_equipo: result.insertId,
    nombre,
    fecha_creacion,
    id_usuario
  };
};

const update = async (id_equipo, {
  nombre,
  fecha_creacion,
  id_usuario
}) => {
  const [result] = await pool.query(
    `UPDATE equipo
     SET
       nombre = ?,
       fecha_creacion = ?,
       id_usuario = ?
     WHERE id_equipo = ?`,
    [
      nombre,
      fecha_creacion,
      id_usuario,
      id_equipo
    ]
  );

  return result.affectedRows;
};

const remove = async (id_equipo) => {
  const [result] = await pool.query(
    'DELETE FROM equipo WHERE id_equipo = ?',
    [id_equipo]
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