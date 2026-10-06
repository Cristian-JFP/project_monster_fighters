const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    `SELECT * FROM sala_usuario
     ORDER BY id_sala, id_usuario`
  );

  return rows;
};

const getById = async (id_sala, id_usuario) => {
  const [rows] = await pool.query(
    `SELECT * FROM sala_usuario
     WHERE id_sala = ? AND id_usuario = ?`,
    [
      id_sala,
      id_usuario
    ]
  );

  return rows[0];
};

const create = async ({
  id_sala,
  id_usuario,
  rol,
  fecha_ingreso
}) => {
  await pool.query(
    `INSERT INTO sala_usuario
    (id_sala, id_usuario, rol, fecha_ingreso)
    VALUES (?, ?, ?, ?)`,
    [
      id_sala,
      id_usuario,
      rol,
      fecha_ingreso
    ]
  );

  return {
    id_sala,
    id_usuario,
    rol,
    fecha_ingreso
  };
};

const remove = async (id_sala, id_usuario) => {
  const [result] = await pool.query(
    `DELETE FROM sala_usuario
     WHERE id_sala = ? AND id_usuario = ?`,
    [
      id_sala,
      id_usuario
    ]
  );

  return result.affectedRows;
};

const getBySala = async (id_sala) => {
  const [rows] = await pool.query(
    `SELECT * FROM sala_usuario
     WHERE id_sala = ?
     ORDER BY id_usuario`,
    [id_sala]
  );

  return rows;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getBySala
};