const objetoModel = require("../models/objeto.model");

const obtenerObjetos = async (req, res) => {
    try {
        res.json(await objetoModel.obtenerObjetos());
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los objetos", error: error.message });
    }
};

const obtenerObjetoPorId = async (req, res) => {
    try {
        const objeto = await objetoModel.obtenerObjetoPorId(req.params.id);
        if (!objeto) return res.status(404).json({ mensaje: "Objeto no encontrado" });
        res.json(objeto);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el objeto", error: error.message });
    }
};

const crearObjeto = async (req, res) => {
    try {
        const { nombre, descripcion, tipo_objeto, valor_efecto } = req.body;
        const resultado = await objetoModel.crearObjeto(nombre, descripcion, tipo_objeto, valor_efecto);
        res.status(201).json({ mensaje: "Objeto creado correctamente", id_objeto: resultado.insertId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear el objeto", error: error.message });
    }
};

const actualizarObjeto = async (req, res) => {
    try {
        const { nombre, descripcion, tipo_objeto, valor_efecto } = req.body;
        const resultado = await objetoModel.actualizarObjeto(req.params.id, nombre, descripcion, tipo_objeto, valor_efecto);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Objeto no encontrado" });
        res.json({ mensaje: "Objeto actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el objeto", error: error.message });
    }
};

const eliminarObjeto = async (req, res) => {
    try {
        const resultado = await objetoModel.eliminarObjeto(req.params.id);
        if (resultado.affectedRows === 0) return res.status(404).json({ mensaje: "Objeto no encontrado" });
        res.json({ mensaje: "Objeto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el objeto", error: error.message });
    }
};

module.exports = { obtenerObjetos, obtenerObjetoPorId, crearObjeto, actualizarObjeto, eliminarObjeto };