const objetoModel = require('../models/objeto.model');

const getAll = async (req, res) => {
  try {
    const objetos = await objetoModel.getAll();

    res.json({
      ok: true,
      data: objetos
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los objetos'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_objeto = req.params.id;

    const objeto = await objetoModel.getById(id_objeto);

    if (!objeto) {
      return res.status(404).json({
        ok: false,
        msg: 'Objeto no encontrado'
      });
    }

    res.json({
      ok: true,
      data: objeto
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el objeto'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const tipo_objeto = req.body.tipo_objeto;
    const valor_efecto = req.body.valor_efecto;

    const objeto = await objetoModel.create({
      nombre,
      descripcion,
      tipo_objeto,
      valor_efecto
    });

    res.status(201).json({
      ok: true,
      data: objeto
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el objeto'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_objeto = req.params.id;

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const tipo_objeto = req.body.tipo_objeto;
    const valor_efecto = req.body.valor_efecto;

    const resultado = await objetoModel.update(id_objeto, {
      nombre,
      descripcion,
      tipo_objeto,
      valor_efecto
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Objeto no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Objeto actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el objeto'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_objeto = req.params.id;

    const resultado = await objetoModel.remove(id_objeto);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Objeto no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Objeto eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el objeto'
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