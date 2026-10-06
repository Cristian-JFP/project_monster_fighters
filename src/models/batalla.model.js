const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM batalla ORDER BY id_batalla DESC'
  );

  return rows;
};

const getById = async (id_batalla) => {
  const [rows] = await pool.query(
    'SELECT * FROM batalla WHERE id_batalla = ?',
    [id_batalla]
  );

  return rows[0];
};

const create = async ({
  id_sala,
  estado,
  fecha_inicio,
  fecha_fin,
  modo
}) => {
  const [result] = await pool.query(
    `INSERT INTO batalla
    (id_sala, estado, fecha_inicio, fecha_fin, modo)
    VALUES (?, ?, ?, ?, ?)`,
    [
      id_sala,
      estado,
      fecha_inicio,
      fecha_fin,
      modo
    ]
  );

  return {
    id_batalla: result.insertId,
    id_sala,
    estado,
    fecha_inicio,
    fecha_fin,
    modo
  };
};

const update = async (id_batalla, {
  id_sala,
  estado,
  fecha_inicio,
  fecha_fin,
  modo
}) => {
  const [result] = await pool.query(
    `UPDATE batalla
     SET
       id_sala = ?,
       estado = ?,
       fecha_inicio = ?,
       fecha_fin = ?,
       modo = ?
     WHERE id_batalla = ?`,
    [
      id_sala,
      estado,
      fecha_inicio,
      fecha_fin,
      modo,
      id_batalla
    ]
  );

  return result.affectedRows;
};

const remove = async (id_batalla) => {
  const [result] = await pool.query(
    'DELETE FROM batalla WHERE id_batalla = ?',
    [id_batalla]
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