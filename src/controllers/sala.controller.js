const salaModel = require('../models/sala.model');

const getAll = async (req, res) => {
  try {
    const salas = await salaModel.getAll();

    res.json({
      ok: true,
      data: salas
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las salas'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_sala = req.params.id;

    const sala = await salaModel.getById(id_sala);

    if (!sala) {
      return res.status(404).json({
        ok: false,
        msg: 'Sala no encontrada'
      });
    }

    res.json({
      ok: true,
      data: sala
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la sala'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const estado = req.body.estado;
    const id_creador = req.body.id_creador;
    const fecha_creacion = req.body.fecha_creacion;

    const sala = await salaModel.create({
      nombre,
      codigo,
      estado,
      id_creador,
      fecha_creacion
    });

    res.status(201).json({
      ok: true,
      data: sala
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear la sala'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_sala = req.params.id;

    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const estado = req.body.estado;
    const id_creador = req.body.id_creador;
    const fecha_creacion = req.body.fecha_creacion;

    const resultado = await salaModel.update(id_sala, {
      nombre,
      codigo,
      estado,
      id_creador,
      fecha_creacion
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Sala no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Sala actualizada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la sala'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_sala = req.params.id;

    const resultado = await salaModel.remove(id_sala);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Sala no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Sala eliminada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la sala'
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