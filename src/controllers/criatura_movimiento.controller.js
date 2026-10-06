const criaturaMovimientoModel = require('../models/criatura_movimiento.model');

const getAll = async (req, res) => {
  try {
    const relaciones = await criaturaMovimientoModel.getAll();

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
    const id_criatura = req.params.id_criatura;
    const id_movimiento = req.params.id_movimiento;

    const relacion = await criaturaMovimientoModel.getById(
      id_criatura,
      id_movimiento
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
    const id_criatura = req.body.id_criatura;
    const id_movimiento = req.body.id_movimiento;

    const relacion = await criaturaMovimientoModel.create({
      id_criatura,
      id_movimiento
    });

    res.status(201).json({
      ok: true,
      data: relacion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear la relación'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_criatura = req.params.id_criatura;
    const id_movimiento = req.params.id_movimiento;

    const resultado = await criaturaMovimientoModel.remove(
      id_criatura,
      id_movimiento
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Relación no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Relación eliminada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la relación'
    });
  }
};

const getByCriatura = async (req, res) => {
  try {
    const id_criatura = req.params.id_criatura;

    const relaciones = await criaturaMovimientoModel.getByCriatura(
      id_criatura
    );

    res.json({
      ok: true,
      data: relaciones
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los movimientos de la criatura'
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getByCriatura
};