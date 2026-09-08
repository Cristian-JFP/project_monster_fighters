const express = require('express');

const app = express();

app.use(express.json());

// Routers
const authRouter = require('./routers/auth.routers');
const usuariosRouter = require('./routers/usuarios.routers');
const rangosRouter = require('./routers/rangos.routers');
const criaturasRouter = require('./routers/criaturas.routers');
const tiposRouter = require('./routers/tipos.routers');
const movimientosRouter = require('./routers/movimientos.routers');
const objetosRouter = require('./routers/objetos.routers');
const equiposRouter = require('./routers/equipos.routers');
const salasRouter = require('./routers/salas.routers');
const batallasRouter = require('./routers/batallas.routers');
const rankingRouter = require('./routers/ranking.routers');
const adminRouter = require('./routers/admin.routers');

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/users', usuariosRouter);
app.use('/api/ranks', rangosRouter);
app.use('/api/creatures', criaturasRouter);
app.use('/api/types', tiposRouter);
app.use('/api/moves', movimientosRouter);
app.use('/api/items', objetosRouter);
app.use('/api/teams', equiposRouter);
app.use('/api/rooms', salasRouter);
app.use('/api/battles', batallasRouter);
app.use('/api/ranking', rankingRouter);
app.use('/api/admin', adminRouter);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API Monster Fighters funcionando'
    });
});

module.exports = app;