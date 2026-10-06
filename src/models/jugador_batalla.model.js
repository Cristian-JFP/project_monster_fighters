const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM jugador_batalla ORDER BY id_batalla DESC'
  );

  return rows;
};

const getById = async (id_batalla, id_usuario) => {
  const [rows] = await pool.query(
    `SELECT * FROM jugador_batalla
     WHERE id_batalla = ? AND id_usuario = ?`,
    [
      id_batalla,
      id_usuario
    ]
  );

  return rows[0];
};

const create = async ({
  id_batalla,
  id_usuario,
  id_equipo,
  posicion,
  resultado,
  rating_anterior,
  rating_nuevo
}) => {
  const [result] = await pool.query(
    `INSERT INTO jugador_batalla
    (
      id_batalla,
      id_usuario,
      id_equipo,
      posicion,
      resultado,
      rating_anterior,
      rating_nuevo
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      id_batalla,
      id_usuario,
      id_equipo,
      posicion,
      resultado,
      rating_anterior,
      rating_nuevo
    ]
  );

  return {
    id_batalla,
    id_usuario,
    id_equipo,
    posicion,
    resultado,
    rating_anterior,
    rating_nuevo
  };
};

const update = async (id_batalla, id_usuario, {
  id_equipo,
  posicion,
  resultado,
  rating_anterior,
  rating_nuevo
}) => {
  const [result] = await pool.query(
    `UPDATE jugador_batalla
     SET
       id_equipo = ?,
       posicion = ?,
       resultado = ?,
       rating_anterior = ?,
       rating_nuevo = ?
     WHERE id_batalla = ? AND id_usuario = ?`,
    [
      id_equipo,
      posicion,
      resultado,
      rating_anterior,
      rating_nuevo,
      id_batalla,
      id_usuario
    ]
  );

  return result.affectedRows;
};

const remove = async (id_batalla, id_usuario) => {
  const [result] = await pool.query(
    `DELETE FROM jugador_batalla
     WHERE id_batalla = ? AND id_usuario = ?`,
    [
      id_batalla,
      id_usuario
    ]
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