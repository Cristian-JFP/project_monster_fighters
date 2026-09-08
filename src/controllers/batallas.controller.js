let batallas = [];

const create = (req, res) => {
    const nuevaBatalla = {
        id: Date.now(),
        estado: 'PENDIENTE',
        ...req.body
    };

    batallas.push(nuevaBatalla);

    res.status(201).json({
        ok: true,
        data: nuevaBatalla
    });
};

const getById = (req, res) => {
    const batalla = batallas.find(
        b => b.id == req.params.id
    );

    if (!batalla) {
        return res.status(404).json({
            ok: false,
            msg: 'Batalla no encontrada'
        });
    }

    res.json({
        ok: true,
        data: batalla
    });
};

const getState = (req, res) => {
    res.json({
        ok: true,
        data: {
            batalla_id: req.params.id,
            estado: 'EN_CURSO',
            turno: 1
        }
    });
};

const move = (req, res) => {
    res.json({
        ok: true,
        msg: 'Movimiento realizado',
        data: req.body
    });
};

const switchCreature = (req, res) => {
    res.json({
        ok: true,
        msg: 'Criatura cambiada',
        data: req.body
    });
};

const useItem = (req, res) => {
    res.json({
        ok: true,
        msg: 'Objeto utilizado durante la batalla',
        data: req.body
    });
};

const forfeit = (req, res) => {
    res.json({
        ok: true,
        msg: 'El jugador se ha rendido'
    });
};

const getHistory = (req, res) => {
    res.json({
        ok: true,
        data: [],
        msg: `Historial de la batalla ${req.params.id}`
    });
};

module.exports = {
    create,
    getById,
    getState,
    move,
    switchCreature,
    useItem,
    forfeit,
    getHistory
};