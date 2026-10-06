const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM usuario ORDER BY id_usuario DESC'
  );

  return rows;
};

const getById = async (id_usuario) => {
  const [rows] = await pool.query(
    'SELECT * FROM usuario WHERE id_usuario = ?',
    [id_usuario]
  );

  return rows[0];
};

const create = async ({
  nombre_usuario,
  correo,
  contraseña,
  fecha_registrado,
  id_rango,
  rating
}) => {
  const [result] = await pool.query(
    `INSERT INTO usuario
    (
      nombre_usuario,
      correo,
      contraseña,
      fecha_registrado,
      id_rango,
      rating
    )
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      nombre_usuario,
      correo,
      contraseña,
      fecha_registrado,
      id_rango,
      rating
    ]
  );

  return {
    id_usuario: result.insertId,
    nombre_usuario,
    correo,
    contraseña,
    fecha_registrado,
    id_rango,
    rating
  };
};

const update = async (id_usuario, {
  nombre_usuario,
  correo,
  contraseña,
  fecha_registrado,
  id_rango,
  rating
}) => {
  const [result] = await pool.query(
    `UPDATE usuario
     SET
       nombre_usuario = ?,
       correo = ?,
       contraseña = ?,
       fecha_registrado = ?,
       id_rango = ?,
       rating = ?
     WHERE id_usuario = ?`,
    [
      nombre_usuario,
      correo,
      contraseña,
      fecha_registrado,
      id_rango,
      rating,
      id_usuario
    ]
  );

  return result.affectedRows;
};

const remove = async (id_usuario) => {
  const [result] = await pool.query(
    'DELETE FROM usuario WHERE id_usuario = ?',
    [id_usuario]
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