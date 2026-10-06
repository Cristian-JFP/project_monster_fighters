// Middleware personalizado global: registra fecha, método y URL de cada petición
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // pasar al siguiente middleware
};

module.exports = logger;