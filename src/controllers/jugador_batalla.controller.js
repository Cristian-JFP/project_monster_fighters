const jugadorBatallaModel = require('../models/jugador_batalla.model');

const getAll = async (req, res) => {
  try {
    const jugadores = await jugadorBatallaModel.getAll();

    res.json({
      ok: true,
      data: jugadores
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los jugadores de las batallas'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_batalla = req.params.id_batalla;
    const id_usuario = req.params.id_usuario;

    const jugador = await jugadorBatallaModel.getById(
      id_batalla,
      id_usuario
    );

    if (!jugador) {
      return res.status(404).json({
        ok: false,
        msg: 'Jugador de batalla no encontrado'
      });
    }

    res.json({
      ok: true,
      data: jugador
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el jugador de batalla'
    });
  }
};

const create = async (req, res) => {
  try {
    const id_batalla = req.body.id_batalla;
    const id_usuario = req.body.id_usuario;
    const id_equipo = req.body.id_equipo;
    const posicion = req.body.posicion;
    const resultado = req.body.resultado;
    const rating_anterior = req.body.rating_anterior;
    const rating_nuevo = req.body.rating_nuevo;

    const jugador = await jugadorBatallaModel.create({
      id_batalla,
      id_usuario,
      id_equipo,
      posicion,
      resultado,
      rating_anterior,
      rating_nuevo
    });

    res.status(201).json({
      ok: true,
      data: jugador
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el jugador de batalla'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_batalla = req.params.id_batalla;
    const id_usuario = req.params.id_usuario;

    const id_equipo = req.body.id_equipo;
    const posicion = req.body.posicion;
    const resultado = req.body.resultado;
    const rating_anterior = req.body.rating_anterior;
    const rating_nuevo = req.body.rating_nuevo;

    const resultadoUpdate = await jugadorBatallaModel.update(
      id_batalla,
      id_usuario,
      {
        id_equipo,
        posicion,
        resultado,
        rating_anterior,
        rating_nuevo
      }
    );

    if (resultadoUpdate === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Jugador de batalla no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Jugador de batalla actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el jugador de batalla'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_batalla = req.params.id_batalla;
    const id_usuario = req.params.id_usuario;

    const resultado = await jugadorBatallaModel.remove(
      id_batalla,
      id_usuario
    );

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Jugador de batalla no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Jugador de batalla eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el jugador de batalla'
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