const equipoModel = require("../models/equipo.model");

const obtenerEquipos = async (req, res) => {
    try {
        res.json(await equipoModel.obtenerEquipos());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los equipos", error: error.message });
    }
};

const obtenerEquipoPorId = async (req, res) => {
    try {
        const equipo = await equipoModel.obtenerEquipoPorId(req.params.id);
        if (!equipo) return res.status(404).json({ mensaje: "Equipo no encontrado" });
        res.json(equipo);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el equipo", error: error.message });
    }
};

const crearEquipo = async (req, res) => {
    try {
        const { nombre, id_usuario } = req.body;
        const resultado = await equipoModel.crearEquipo(nombre, id_usuario);
        res.status(201).json({ mensaje: "Equipo creado correctamente", id_equipo: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el equipo", error: error.message });
    }
};

const actualizarEquipo = async (req, res) => {
    try {
        const { nombre, id_usuario } = req.body;
        const resultado = await equipoModel.actualizarEquipo(req.params.id, nombre, id_usuario);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Equipo no encontrado" });
        res.json({ mensaje: "Equipo actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el equipo", error: error.message });
    }
};

const eliminarEquipo = async (req, res) => {
    try {
        const resultado = await equipoModel.eliminarEquipo(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Equipo no encontrado" });
        res.json({ mensaje: "Equipo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el equipo", error: error.message });
    }
};

module.exports = { obtenerEquipos, obtenerEquipoPorId, crearEquipo, actualizarEquipo, eliminarEquipo };