const tipoModel = require("../models/tipo.model");

const obtenerTipos = async (req, res) => {
    try {
        const tipos = await tipoModel.obtenerTipos();

        res.json(tipos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los tipos",
            error: error.message
        });
    }
};

const obtenerTipoPorId = async (req, res) => {
    try {
        const tipo = await tipoModel.obtenerTipoPorId(
            req.params.id
        );

        if (!tipo) {
            return res.status(404).json({
                mensaje: "Tipo no encontrado"
            });
        }

        res.json(tipo);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el tipo",
            error: error.message
        });
    }
};

const crearTipo = async (req, res) => {
    try {
        const {
            nombre,
            descripcion
        } = req.body;

        const resultado = await tipoModel.crearTipo(
            nombre,
            descripcion
        );

        res.status(201).json({
            mensaje: "Tipo creado correctamente",
            id_tipo: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el tipo",
            error: error.message
        });
    }
};

module.exports = {
    obtenerTipos,
    obtenerTipoPorId,
    crearTipo
};