const criaturaModel = require('../models/criatura.model');


const getAll = async (req, res) => {

  try {

    const criaturas = await criaturaModel.getAll();

    res.json({
      ok: true,
      data: criaturas
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las criaturas'
    });
  }
};


const getById = async (req, res) => {

  try {

    const criatura = await criaturaModel.getById(
      req.params.id
    );

    if (!criatura) {
      return res.status(404).json({
        ok: false,
        msg: 'Criatura no encontrada'
      });
    }

    res.json({
      ok: true,
      data: criatura
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la criatura'
    });
  }
};


const create = async (req, res) => {

  try {

    const criatura = await criaturaModel.create(req.body);

    res.status(201).json({
      ok: true,
      data: criatura
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear la criatura'
    });
  }
};


const update = async (req, res) => {

  try {

    const resultado = await criaturaModel.update(
      req.params.id,
      req.body
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Criatura no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Criatura actualizada correctamente'
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la criatura'
    });
  }
};


const remove = async (req, res) => {

  try {

    const resultado = await criaturaModel.remove(
      req.params.id
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Criatura no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Criatura eliminada correctamente'
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la criatura'
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