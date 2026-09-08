const register = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Usuario registrado',
        data: req.body
    });
};

const login = (req, res) => {
    res.json({
        ok: true,
        msg: 'Inicio de sesión correcto',
        token: 'token-ejemplo'
    });
};

const me = (req, res) => {
    res.json({
        ok: true,
        data: {
            id: 1,
            nombre_usuario: 'Cristian',
            rol: 'JUGADOR'
        }
    });
};

const logout = (req, res) => {
    res.json({
        ok: true,
        msg: 'Sesión cerrada'
    });
};

module.exports = {
    register,
    login,
    me,
    logout
};