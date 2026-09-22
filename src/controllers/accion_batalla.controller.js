const accionBatallaModel = require("../models/accion_batalla.model");

const obtenerAccionesBatalla = async (req, res) => {
    try {
        res.json(await accionBatallaModel.obtenerAccionesBatalla());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las acciones de batalla", error: error.message });
    }
};

const obtenerAccionBatallaPorId = async (req, res) => {
    try {
        const accion = await accionBatallaModel.obtenerAccionBatallaPorId(req.params.id);
        if (!accion) return res.status(404).json({ mensaje: "Acción de batalla no encontrada" });
        res.json(accion);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la acción de batalla", error: error.message });
    }
};

const crearAccionBatalla = async (req, res) => {
    try {
        const { id_batalla, id_usuario, turno, tipo_accion, id_criatura, id_movimiento, id_objeto, daño } = req.body;
        const resultado = await accionBatallaModel.crearAccionBatalla(id_batalla, id_usuario, turno, tipo_accion, id_criatura, id_movimiento, id_objeto, daño);
        res.status(201).json({ mensaje: "Acción de batalla creada correctamente", id_accion: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la acción de batalla", error: error.message });
    }
};

const actualizarAccionBatalla = async (req, res) => {
    try {
        const { tipo_accion, id_movimiento, id_objeto, daño } = req.body;
        const resultado = await accionBatallaModel.actualizarAccionBatalla(req.params.id, tipo_accion, id_movimiento, id_objeto, daño);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Acción de batalla no encontrada" });
        res.json({ mensaje: "Acción de batalla actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la acción de batalla", error: error.message });
    }
};

const eliminarAccionBatalla = async (req, res) => {
    try {
        const resultado = await accionBatallaModel.eliminarAccionBatalla(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Acción de batalla no encontrada" });
        res.json({ mensaje: "Acción de batalla eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la acción de batalla", error: error.message });
    }
};

module.exports = { obtenerAccionesBatalla, obtenerAccionBatallaPorId, crearAccionBatalla, actualizarAccionBatalla, eliminarAccionBatalla };