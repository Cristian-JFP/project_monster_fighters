let usuarios = [
    {
        id: 1,
        nombre_usuario: 'Cristian',
        correo: 'cristian@example.com',
        rating: 1000,
        rango: 'Bronce'
    }
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: usuarios
    });
};

const getById = (req, res) => {
    const usuario = usuarios.find(
        u => u.id == req.params.id
    );

    if (!usuario) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario no encontrado'
        });
    }

    res.json({
        ok: true,
        data: usuario
    });
};

const create = (req, res) => {
    const nuevoUsuario = {
        id: Date.now(),
        ...req.body
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json({
        ok: true,
        data: nuevoUsuario
    });
};

const update = (req, res) => {
    const index = usuarios.findIndex(
        u => u.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario no encontrado'
        });
    }

    usuarios[index] = {
        ...usuarios[index],
        ...req.body
    };

    res.json({
        ok: true,
        data: usuarios[index]
    });
};

const getStats = (req, res) => {
    res.json({
        ok: true,
        data: {
            usuario_id: req.params.id,
            partidas: 0,
            victorias: 0,
            derrotas: 0,
            rating: 1000,
            porcentaje_victorias: 0
        }
    });
};

const getBattles = (req, res) => {
    res.json({
        ok: true,
        data: [],
        msg: `Historial de batallas del usuario ${req.params.id}`
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    getStats,
    getBattles
};