const pool = require('../config/db');

let criaturas = [
    {
        id: 1,
        nombre: 'Drakmon',
        descripcion: 'Criatura de fuego',
        vida: 100,
        ataque: 80,
        defensa: 70,
        velocidad: 60
    },
    {
        id: 2,
        nombre: 'Aquamon',
        descripcion: 'Criatura de agua',
        vida: 110,
        ataque: 70,
        defensa: 65,
        velocidad: 75
    }
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: criaturas
    });
};

const getById = (req, res) => {
    const criatura = criaturas.find(
        c => c.id == req.params.id
    );

    if (!criatura) {
        return res.status(404).json({
            ok: false,
            msg: 'Criatura no encontrada'
        });
    }

    res.json({
        ok: true,
        data: criatura
    });
};

const create = (req, res) => {
    const nuevaCriatura = {
        id: Date.now(),
        ...req.body
    };

    criaturas.push(nuevaCriatura);

    res.status(201).json({
        ok: true,
        data: nuevaCriatura
    });
};

const update = (req, res) => {
    const index = criaturas.findIndex(
        c => c.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            ok: false,
            msg: 'Criatura no encontrada'
        });
    }

    criaturas[index] = {
        ...criaturas[index],
        ...req.body
    };

    res.json({
        ok: true,
        data: criaturas[index]
    });
};

const remove = (req, res) => {
    const index = criaturas.findIndex(
        c => c.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            ok: false,
            msg: 'Criatura no encontrada'
        });
    }

    const eliminada = criaturas.splice(index, 1);

    res.json({
        ok: true,
        data: eliminada[0]
    });
};

const getMoves = (req, res) => {
    res.json({
        ok: true,
        data: [],
        msg: `Movimientos de la criatura ${req.params.id}`
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getMoves
};