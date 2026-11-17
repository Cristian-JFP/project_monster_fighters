
const Movimiento = require('../models/movimiento.model');

const getAll = async (req, res) => {
  try {
    const movimientos = await Movimiento.getAll();
    res.status(200).json(movimientos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar movimientos', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const movimiento = await Movimiento.getById(req.params.id);

    if (!movimiento) {
      return res.status(404).json({ mensaje: 'Movimiento no encontrado' });
    }

    res.status(200).json(movimiento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al consultar el movimiento', error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const nuevoMovimiento = await Movimiento.create(req.body);
    res.status(201).json(nuevoMovimiento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear movimiento', error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const resultado = await Movimiento.update(req.params.id, req.body);

    if (!resultado) {
      return res.status(404).json({ mensaje: 'Movimiento no encontrado o sin cambios' });
    }

    res.status(200).json({ mensaje: 'Movimiento actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar movimiento', error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const resultado = await Movimiento.remove(req.params.id);

    if (!resultado) {
      return res.status(404).json({ mensaje: 'Movimiento no encontrado' });
    }

    res.status(200).json({ mensaje: 'Movimiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar movimiento', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
