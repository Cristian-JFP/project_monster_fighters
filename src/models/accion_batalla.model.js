const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM accion_batalla ORDER BY id_accion DESC'
  );

  return rows;
};

const getById = async (id_accion) => {
  const [rows] = await pool.query(
    'SELECT * FROM accion_batalla WHERE id_accion = ?',
    [id_accion]
  );

  return rows[0];
};

const create = async ({
  id_batalla,
  id_usuario,
  turno,
  tipo_accion,
  id_criatura,
  id_movimiento,
  id_objeto,
  daño,
  fecha
}) => {
  const [result] = await pool.query(
    `INSERT INTO accion_batalla
    (
      id_batalla,
      id_usuario,
      turno,
      tipo_accion,
      id_criatura,
      id_movimiento,
      id_objeto,
      daño,
      fecha
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id_batalla,
      id_usuario,
      turno,
      tipo_accion,
      id_criatura,
      id_movimiento,
      id_objeto,
      daño,
      fecha
    ]
  );

  return {
    id_accion: result.insertId,
    id_batalla,
    id_usuario,
    turno,
    tipo_accion,
    id_criatura,
    id_movimiento,
    id_objeto,
    daño,
    fecha
  };
};

const update = async (id_accion, {
  id_batalla,
  id_usuario,
  turno,
  tipo_accion,
  id_criatura,
  id_movimiento,
  id_objeto,
  daño,
  fecha
}) => {
  const [result] = await pool.query(
    `UPDATE accion_batalla
     SET
       id_batalla = ?,
       id_usuario = ?,
       turno = ?,
       tipo_accion = ?,
       id_criatura = ?,
       id_movimiento = ?,
       id_objeto = ?,
       daño = ?,
       fecha = ?
     WHERE id_accion = ?`,
    [
      id_batalla,
      id_usuario,
      turno,
      tipo_accion,
      id_criatura,
      id_movimiento,
      id_objeto,
      daño,
      fecha,
      id_accion
    ]
  );

  return result.affectedRows;
};

const remove = async (id_accion) => {
  const [result] = await pool.query(
    'DELETE FROM accion_batalla WHERE id_accion = ?',
    [id_accion]
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