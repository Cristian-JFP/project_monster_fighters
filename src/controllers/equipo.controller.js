const equipoModel = require("../models/equipo.model");

const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await equipoModel.obtenerEquipos();

        res.json(equipos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los equipos",
            error: error.message
        });
    }
};

const obtenerEquipoPorId = async (req, res) => {
    try {
        const equipo = await equipoModel.obtenerEquipoPorId(
            req.params.id
        );

        if (!equipo) {
            return res.status(404).json({
                mensaje: "Equipo no encontrado"
            });
        }

        res.json(equipo);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener el equipo",
            error: error.message
        });
    }
};

const crearEquipo = async (req, res) => {
    try {
        const {
            nombre,
            id_usuario
        } = req.body;

        const resultado = await equipoModel.crearEquipo(
            nombre,
            id_usuario
        );

        res.status(201).json({
            mensaje: "Equipo creado correctamente",
            id_equipo: resultado.insertId
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el equipo",
            error: error.message
        });
    }
};

module.exports = {
    obtenerEquipos,
    obtenerEquipoPorId,
    crearEquipo
};