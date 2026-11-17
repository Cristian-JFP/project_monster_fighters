const tipoModel = require('../models/tipo.model');

const getAll = async (req, res) => {
  try {
    const tipos = await tipoModel.getAll();

    res.json({
      ok: true,
      data: tipos
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los tipos'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_tipo = req.params.id;

    const tipo = await tipoModel.getById(id_tipo);

    if (!tipo) {
      return res.status(404).json({
        ok: false,
        msg: 'Tipo no encontrado'
      });
    }

    res.json({
      ok: true,
      data: tipo
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el tipo'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;

    const tipo = await tipoModel.create({
      nombre,
      descripcion
    });

    res.status(201).json({
      ok: true,
      data: tipo
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el tipo'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_tipo = req.params.id;

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;

    const resultado = await tipoModel.update(id_tipo, {
      nombre,
      descripcion
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Tipo no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Tipo actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el tipo'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_tipo = req.params.id;

    const resultado = await tipoModel.remove(id_tipo);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Tipo no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Tipo eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el tipo'
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