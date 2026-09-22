const criaturaModel = require("../models/criatura.model");

const obtenerCriaturas = async (req, res) => {
    try {
        res.json(await criaturaModel.obtenerCriaturas());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener las criaturas", error: error.message });
    }
};

const obtenerCriaturaPorId = async (req, res) => {
    try {
        const criatura = await criaturaModel.obtenerCriaturaPorId(req.params.id);
        if (!criatura) return res.status(404).json({ mensaje: "Criatura no encontrada" });
        res.json(criatura);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener la criatura", error: error.message });
    }
};

const crearCriatura = async (req, res) => {
    try {
        const { nombre, descripcion, vida_base, velocidad, id_tipo, defensa_especial, ataque_especial, defensa_base, ataque_base } = req.body;
        const resultado = await criaturaModel.crearCriatura(nombre, descripcion, vida_base, velocidad, id_tipo, defensa_especial, ataque_especial, defensa_base, ataque_base);
        res.status(201).json({ mensaje: "Criatura creada correctamente", id_criatura: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear la criatura", error: error.message });
    }
};

const actualizarCriatura = async (req, res) => {
    try {
        const { nombre, descripcion, vida_base, velocidad, id_tipo, defensa_especial, ataque_especial, defensa_base, ataque_base } = req.body;
        const resultado = await criaturaModel.actualizarCriatura(req.params.id, nombre, descripcion, vida_base, velocidad, id_tipo, defensa_especial, ataque_especial, defensa_base, ataque_base);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Criatura no encontrada" });
        res.json({ mensaje: "Criatura actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la criatura", error: error.message });
    }
};

const eliminarCriatura = async (req, res) => {
    try {
        const resultado = await criaturaModel.eliminarCriatura(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Criatura no encontrada" });
        res.json({ mensaje: "Criatura eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la criatura", error: error.message });
    }
};

module.exports = { obtenerCriaturas, obtenerCriaturaPorId, crearCriatura, actualizarCriatura, eliminarCriatura };