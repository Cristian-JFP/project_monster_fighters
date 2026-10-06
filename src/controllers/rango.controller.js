const rangoModel = require('../models/rango.model');

const getAll = async (req, res) => {
  try {
    const rangos = await rangoModel.getAll();

    res.json({
      ok: true,
      data: rangos
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los rangos'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_rango = req.params.id;

    const rango = await rangoModel.getById(id_rango);

    if (!rango) {
      return res.status(404).json({
        ok: false,
        msg: 'Rango no encontrado'
      });
    }

    res.json({
      ok: true,
      data: rango
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el rango'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const rating_minimo = req.body.rating_minimo;
    const rating_maximo = req.body.rating_maximo;

    const rango = await rangoModel.create({
      nombre,
      rating_minimo,
      rating_maximo
    });

    res.status(201).json({
      ok: true,
      data: rango
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el rango'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_rango = req.params.id;

    const nombre = req.body.nombre;
    const rating_minimo = req.body.rating_minimo;
    const rating_maximo = req.body.rating_maximo;

    const resultado = await rangoModel.update(id_rango, {
      nombre,
      rating_minimo,
      rating_maximo
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Rango no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Rango actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el rango'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_rango = req.params.id;

    const resultado = await rangoModel.remove(id_rango);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Rango no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Rango eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el rango'
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