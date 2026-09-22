const batallaModel = require("../models/batalla.model");

const obtenerBatallas = async (req, res) => {
    try {
        res.json(await batallaModel.obtenerBatallas());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las batallas", error: error.message });
    }
};

const obtenerBatallaPorId = async (req, res) => {
    try {
        const batalla = await batallaModel.obtenerBatallaPorId(req.params.id);
        if (!batalla) return res.status(404).json({ mensaje: "Batalla no encontrada" });
        res.json(batalla);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la batalla", error: error.message });
    }
};

const crearBatalla = async (req, res) => {
    try {
        const { id_sala, estado, modo } = req.body;
        const resultado = await batallaModel.crearBatalla(id_sala, estado, modo);
        res.status(201).json({ mensaje: "Batalla creada correctamente", id_batalla: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la batalla", error: error.message });
    }
};

const actualizarBatalla = async (req, res) => {
    try {
        const { estado, fecha_fin, modo } = req.body;
        const resultado = await batallaModel.actualizarBatalla(req.params.id, estado, fecha_fin, modo);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Batalla no encontrada" });
        res.json({ mensaje: "Batalla actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la batalla", error: error.message });
    }
};

const eliminarBatalla = async (req, res) => {
    try {
        const resultado = await batallaModel.eliminarBatalla(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Batalla no encontrada" });
        res.json({ mensaje: "Batalla eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la batalla", error: error.message });
    }
};

module.exports = { obtenerBatallas, obtenerBatallaPorId, crearBatalla, actualizarBatalla, eliminarBatalla };