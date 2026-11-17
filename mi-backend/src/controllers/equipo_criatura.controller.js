const equipoCriaturaModel = require('../models/equipo_criatura.model');

const getAll = async (req, res) => {
  try {
    const relaciones = await equipoCriaturaModel.getAll();

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
    const id_equipo = req.params.id_equipo;
    const id_criatura = req.params.id_criatura;

    const relacion = await equipoCriaturaModel.getById(
      id_equipo,
      id_criatura
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
    const id_equipo = req.body.id_equipo;
    const id_criatura = req.body.id_criatura;
    const posicion = req.body.posicion;
    const id_objeto = req.body.id_objeto;

    const relacion = await equipoCriaturaModel.create({
      id_equipo,
      id_criatura,
      posicion,
      id_objeto
    });

    res.status(201).json({
      ok: true,
      data: relacion
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al agregar la criatura al equipo'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_equipo = req.params.id_equipo;
    const id_criatura = req.params.id_criatura;

    const resultado = await equipoCriaturaModel.remove(
      id_equipo,
      id_criatura
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Relación no encontrada'
      });
    }

    res.json({
      ok: true,
      msg: 'Criatura eliminada del equipo correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la criatura del equipo'
    });
  }
};

const getByEquipo = async (req, res) => {
  try {
    const id_equipo = req.params.id_equipo;

    const relaciones = await equipoCriaturaModel.getByEquipo(
      id_equipo
    );

    res.json({
      ok: true,
      data: relaciones
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las criaturas del equipo'
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  getByEquipo
};