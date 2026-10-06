const salaUsuarioModel = require('../models/sala_usuario.model');

const getAll = async (req, res) => {
  try {
    const relaciones = await salaUsuarioModel.getAll();

    res.json({
      ok: true,
      data: relaciones
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las relaciones'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_sala = req.params.id_sala;
    const id_usuario = req.params.id_usuario;

    const relacion = await salaUsuarioModel.getById(
      id_sala,
      id_usuario
    );

    if (!relacion) {
      return res.status(404).json({
        ok: false,
        msg: 'Relación no encontrada'
      });
    }

    res.json({
      ok: true,
      data: relacion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la relación'
    });
  }
};

const create = async (req, res) => {
  try {
    const id_sala = req.body.id_sala;
    const id_usuario = req.body.id_usuario;
    const rol = req.body.rol;
    const fecha_ingreso = req.body.fecha_ingreso;

    const relacion = await salaUsuarioModel.create({
      id_sala,
      id_usuario,
      rol,
      fecha_ingreso
    });

    res.status(201).json({
      ok: true,
      data: relacion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al agregar el usuario a la sala'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_sala = req.params.id_sala;
    const id_usuario = req.params.id_usuario;

    const resultado = await salaUsuarioModel.remove(
      id_sala,
      id_usuario
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Relación no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Usuario eliminado de la sala correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el usuario de la sala'
    });
  }
};

const getBySala = async (req, res) => {
  try {
    const id_sala = req.params.id_sala;

    const relaciones = await salaUsuarioModel.getBySala(
      id_sala
    );

    res.json({
      ok: true,
      data: relaciones
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los usuarios de la sala'
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getBySala
};