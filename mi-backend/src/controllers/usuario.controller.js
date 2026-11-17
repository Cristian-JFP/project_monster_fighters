const usuarioModel = require('../models/usuario.model');

const getAll = async (req, res) => {
  try {
    const usuarios = await usuarioModel.getAll();

    res.json({
      ok: true,
      data: usuarios
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los usuarios'
    });
  }
};

const getById = async (req, res) => {
  try {
    const id_usuario = req.params.id;

    const usuario = await usuarioModel.getById(id_usuario);

    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado'
      });
    }

    res.json({
      ok: true,
      data: usuario
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al obtener el usuario'
    });
  }
};

const create = async (req, res) => {
  try {
    const nombre_usuario = req.body.nombre_usuario;
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
    const fecha_registrado = req.body.fecha_registrado;
    const id_rango = req.body.id_rango;
    const rating = req.body.rating;

    const usuario = await usuarioModel.create({
      nombre_usuario,
      correo,
      contraseña,
      fecha_registrado,
      id_rango,
      rating
    });

    res.status(201).json({
      ok: true,
      data: usuario
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al crear el usuario'
    });
  }
};

const update = async (req, res) => {
  try {
    const id_usuario = req.params.id;

    const nombre_usuario = req.body.nombre_usuario;
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
    const fecha_registrado = req.body.fecha_registrado;
    const id_rango = req.body.id_rango;
    const rating = req.body.rating;

    const resultado = await usuarioModel.update(id_usuario, {
      nombre_usuario,
      correo,
      contraseña,
      fecha_registrado,
      id_rango,
      rating
    });

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Usuario actualizado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar el usuario'
    });
  }
};

const remove = async (req, res) => {
  try {
    const id_usuario = req.params.id;

    const resultado = await usuarioModel.remove(id_usuario);

    if (resultado === 0) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado'
      });
    }

    res.json({
      ok: true,
      msg: 'Usuario eliminado correctamente'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el usuario'
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