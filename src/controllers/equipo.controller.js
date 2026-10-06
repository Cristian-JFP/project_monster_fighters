const equipoModel = require('../models/equipo.model');

const getAll = async (req, res) => {
  try {
    const equipos = await equipoModel.getAll();

    res.json({
      ok: true,
      data: equipos
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los equipos'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_equipo = req.params.id;

    const equipo = await equipoModel.getById(id_equipo);

    if (!equipo) {
      return res.status(404).json({
        ok: false,
        msg: 'Equipo no encontrado'
      });
    }

    res.json({
      ok: true,
      data: equipo
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el equipo'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const fecha_creacion = req.body.fecha_creacion;
    const id_usuario = req.body.id_usuario;

    const equipo = await equipoModel.create({
      nombre,
      fecha_creacion,
      id_usuario
    });

    res.status(201).json({
      ok: true,
      data: equipo
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el equipo'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_equipo = req.params.id;

    const nombre = req.body.nombre;
    const fecha_creacion = req.body.fecha_creacion;
    const id_usuario = req.body.id_usuario;

    const resultado = await equipoModel.update(id_equipo, {
      nombre,
      fecha_creacion,
      id_usuario
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Equipo no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Equipo actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el equipo'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_equipo = req.params.id;

    const resultado = await equipoModel.remove(id_equipo);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Equipo no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Equipo eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el equipo'
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};