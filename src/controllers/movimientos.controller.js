let movimientos = [
    {
        id: 1,
        nombre: 'Bola de Fuego',
        potencia: 80,
        precision: 90,
        categoria: 'FISICO',
        tipo_id: 1
    },
    {
        id: 2,
        nombre: 'Hidrochorro',
        potencia: 75,
        precision: 95,
        categoria: 'ESPECIAL',
        tipo_id: 2
    }
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: movimientos
    });
};

const getById = (req, res) => {
    const movimiento = movimientos.find(
        m => m.id == req.params.id
    );

    if (!movimiento) {
        return res.status(404).json({
            ok: false,
            msg: 'Movimiento no encontrado'
        });
    }

    res.json({
        ok: true,
        data: movimiento
    });
};

module.exports = {
    getAll,
    getById
};