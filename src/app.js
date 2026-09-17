const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const usuarioRoutes = require("./routes/usuario.routes");
const criaturaRoutes = require("./routes/criatura.routes");
const movimientoRoutes = require("./routes/movimiento.routes");
const tipoRoutes = require("./routes/tipo.routes");
const objetoRoutes = require("./routes/objeto.routes");
const equipoRoutes = require("./routes/equipo.routes");
const salaRoutes = require("./routes/sala.routes");

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

module.exports = app;