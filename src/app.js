const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const logger = require("./middlewares/logger.middleware");
const { noEncontrado, manejarErrores } = require("./middlewares/error.middleware");

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(logger);

const autenticacionRoutes = require("./routes/autenticacion.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const criaturaRoutes = require("./routes/criatura.routes");
const movimientoRoutes = require("./routes/movimiento.routes");
const tipoRoutes = require("./routes/tipo.routes");
const objetoRoutes = require("./routes/objeto.routes");
const equipoRoutes = require("./routes/equipo.routes");
const salaRoutes = require("./routes/sala.routes");

app.use("/api/auth", autenticacionRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/criaturas", criaturaRoutes);
app.use("/api/movimientos", movimientoRoutes);
app.use("/api/tipos", tipoRoutes);
app.use("/api/objetos", objetoRoutes);
app.use("/api/equipos", equipoRoutes);
app.use("/api/salas", salaRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API Monster Fighters funcionando"
    });
});

// Siempre al final
app.use(noEncontrado);
app.use(manejarErrores);

module.exports = app;