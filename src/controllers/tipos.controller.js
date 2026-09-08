let tipos = [
    {
        id: 1,
        nombre: 'Fuego',
        descripcion: 'Tipo relacionado con ataques de fuego'
    },
    {
        id: 2,
        nombre: 'Agua',
        descripcion: 'Tipo relacionado con ataques de agua'
    },
    {
        id: 3,
        nombre: 'Electrico',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 4,
        nombre: 'normal',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 5,
        nombre: 'volador',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 6,
        nombre: 'lucha',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 7,
        nombre: 'veneno',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 8,
        nombre: 'tierra',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 9,
        nombre: 'roca',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 10,
        nombre: 'fastama',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 11,
        nombre: 'bicho',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 12,
        nombre: 'metal',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 13,
        nombre: 'planta',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 14,
        nombre: 'hielo',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 15,
        nombre: 'dragon',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 16,
        nombre: 'psiquico',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 17,
        nombre: 'hada',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    {
        id: 18,
        nombre: 'oscuridad',
        descripcion: 'Tipo relacionado con ataques eléctricos'
    },
    
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: tipos
    });
};

const getById = (req, res) => {
    const tipo = tipos.find(
        t => t.id == req.params.id
    );

    if (!tipo) {
        return res.status(404).json({
            ok: false,
            msg: 'Tipo no encontrado'
        });
    }

    res.json({
        ok: true,
        data: tipo
    });
};

module.exports = {
    getAll,
    getById
};