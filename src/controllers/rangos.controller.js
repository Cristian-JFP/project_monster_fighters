let rangos = [
    {
        id: 1,
        nombre: 'Bronce',
        rating_minimo: 0,
        rating_maximo: 999
    },
    {
        id: 2,
        nombre: 'Plata',
        rating_minimo: 1000,
        rating_maximo: 1199
    },
    {
        id: 3,
        nombre: 'Oro',
        rating_minimo: 1200,
        rating_maximo: 1399
    }
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: rangos
    });
};

const getById = (req, res) => {
    const rango = rangos.find(
        r => r.id == req.params.id
    );

    if (!rango) {
        return res.status(404).json({
            ok: false,
            msg: 'Rango no encontrado'
        });
    }

    res.json({
        ok: true,
        data: rango
    });
};

module.exports = {
    getAll,
    getById
};