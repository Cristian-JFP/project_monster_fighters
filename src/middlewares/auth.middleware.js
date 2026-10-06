const jwt = require('jsonwebtoken');

// Verifica el token JWT enviado en el header Authorization: Bearer <token>
const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Token requerido'
    });
  }

  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET); // adjuntar datos al request
    next(); // token válido, continuar
  } catch (error) {
    return res.status(403).json({
      ok: false,
      msg: 'Token inválido o expirado'
    });
  }
};

module.exports = { verificarToken };