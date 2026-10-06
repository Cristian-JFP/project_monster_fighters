// 404: ninguna ruta coincidió (va después de todas las rutas)
const noEncontrado = (req, res) => {
  res.status(404).json({
    ok: false,
    msg: 'Ruta no encontrada'
  });
};

// Manejador global de errores (siempre al final, con 4 parámetros)
const manejarErrores = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    ok: false,
    msg: 'Error interno del servidor'
  });
};

module.exports = { noEncontrado, manejarErrores };