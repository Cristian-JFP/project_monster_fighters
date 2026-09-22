const salaModel = require("../models/sala.model"); // ojo: NO equipoModel

const obtenerSalas = async (req, res) => {
    try {
        res.json(await salaModel.obtenerSalas());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las salas", error: error.message });
    }
};

const obtenerSalaPorId = async (req, res) => {
    try {
        const sala = await salaModel.obtenerSalaPorId(req.params.id);
        if (!sala) return res.status(404).json({ mensaje: "Sala no encontrada" });
        res.json(sala);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la sala", error: error.message });
    }
};

const crearSala = async (req, res) => {
    try {
        const { nombre, codigo, estado, id_creador } = req.body;
        const resultado = await salaModel.crearSala(nombre, codigo, estado, id_creador);
        res.status(201).json({ mensaje: "Sala creada correctamente", id_sala: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la sala", error: error.message });
    }
};

const actualizarSala = async (req, res) => {
    try {
        const { nombre, codigo, estado } = req.body;
        const resultado = await salaModel.actualizarSala(req.params.id, nombre, codigo, estado);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Sala no encontrada" });
        res.json({ mensaje: "Sala actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la sala", error: error.message });
    }
};

const eliminarSala = async (req, res) => {
    try {
        const resultado = await salaModel.eliminarSala(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Sala no encontrada" });
        res.json({ mensaje: "Sala eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la sala", error: error.message });
    }
};

module.exports = { obtenerSalas, obtenerSalaPorId, crearSala, actualizarSala, eliminarSala };