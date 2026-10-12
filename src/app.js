const express = require('express');
const app = express();
app.use(express.json());

// Middleware para leer json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);





// Rutas
const tipoRouter = require('./routes/tipo.routes');

app.use('/api/tipos', tipoRouter);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API Monster Fighters funcionando'
    });
});

module.exports = app;