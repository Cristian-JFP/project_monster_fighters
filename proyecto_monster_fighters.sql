-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2026 a las 04:17:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_monster_fighters`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accion_batalla`
--

CREATE TABLE `accion_batalla` (
  `id_accion` int(11) NOT NULL,
  `id_batalla` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `turno` int(11) NOT NULL,
  `tipo_accion` varchar(30) NOT NULL,
  `id_criatura` int(11) NOT NULL,
  `id_movimiento` int(11) DEFAULT NULL,
  `id_objeto` int(11) DEFAULT NULL,
  `daño` int(11) DEFAULT 0,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `batalla`
--

CREATE TABLE `batalla` (
  `id_batalla` int(11) NOT NULL,
  `id_sala` int(11) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `fecha_inicio` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` datetime DEFAULT NULL,
  `modo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criatura`
--

CREATE TABLE `criatura` (
  `id_criatura` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `vida_base` int(11) NOT NULL,
  `velocidad` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `defensa_especial` int(11) NOT NULL,
  `ataque_especial` int(11) NOT NULL,
  `defensa_base` int(11) NOT NULL,
  `ataque_base` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criatura_movimiento`
--

CREATE TABLE `criatura_movimiento` (
  `id_criatura` int(11) NOT NULL,
  `id_movimiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id_equipo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo_criatura`
--

CREATE TABLE `equipo_criatura` (
  `id_equipo` int(11) NOT NULL,
  `id_criatura` int(11) NOT NULL,
  `posicion` int(11) NOT NULL,
  `id_objeto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador_batalla`
--

CREATE TABLE `jugador_batalla` (
  `id_batalla` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_equipo` int(11) NOT NULL,
  `posicion` int(11) NOT NULL,
  `resultado` varchar(30) DEFAULT NULL,
  `rating_anterior` int(11) DEFAULT NULL,
  `rating_nuevo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimiento`
--

CREATE TABLE `movimiento` (
  `id_movimiento` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `potencia` int(11) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objeto`
--

CREATE TABLE `objeto` (
  `id_objeto` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `tipo_objeto` varchar(50) NOT NULL,
  `valor_efecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rango`
--

CREATE TABLE `rango` (
  `id_rango` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rating_minimo` int(11) NOT NULL,
  `rating_maximo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala`
--

CREATE TABLE `sala` (
  `id_sala` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `id_creador` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala_usuario`
--

CREATE TABLE `sala_usuario` (
  `id_sala` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `rol` varchar(30) NOT NULL,
  `fecha_ingreso` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fecha_registrado` datetime NOT NULL DEFAULT current_timestamp(),
  `id_rango` int(11) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accion_batalla`
--
ALTER TABLE `accion_batalla`
  ADD PRIMARY KEY (`id_accion`),
  ADD KEY `fk_accion_batalla_batalla` (`id_batalla`),
  ADD KEY `fk_accion_batalla_usuario` (`id_usuario`),
  ADD KEY `fk_accion_batalla_criatura` (`id_criatura`),
  ADD KEY `fk_accion_batalla_movimiento` (`id_movimiento`),
  ADD KEY `fk_accion_batalla_objeto` (`id_objeto`);

--
-- Indices de la tabla `batalla`
--
ALTER TABLE `batalla`
  ADD PRIMARY KEY (`id_batalla`),
  ADD KEY `fk_batalla_sala` (`id_sala`);

--
-- Indices de la tabla `criatura`
--
ALTER TABLE `criatura`
  ADD PRIMARY KEY (`id_criatura`),
  ADD KEY `fk_criatura_tipo` (`id_tipo`);

--
-- Indices de la tabla `criatura_movimiento`
--
ALTER TABLE `criatura_movimiento`
  ADD PRIMARY KEY (`id_criatura`,`id_movimiento`),
  ADD KEY `fk_criatura_movimiento_movimiento` (`id_movimiento`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id_equipo`),
  ADD KEY `fk_equipo_usuario` (`id_usuario`);

--
-- Indices de la tabla `equipo_criatura`
--
ALTER TABLE `equipo_criatura`
  ADD PRIMARY KEY (`id_equipo`,`id_criatura`),
  ADD KEY `fk_equipo_criatura_criatura` (`id_criatura`),
  ADD KEY `fk_equipo_criatura_objeto` (`id_objeto`);

--
-- Indices de la tabla `jugador_batalla`
--
ALTER TABLE `jugador_batalla`
  ADD PRIMARY KEY (`id_batalla`,`id_usuario`),
  ADD KEY `fk_jugador_batalla_usuario` (`id_usuario`),
  ADD KEY `fk_jugador_batalla_equipo` (`id_equipo`);

--
-- Indices de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD PRIMARY KEY (`id_movimiento`),
  ADD KEY `fk_movimiento_tipo` (`id_tipo`);

--
-- Indices de la tabla `objeto`
--
ALTER TABLE `objeto`
  ADD PRIMARY KEY (`id_objeto`);

--
-- Indices de la tabla `rango`
--
ALTER TABLE `rango`
  ADD PRIMARY KEY (`id_rango`);

--
-- Indices de la tabla `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`id_sala`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `fk_sala_creador` (`id_creador`);

--
-- Indices de la tabla `sala_usuario`
--
ALTER TABLE `sala_usuario`
  ADD PRIMARY KEY (`id_sala`,`id_usuario`),
  ADD KEY `fk_sala_usuario_usuario` (`id_usuario`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `fk_usuario_rango` (`id_rango`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accion_batalla`
--
ALTER TABLE `accion_batalla`
  MODIFY `id_accion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `batalla`
--
ALTER TABLE `batalla`
  MODIFY `id_batalla` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `criatura`
--
ALTER TABLE `criatura`
  MODIFY `id_criatura` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id_equipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  MODIFY `id_movimiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `objeto`
--
ALTER TABLE `objeto`
  MODIFY `id_objeto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rango`
--
ALTER TABLE `rango`
  MODIFY `id_rango` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sala`
--
ALTER TABLE `sala`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo`
--
ALTER TABLE `tipo`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `accion_batalla`
--
ALTER TABLE `accion_batalla`
  ADD CONSTRAINT `fk_accion_batalla_batalla` FOREIGN KEY (`id_batalla`) REFERENCES `batalla` (`id_batalla`),
  ADD CONSTRAINT `fk_accion_batalla_criatura` FOREIGN KEY (`id_criatura`) REFERENCES `criatura` (`id_criatura`),
  ADD CONSTRAINT `fk_accion_batalla_movimiento` FOREIGN KEY (`id_movimiento`) REFERENCES `movimiento` (`id_movimiento`),
  ADD CONSTRAINT `fk_accion_batalla_objeto` FOREIGN KEY (`id_objeto`) REFERENCES `objeto` (`id_objeto`),
  ADD CONSTRAINT `fk_accion_batalla_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `batalla`
--
ALTER TABLE `batalla`
  ADD CONSTRAINT `fk_batalla_sala` FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id_sala`);

--
-- Filtros para la tabla `criatura`
--
ALTER TABLE `criatura`
  ADD CONSTRAINT `fk_criatura_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`);

--
-- Filtros para la tabla `criatura_movimiento`
--
ALTER TABLE `criatura_movimiento`
  ADD CONSTRAINT `fk_criatura_movimiento_criatura` FOREIGN KEY (`id_criatura`) REFERENCES `criatura` (`id_criatura`),
  ADD CONSTRAINT `fk_criatura_movimiento_movimiento` FOREIGN KEY (`id_movimiento`) REFERENCES `movimiento` (`id_movimiento`);

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `fk_equipo_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `equipo_criatura`
--
ALTER TABLE `equipo_criatura`
  ADD CONSTRAINT `fk_equipo_criatura_criatura` FOREIGN KEY (`id_criatura`) REFERENCES `criatura` (`id_criatura`),
  ADD CONSTRAINT `fk_equipo_criatura_equipo` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`),
  ADD CONSTRAINT `fk_equipo_criatura_objeto` FOREIGN KEY (`id_objeto`) REFERENCES `objeto` (`id_objeto`);

--
-- Filtros para la tabla `jugador_batalla`
--
ALTER TABLE `jugador_batalla`
  ADD CONSTRAINT `fk_jugador_batalla_batalla` FOREIGN KEY (`id_batalla`) REFERENCES `batalla` (`id_batalla`),
  ADD CONSTRAINT `fk_jugador_batalla_equipo` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`),
  ADD CONSTRAINT `fk_jugador_batalla_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD CONSTRAINT `fk_movimiento_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`);

--
-- Filtros para la tabla `sala`
--
ALTER TABLE `sala`
  ADD CONSTRAINT `fk_sala_creador` FOREIGN KEY (`id_creador`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `sala_usuario`
--
ALTER TABLE `sala_usuario`
  ADD CONSTRAINT `fk_sala_usuario_sala` FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id_sala`),
  ADD CONSTRAINT `fk_sala_usuario_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_rango` FOREIGN KEY (`id_rango`) REFERENCES `rango` (`id_rango`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
