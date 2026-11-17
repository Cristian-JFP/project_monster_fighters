
const CriaturaMovimiento = require('../models/criatura_movimiento.model');

// Obtener todas las relaciones entre criaturas y movimientos
const getAll = async (req, res) => {
    try {
        const relaciones = await CriaturaMovimiento.getAll();
        res.json(relaciones);
    } catch (error) {
        console.error('Error al obtener las relaciones:', error);
        res.status(500).json({ error: 'Error al obtener las relaciones' });
    }
};

// Obtener una relación específica
const getById = async (req, res) => {
    try {
        const { id_criatura, id_movimiento } = req.params;

        const relacion = await CriaturaMovimiento.getById(
            id_criatura,
            id_movimiento
        );

        if (!relacion) {
            return res.status(404).json({ error: 'Relación no encontrada' });
        }

        res.json(relacion);
    } catch (error) {
        console.error('Error al obtener la relación:', error);
        res.status(500).json({ error: 'Error al obtener la relación' });
    }
};

// Obtener los movimientos asociados a una criatura
const getByCriatura = async (req, res) => {
    try {
        const { id_criatura } = req.params;

        const relaciones = await CriaturaMovimiento.getByCriatura(id_criatura);

        res.json(relaciones);
    } catch (error) {
        console.error('Error al obtener los movimientos:', error);
        res.status(500).json({ error: 'Error al obtener los movimientos' });
    }
};

// Crear una relación entre una criatura y un movimiento
const create = async (req, res) => {
    try {
        const { id_criatura, id_movimiento } = req.body;

        if (!id_criatura || !id_movimiento) {
            return res.status(400).json({
                error: 'Debes enviar id_criatura e id_movimiento'
            });
        }

        const relacion = await CriaturaMovimiento.create({
            id_criatura,
            id_movimiento
        });

        res.status(201).json({
            mensaje: 'Relación creada correctamente',
            relacion
        });
    } catch (error) {
        console.error('Error al crear la relación:', error);
        res.status(500).json({ error: 'Error al crear la relación' });
    }
};

// Eliminar una relación entre una criatura y un movimiento
const remove = async (req, res) => {
    try {
        const { id_criatura, id_movimiento } = req.params;

        const filasEliminadas = await CriaturaMovimiento.remove(
            id_criatura,
            id_movimiento
        );

        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Relación no encontrada' });
        }

        res.json({ mensaje: 'Relación eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar la relación:', error);
        res.status(500).json({ error: 'Error al eliminar la relación' });
    }
};

module.exports = {
    getAll,
    getById,
    getByCriatura,
    create,
    remove
};
