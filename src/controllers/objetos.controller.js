let objetos = [
    {
        id: 1,
        nombre: 'Escudo de Hierro',
        descripcion: 'Aumenta la defensa de la criatura',
        tipo_objeto: 'EQUIPABLE',
        efecto: 'defensa',
        valor_efecto: 20
    },
    {
        id: 2,
        nombre: 'Poción',
        descripcion: 'Recupera vida durante la batalla',
        tipo_objeto: 'CONSUMIBLE',
        efecto: 'vida',
        valor_efecto: 30
    }
];

const getAll = (req, res) => {
    res.json({
        ok: true,
        data: objetos
    });
};

const getById = (req, res) => {
    const objeto = objetos.find(
        o => o.id == req.params.id
    );

    if (!objeto) {
        return res.status(404).json({
            ok: false,
            msg: 'Objeto no encontrado'
        });
    }

    res.json({
        ok: true,
        data: objeto
    });
};

module.exports = {
    getAll,
    getById
};