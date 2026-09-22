const rangoModel = require("../models/rango.model");

const obtenerRangos = async (req, res) => {
    try {
        res.json(await rangoModel.obtenerRangos());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los rangos", error: error.message });
    }
};

const obtenerRangoPorId = async (req, res) => {
    try {
        const rango = await rangoModel.obtenerRangoPorId(req.params.id);
        if (!rango) return res.status(404).json({ mensaje: "Rango no encontrado" });
        res.json(rango);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el rango", error: error.message });
    }
};

const crearRango = async (req, res) => {
    try {
        const { nombre, rating_minimo, rating_maximo } = req.body;
        const resultado = await rangoModel.crearRango(nombre, rating_minimo, rating_maximo);
        res.status(201).json({ mensaje: "Rango creado correctamente", id_rango: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el rango", error: error.message });
    }
};

const actualizarRango = async (req, res) => {
    try {
        const { nombre, rating_minimo, rating_maximo } = req.body;
        const resultado = await rangoModel.actualizarRango(req.params.id, nombre, rating_minimo, rating_maximo);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Rango no encontrado" });
        res.json({ mensaje: "Rango actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el rango", error: error.message });
    }
};

const eliminarRango = async (req, res) => {
    try {
        const resultado = await rangoModel.eliminarRango(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Rango no encontrado" });
        res.json({ mensaje: "Rango eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el rango", error: error.message });
    }
};

module.exports = { obtenerRangos, obtenerRangoPorId, crearRango, actualizarRango, eliminarRango };