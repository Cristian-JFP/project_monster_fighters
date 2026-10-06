const express = require('express');

const app = express();

// Middleware para leer JSON
app.use(express.json());

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