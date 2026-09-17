const movimientoModel = require("../models/movimiento.model");

const obtenerMovimientos = async (req, res) => {
    try {
        const movimientos = await movimientoModel.obtenerMovimientos();

        res.json(movimientos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los movimientos",
            error: error.message
        });
    }
};

const obtenerMovimientoPorId = async (req, res) => {
    try {
        const movimiento = await movimientoModel.obtenerMovimientoPorId(
            req.params.id
        );

        if (!movimiento) {
            return res.status(404).json({
                mensaje: "Movimiento no encontrado"
            });
        }

        res.json(movimiento);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el movimiento",
            error: error.message
        });
    }
};

const crearMovimiento = async (req, res) => {
    try {
        const {
            nombre,
            descripcion,
            potencia,
            categoria,
            id_tipo
        } = req.body;

        const resultado = await movimientoModel.crearMovimiento(
            nombre,
            descripcion,
            potencia,
            categoria,
            id_tipo
        );

        res.status(201).json({
            mensaje: "Movimiento creado correctamente",
            id_movimiento: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el movimiento",
            error: error.message
        });
    }
};

module.exports = {
    obtenerMovimientos,
    obtenerMovimientoPorId,
    crearMovimiento
};