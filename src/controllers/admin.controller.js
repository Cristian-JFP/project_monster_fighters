const getUsers = (req, res) => {
    res.json({
        ok: true,
        data: [],
        msg: 'Lista de usuarios para administración'
    });
};

const getUserById = (req, res) => {
    res.json({
        ok: true,
        data: {
            id: req.params.id
        }
    });
};

const updateUserStatus = (req, res) => {
    res.json({
        ok: true,
        msg: 'Estado del usuario actualizado',
        data: req.body
    });
};

const createCreature = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Criatura creada',
        data: req.body
    });
};

const updateCreature = (req, res) => {
    res.json({
        ok: true,
        msg: `Criatura ${req.params.id} actualizada`,
        data: req.body
    });
};

const deleteCreature = (req, res) => {
    res.json({
        ok: true,
        msg: `Criatura ${req.params.id} eliminada`
    });
};

const createMove = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Movimiento creado',
        data: req.body
    });
};

const updateMove = (req, res) => {
    res.json({
        ok: true,
        msg: `Movimiento ${req.params.id} actualizado`,
        data: req.body
    });
};

const deleteMove = (req, res) => {
    res.json({
        ok: true,
        msg: `Movimiento ${req.params.id} eliminado`
    });
};

const createItem = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Objeto creado',
        data: req.body
    });
};

const updateItem = (req, res) => {
    res.json({
        ok: true,
        msg: `Objeto ${req.params.id} actualizado`,
        data: req.body
    });
};

const deleteItem = (req, res) => {
    res.json({
        ok: true,
        msg: `Objeto ${req.params.id} eliminado`
    });
};

module.exports = {
    getUsers,
    getUserById,
    updateUserStatus,
    createCreature,
    updateCreature,
    deleteCreature,
    createMove,
    updateMove,
    deleteMove,
    createItem,
    updateItem,
    deleteItem
};