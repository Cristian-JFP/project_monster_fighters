let salas = [];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: salas
    });
};

const create = (req, res) => {
    const nuevaSala = {
        id: Date.now(),
        estado: 'ESPERANDO',
        ...req.body
    };

    salas.push(nuevaSala);

    res.status(201).json({
        ok: true,
        data: nuevaSala
    });
};

const getById = (req, res) => {
    const sala = salas.find(
        s => s.id == req.params.id
    );

    if (!sala) {
        return res.status(404).json({
            ok: false,
            msg: 'Sala no encontrada'
        });
    }

    res.json({
        ok: true,
        data: sala
    });
};

const join = (req, res) => {
    res.json({
        ok: true,
        msg: `Usuario ${req.body.id_usuario} se unió a la sala ${req.params.id}`
    });
};

const leave = (req, res) => {
    res.json({
        ok: true,
        msg: `Usuario salió de la sala ${req.params.id}`
    });
};

module.exports = {
    getAll,
    create,
    getById,
    join,
    leave
};