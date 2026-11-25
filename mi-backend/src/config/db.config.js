
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const usarSSL = process.env.DB_SSL === "true";

const configuracion = {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "proyecto_monster_fighters",
    connectionLimit: 10,
    waitForConnections: true
};

// Activar SSL cuando se utiliza Aiven
if (usarSSL) {
    const rutaCertificado = process.env.DB_SSL_CA_PATH
        ? process.env.DB_SSL_CA_PATH
        : path.resolve(__dirname, "../../certs/aiven-ca.pem");

    configuracion.ssl = {
        ca: fs.readFileSync(rutaCertificado, "utf8")
    };
}

const pool = mysql.createPool(configuracion);

// Verificar conexión al iniciar
pool.getConnection()
    .then(connection => {
        console.log("MySQL conectado correctamente");
        connection.release();
    })
    .catch(error => {
        console.error("Error al conectar con MySQL:", error.message);
        process.exit(1);
    });

module.exports = pool;

