const accionBatallaModel = require('../models/accion_batalla.model');

const getAll = async (req, res) => {
  try {
    const acciones = await accionBatallaModel.getAll();

    res.json({
      ok: true,
      data: acciones
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las acciones'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_accion = req.params.id;

    const accion = await accionBatallaModel.getById(id_accion);

    if (!accion) {
      return res.status(404).json({
        ok: false,
        msg: 'Acción no encontrada'
      });
    }

    res.json({
      ok: true,
      data: accion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la acción'
    });
  }
};

const create = async (req, res) => {
  try {
    const id_batalla = req.body.id_batalla;
    const id_usuario = req.body.id_usuario;
    const turno = req.body.turno;
    const tipo_accion = req.body.tipo_accion;
    const id_criatura = req.body.id_criatura;
    const id_movimiento = req.body.id_movimiento;
    const id_objeto = req.body.id_objeto;
    const daño = req.body.daño;
    const fecha = req.body.fecha;

    const accion = await accionBatallaModel.create({
      id_batalla,
      id_usuario,
      turno,
      tipo_accion,
      id_criatura,
      id_movimiento,
      id_objeto,
      daño,
      fecha
    });

    res.status(201).json({
      ok: true,
      data: accion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear la acción'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_accion = req.params.id;

    const id_batalla = req.body.id_batalla;
    const id_usuario = req.body.id_usuario;
    const turno = req.body.turno;
    const tipo_accion = req.body.tipo_accion;
    const id_criatura = req.body.id_criatura;
    const id_movimiento = req.body.id_movimiento;
    const id_objeto = req.body.id_objeto;
    const daño = req.body.daño;
    const fecha = req.body.fecha;

    const resultado = await accionBatallaModel.update(id_accion, {
      id_batalla,
      id_usuario,
      turno,
      tipo_accion,
      id_criatura,
      id_movimiento,
      id_objeto,
      daño,
      fecha
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Acción no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Acción actualizada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la acción'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_accion = req.params.id;

    const resultado = await accionBatallaModel.remove(id_accion);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Acción no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Acción eliminada correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la acción'
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