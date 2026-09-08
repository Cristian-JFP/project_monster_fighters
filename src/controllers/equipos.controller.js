let equipos = [];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: equipos
    });
};

const create = (req, res) => {
    const nuevoEquipo = {
        id: Date.now(),
        ...req.body,
        criaturas: []
    };

    equipos.push(nuevoEquipo);

    res.status(201).json({
        ok: true,
        data: nuevoEquipo
    });
};

const getById = (req, res) => {
    const equipo = equipos.find(
        e => e.id == req.params.id
    );

    if (!equipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    res.json({
        ok: true,
        data: equipo
    });
};

const update = (req, res) => {
    const equipo = equipos.find(
        e => e.id == req.params.id
    );

    if (!equipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    Object.assign(equipo, req.body);

    res.json({
        ok: true,
        data: equipo
    });
};

const remove = (req, res) => {
    const index = equipos.findIndex(
        e => e.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    const eliminado = equipos.splice(index, 1);

    res.json({
        ok: true,
        data: eliminado[0]
    });
};

const getCreatures = (req, res) => {
    const equipo = equipos.find(
        e => e.id == req.params.id
    );

    if (!equipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    res.json({
        ok: true,
        data: equipo.criaturas
    });
};

const addCreature = (req, res) => {
    const equipo = equipos.find(
        e => e.id == req.params.id
    );

    if (!equipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    equipo.criaturas.push(req.body);

    res.status(201).json({
        ok: true,
        data: equipo
    });
};

const removeCreature = (req, res) => {
    const equipo = equipos.find(
        e => e.id == req.params.id
    );

    if (!equipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Equipo no encontrado'
        });
    }

    equipo.criaturas = equipo.criaturas.filter(
        c => c.id != req.params.creature_id
    );

    res.json({
        ok: true,
        data: equipo
    });
};

const equipItem = (req, res) => {
    res.json({
        ok: true,
        msg: `Objeto ${req.body.id_objeto} equipado a la criatura ${req.params.creature_id}`
    });
};

const removeItem = (req, res) => {
    res.json({
        ok: true,
        msg: `Objeto retirado de la criatura ${req.params.creature_id}`
    });
};

const validate = (req, res) => {
    res.json({
        ok: true,
        valido: true,
        msg: 'El equipo puede participar en una batalla'
    });
};

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove,
    getCreatures,
    addCreature,
    removeCreature,
    equipItem,
    removeItem,
    validate
};