const pool = require('../config/db');

const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM criatura ORDER BY id_criatura DESC'
  );

  return rows;
};


const getById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM criatura WHERE id_criatura = ?',
    [id]
  );

  return rows[0];
};


const create = async ({
  nombre,
  descripcion,
  vida_base,
  velocidad,
  id_tipo,
  defensa_especial,
  ataque_especial,
  defensa_base,
  ataque_base,
  rareza
}) => {

  const [result] = await pool.query(
    `INSERT INTO criatura
    (
      nombre,
      descripcion,
      vida_base,
      velocidad,
      id_tipo,
      defensa_especial,
      ataque_especial,
      defensa_base,
      ataque_base,
      rareza
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      nombre,
      descripcion,
      vida_base,
      velocidad,
      id_tipo,
      defensa_especial,
      ataque_especial,
      defensa_base,
      ataque_base,
      rareza
    ]
  );

  return {
    id_criatura: result.insertId,
    nombre,
    descripcion,
    vida_base,
    velocidad,
    id_tipo,
    defensa_especial,
    ataque_especial,
    defensa_base,
    ataque_base,
    rareza
  };
};


const update = async (id, {
  nombre,
  descripcion,
  vida_base,
  velocidad,
  id_tipo,
  defensa_especial,
  ataque_especial,
  defensa_base,
  ataque_base,
  rareza
}) => {

  const [result] = await pool.query(
    `UPDATE criatura
     SET
       nombre = ?,
       descripcion = ?,
       vida_base = ?,
       velocidad = ?,
       id_tipo = ?,
       defensa_especial = ?,
       ataque_especial = ?,
       defensa_base = ?,
       ataque_base = ?,
       rareza = ?
     WHERE id_criatura = ?`,
    [
      nombre,
      descripcion,
      vida_base,
      velocidad,
      id_tipo,
      defensa_especial,
      ataque_especial,
      defensa_base,
      ataque_base,
      rareza,
      id
    ]
  );

  return result.affectedRows;
};


const remove = async (id) => {

  const [result] = await pool.query(
    'DELETE FROM criatura WHERE id_criatura = ?',
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