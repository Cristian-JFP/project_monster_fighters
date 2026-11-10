require('dotenv').config();
const express = require('express');

// Rutas
const tipoRouter = require('./routes/tipo.routes');
const accion_batallaRouter = require('./routes/accion_batalla.routes');
const batallaRouter = require('./routes/batalla.routes');
const criatura_movimientoRouter = require('./routes/criatura_movimiento.routes');
const criaturaRouter = require('./routes/criatura.routes');
const equipo_criaturaRouter = require('./routes/equipo_criatura.routes');
const equipoRouter = require('./routes/equipo.routes');
const jugador_batallaRouter = require('./routes/jugador_batalla.routes');
const movimientoRouter = require('./routes/movimiento.routes');
const objetoRouter = require('./routes/objeto.routes');
const rangoRouter = require('./routes/rango.routes');
const sala_usuarioRouter = require('./routes/sala_usuario.routes');
const salaRouter = require('./routes/sala.routes');
const usuarioRouter = require('./routes/usuario.routes');
const authRoutes = require('./routes/auth.routes');

// Initialize express app
const app = express();

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Middleware para leer json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 
        'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tipos', tipoRouter);
app.use('/api/accion_batalla', accion_batallaRouter);
app.use('/api/batalla', batallaRouter);
app.use('/api/criatura_movimiento', criatura_movimientoRouter);
app.use('/api/criatura', criaturaRouter);
app.use('/api/equipo_criatura', equipo_criaturaRouter);
app.use('/api/equipo', equipoRouter);
app.use('/api/jugador_batalla', jugador_batallaRouter);
app.use('/api/movimiento', movimientoRouter);
app.use('/api/objeto', objetoRouter);
app.use('/api/rango', rangoRouter);
app.use('/api/sala_usuario', sala_usuarioRouter);
app.use('/api/sala', salaRouter);
app.use('/api/usuario', usuarioRouter);


// Ruta principal
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API Monster Fighters funcionando'
    });
});

// Handle undefined routes - FIXED: Using correct Express syntax
app.use((req, res) => {
    res.status(404).json({ 
        message: `No se puede encontrar ${req.originalUrl} en este servidor!` 
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Error interno del servidor'
    });
});

module.exports = app;