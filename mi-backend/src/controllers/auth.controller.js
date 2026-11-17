const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');
const db = require('../config/db.config');

// REGISTRO
// POST /api/auth/register
const register = async (req, res) => {

    const { nombre_usuario, correo, contraseña } = req.body;

    try {

        // 1. Verificar si el correo ya existe
        const usuarioExistente = await Usuario.findByEmail(correo);

        if (usuarioExistente) {
            return res.status(409).json({
                error: 'Correo ya registrado'
            });
        }

        // 2. Hashear la contraseña
        const hash = await bcrypt.hash(contraseña, 10);

        // 3. Buscar un rango para el nuevo usuario
        const [rangos] = await db.query(
            'SELECT id_rango FROM rango ORDER BY id_rango ASC LIMIT 1'
        );

        if (rangos.length === 0) {
            return res.status(500).json({
                error: 'No existen rangos registrados'
            });
        }

        const id_rango = rangos[0].id_rango;

        // 4. Crear usuario
        const usuario = await Usuario.create({
            nombre_usuario,
            correo,
            contraseña: hash,
            fecha_registrado: new Date(),
            id_rango,
            rating: 0
        });

        // 5. Generar token
        const token = jwt.sign(
            {
                id_usuario: usuario.id_usuario,
                correo: usuario.correo
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        // 6. Responder
        res.status(201).json({
            mensaje: 'Usuario registrado correctamente',
            token
        });

    } catch (error) {

        console.error('Error en register:', error);

        res.status(500).json({
            error: 'Error al registrar usuario'
        });
    }
};

// PERFIL DEL USUARIO AUTENTICADO
// GET /api/auth/profile
const getProfile = async (req, res) => {
    try {
        // Obtener el ID del usuario desde el token JWT
        const id_usuario = req.user.id_usuario;

        // Buscar los datos del usuario en MySQL
        const usuario = await Usuario.getById(id_usuario);

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }

        // Devolver solamente los datos necesarios
        res.json({
            ok: true,
            data: {
                id_usuario: usuario.id_usuario,
                nombre_usuario: usuario.nombre_usuario,
                correo: usuario.correo,
                fecha_registrado: usuario.fecha_registrado,
                id_rango: usuario.id_rango,
                rating: usuario.rating
            }
        });

    } catch (error) {
        console.error('Error al consultar perfil:', error);

        res.status(500).json({
            error: 'Error al consultar el perfil'
        });
    }
};

// ACTUALIZAR EL PERFIL PROPIO
// PUT /api/auth/profile
const updateProfile = async (req, res) => {
    try {
        const id_usuario = req.user.id_usuario;

        const { nombre_usuario, correo, contraseña } = req.body;

        // Validar los datos obligatorios
        if (!nombre_usuario || !correo) {
            return res.status(400).json({
                error: 'El nombre de usuario y el correo son obligatorios'
            });
        }

        // Buscar el usuario actual
        const usuario = await Usuario.getById(id_usuario);

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuario no encontrado'
            });
        }

        // Comprobar si el correo pertenece a otro usuario
        const usuarioExistente = await Usuario.findByEmail(correo);

        if (
            usuarioExistente &&
            usuarioExistente.id_usuario !== id_usuario
        ) {
            return res.status(409).json({
                error: 'Ese correo ya está registrado'
            });
        }

        // Si envía una nueva contraseña, cifrarla
        let contraseñaHash = null;

        if (contraseña && contraseña.trim() !== '') {
            contraseñaHash = await bcrypt.hash(contraseña, 10);
        }

        // Actualizar los datos permitidos
        await Usuario.updateProfile(id_usuario, {
            nombre_usuario,
            correo,
            contraseña: contraseñaHash
        });

        // Consultar nuevamente los datos actualizados
        const usuarioActualizado = await Usuario.getById(id_usuario);

        res.json({
            ok: true,
            mensaje: 'Perfil actualizado correctamente',
            data: {
                id_usuario: usuarioActualizado.id_usuario,
                nombre_usuario: usuarioActualizado.nombre_usuario,
                correo: usuarioActualizado.correo,
                fecha_registrado: usuarioActualizado.fecha_registrado,
                id_rango: usuarioActualizado.id_rango,
                rating: usuarioActualizado.rating
            }
        });

    } catch (error) {
        console.error('Error al actualizar perfil:', error);

        res.status(500).json({
            error: 'Error al actualizar el perfil'
        });
    }
};


// LOGIN
// POST /api/auth/login
const login = async (req, res) => {

    const { correo, contraseña } = req.body;

    try {

        // 1. Buscar usuario por correo
        const usuario = await Usuario.findByEmail(correo);

        if (!usuario) {
            return res.status(401).json({
                error: 'Credenciales inválidas'
            });
        }

        // 2. Comparar contraseña
        const valid = await bcrypt.compare(
            contraseña,
            usuario.contraseña
        );

        if (!valid) {
            return res.status(401).json({
                error: 'Credenciales inválidas'
            });
        }

        // 3. Generar token
        const token = jwt.sign(
            {
                id_usuario: usuario.id_usuario,
                correo: usuario.correo
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        // 4. Responder
        res.json({
            mensaje: 'Inicio de sesión correcto',
            token
        });

    } catch (error) {

        console.error('Error en login:', error);

        res.status(500).json({
            error: 'Error al iniciar sesión'
        });
    }
};


module.exports = {
    register,
    login,
    getProfile,
    updateProfile
};