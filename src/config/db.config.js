const mysql = require("mysql2/promise");
require("dotenv").config();

// createPool: reutiliza conexiones automáticamente
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true
});

// Verificar conexión al iniciar
pool.getConnection()
    .then(connection => {
        console.log("MySQL conectado correctamente");
        connection.release(); // devolver al pool
    })
    .catch(error => {
        console.error("Error al conectar con MySQL:", error.message);
        process.exit(1); // detener app si no hay DB
    });

module.exports = pool;