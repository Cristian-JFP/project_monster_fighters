const batallaModel = require('../models/batalla.model');

const getAll = async (req, res) => {
  try {
    const batallas = await batallaModel.getAll();

    res.json({
      ok: true,
      data: batallas
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las batallas'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_batalla = req.params.id;

    const batalla = await batallaModel.getById(id_batalla);

    if (!batalla) {
      return res.status(404).json({
        ok: false,
        msg: 'Batalla no encontrada'
      });
    }

    res.json({
      ok: true,
      data: batalla
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la batalla'
    });
  }
};

const create = async (req, res) => {
  try {
    const id_sala = req.body.id_sala;
    const estado = req.body.estado;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const modo = req.body.modo;

    const batalla = await batallaModel.create({
      id_sala,
      estado,
      fecha_inicio,
      fecha_fin,
      modo
    });

    res.status(201).json({
      ok: true,
      data: batalla
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear la batalla'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_batalla = req.params.id;

    const id_sala = req.body.id_sala;
    const estado = req.body.estado;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const modo = req.body.modo;

    const resultado = await batallaModel.update(id_batalla, {
      id_sala,
      estado,
      fecha_inicio,
      fecha_fin,
      modo
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Batalla no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Batalla actualizada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la batalla'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_batalla = req.params.id;

    const resultado = await batallaModel.remove(id_batalla);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Batalla no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Batalla eliminada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la batalla'
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