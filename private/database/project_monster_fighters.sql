-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2026 a las 15:29:09
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
  `ataque_base` int(11) NOT NULL,
  `rareza` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `criatura`
--

INSERT INTO `criatura` (`id_criatura`, `nombre`, `descripcion`, `vida_base`, `velocidad`, `id_tipo`, `defensa_especial`, `ataque_especial`, `defensa_base`, `ataque_base`, `rareza`) VALUES
(37, 'Yolujach', 'Un monstruo que habita y ronda en los desiertos durante el crepúsculo.', 70, 105, 12, 75, 105, 65, 60, 'Común'),
(38, 'Pushana', 'Un monstruo de aspecto ancestral que resguarda los amuletos y tótems antiguos.', 90, 70, 1, 90, 50, 95, 85, 'Común'),
(39, 'Ayaja\'a', 'Veloz criatura felina con pelaje estático que acumula energía.', 65, 120, 15, 60, 65, 60, 110, 'Común'),
(40, 'Wale\'re', 'Inspirado en el mito de una araña tejedora Wayúu; crea complejas redes.', 70, 90, 8, 80, 70, 80, 90, 'Común'),
(41, 'Sira\'a', 'Ave majestuosa de plumaje azul celeste que controla plumas como cuchillas.', 75, 95, 7, 75, 100, 70, 65, 'Común'),
(42, 'Wunapu', 'Tronco viviente que protege territorios.', 110, 50, 4, 90, 45, 100, 85, 'Común'),
(43, 'Kasiwan', 'Bicho volador muy veloz cuyo aguijón brillante puede paralizar.', 60, 140, 13, 65, 55, 55, 105, 'Común'),
(44, 'Kashi\'ra', 'Criatura hada que nace en luna llena y causa sueño.', 85, 65, 9, 100, 105, 75, 50, 'Común'),
(45, 'Juya\'a', 'Criatura mística con apariencia de nube flotante de la que caen gotas.', 80, 75, 2, 85, 110, 70, 60, 'Común'),
(46, 'Kaika\'a', 'Lagarto que absorbe energía a través de sus crestas y escupe al atacar.', 75, 90, 3, 65, 80, 70, 100, 'Común'),
(47, 'Jorottor', 'Monstruo mineral cubierto de piedras que brilla al atacar.', 65, 55, 6, 85, 40, 120, 115, 'Común'),
(48, 'Sirumapi\'i', 'Criatura reptiliana de alas imponentes y garras poderosas que domina las corrientes altas del desierto.', 75, 90, 5, 70, 65, 75, 105, 'Común'),
(49, 'Juya\'kua', 'Reptil serpentino con plumas de colores que danza entre las nubes y atrae lluvias milagrosas.', 80, 70, 16, 85, 100, 75, 70, 'Común'),
(50, 'Wuinmarca\'a', 'Depredador acuático veloz, de cuerpo alargado y patrones atigrados, que acecha en fondos lodosos.', 80, 85, 2, 75, 80, 70, 95, 'Común'),
(51, 'Mmachu\'a', 'Coloso humanoide de rocas y tierra compacta que puede permanecer inmóvil durante semanas simulando un montículo.', 105, 40, 5, 80, 30, 110, 115, 'Común'),
(52, 'Yolu\'jolo', 'Pequeño primate errático de orejas puntiagudas y mirada astuta que vive en las copas de los árboles.', 65, 125, 10, 60, 85, 60, 85, 'Común'),
(53, 'Juyasiruma', 'Soberano del firmamento eléctrico; colosal dragón de nubes y relámpagos que desciende en los equinoccios para purificar la tierra con tormentas.', 110, 95, 15, 110, 150, 100, 115, 'Legendario'),
(54, 'Mma\'palaaja', 'Guardián de las profundidades marinas y abismos costeros; deidad de caparazón coralino.', 140, 70, 2, 130, 110, 130, 100, 'Legendario'),
(55, 'Ka\'iwaratu', 'Titán de fuego solar y día eterno; fénix místico cubierto de llamas doradas.', 100, 120, 3, 90, 130, 90, 150, 'Legendario'),
(56, 'Yolujapu\'i', 'Señor de sombras y pesadillas eternas; silueta espectral del desierto que induce un sueño profundo.', 90, 140, 10, 95, 155, 90, 110, 'Legendario'),
(57, 'Wunaliatu', 'Espíritu guardián del tiempo y la flora ancestral; pequeño ser vegetal alado que habita oasis sagrados ocultos.', 115, 110, 4, 115, 125, 115, 100, 'Legendario'),
(58, 'Atuja\'pu', 'Ser mítico del conocimiento, con los ojos siempre cerrados, que flota sobre manantiales ocultos y concede sabiduría.', 100, 110, 11, 135, 145, 120, 70, 'Legendario'),
(59, 'Kacha\'ira', 'Criatura alegre y volátil cuyo cuerpo cambia de tono según su energía; representa las emociones del corazón.', 105, 145, 9, 105, 115, 100, 110, 'Legendario'),
(60, 'Atsula\'a', 'Espíritu guardián valiente de mirada inquebrantable y velocidad extrema que inspira determinación, coraje y fortaleza mental.', 90, 150, 1, 85, 110, 95, 150, 'Legendario'),
(61, 'Palaajiruma', 'Rey hada de las corrientes marinas; pequeño ser líquido azul nacido en templos en ruinas cerca del mar.', 100, 100, 2, 100, 100, 100, 80, 'Singular'),
(62, 'Wale\'kawa', 'Espíritu de los deseos con forma de estrella tejida que aparece durante una semana cada mil años cuando un cometa cruza el cielo.', 100, 80, 9, 100, 100, 100, 100, 'Singular'),
(63, 'Oloju\'wi', 'Criatura de humo gris que habita en las sombras de seres poderosos y copia sus movimientos y sentimientos para aprender técnicas.', 80, 125, 12, 80, 90, 80, 125, 'Singular'),
(64, 'Kashi\'pala', 'Criatura radiante formada por cristales puros únicos que flota, purifica el aire y disipa la energía negativa.', 85, 70, 9, 130, 110, 120, 65, 'Singular'),
(65, 'Yoruja\'chi', 'Goblin místico metálico que manipula portales invisibles y teletransporta objetos y alimentos para realizar travesuras.', 75, 135, 11, 75, 125, 75, 95, 'Singular'),
(66, 'Maralu\'ko', 'Imponente reptil bípedo acorazado que habita humedales, manglares y montañas. Posee piel de camuflaje y cava rápidamente para cazar.', 100, 100, 5, 100, 80, 100, 120, 'Pseudolegendario'),
(67, 'Kasi\'wainru', 'Titán prehistórico protegido por placas minerales tan duras como el diamante. Sus placas dorsales almacenan energía térmica y su rugido puede sacudir la tierra.', 100, 100, 6, 100, 80, 100, 120, 'Pseudolegendario'),
(68, 'Pushana\'ma', 'Espíritu guardián que vive dentro de un antiguo objeto ancestral enterrado en ruinas y drena la energía vital de los intrusos.', 115, 50, 12, 110, 45, 110, 95, 'Raro'),
(69, 'Ayajasi\'ru', 'Felino ártico translúcido formado por cristales de hielo perpetuo que genera tormentas estáticas y habita en altas montañas congeladas.', 75, 100, 15, 75, 125, 70, 80, 'Raro'),
(70, 'Amuche\'chi', 'Pequeña muñeca de arcilla mágica viviente decorada con piedras preciosas de colores. No puede encontrarse de forma salvaje.', 85, 50, 9, 115, 95, 115, 65, 'Raro'),
(71, 'Moutsu\'sa', 'Planta carnívora flotante de colores brillantes que emite polen alucinógeno capaz de alterar los sentidos y controlar la mente.', 80, 85, 4, 100, 110, 75, 75, 'Raro'),
(72, 'Katana\'si', 'Armadura flotante de metal oscuro y maleable cuyos miembros flotan por separado y cortan el aire como cuchillas.', 70, 95, 14, 75, 50, 105, 130, 'Raro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criatura_movimiento`
--

CREATE TABLE `criatura_movimiento` (
  `id_criatura` int(11) NOT NULL,
  `id_movimiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `criatura_movimiento`
--

INSERT INTO `criatura_movimiento` (`id_criatura`, `id_movimiento`) VALUES
(38, 1),
(38, 2),
(38, 3),
(38, 4),
(39, 57),
(39, 58),
(39, 59),
(39, 60),
(44, 33),
(44, 34),
(44, 35),
(44, 36);

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

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id_equipo`, `nombre`, `fecha_creacion`, `id_usuario`) VALUES
(1, 'Equipo Guardianes', '2026-09-27 17:51:06', 1);

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

--
-- Volcado de datos para la tabla `equipo_criatura`
--

INSERT INTO `equipo_criatura` (`id_equipo`, `id_criatura`, `posicion`, `id_objeto`) VALUES
(1, 38, 1, 1),
(1, 39, 2, 4),
(1, 44, 3, 5);

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

--
-- Volcado de datos para la tabla `movimiento`
--

INSERT INTO `movimiento` (`id_movimiento`, `nombre`, `descripcion`, `potencia`, `categoria`, `id_tipo`) VALUES
(1, 'Garra Rápida', 'Ataque físico veloz que golpea al rival con las garras.', 40, 'Físico', 1),
(2, 'Rugido Feroz', 'Rugido intimidante que altera las condiciones del combate.', 0, 'Estado', 1),
(3, 'Embestida Salvaje', 'Ataque físico poderoso realizado mediante una embestida brutal.', 85, 'Físico', 1),
(4, 'Eco Divino', 'Ataque especial que libera una poderosa onda de energía.', 60, 'Especial', 1),
(5, 'Chorro Súbito', 'Lanza un potente chorro de agua contra el rival.', 40, 'Especial', 2),
(6, 'Oleada Fuerza', 'Una gran oleada de agua golpea al enemigo con fuerza.', 90, 'Especial', 2),
(7, 'Cascada Cruel', 'Ataque físico que golpea al enemigo con una poderosa cascada.', 80, 'Físico', 2),
(8, 'Marea Sana', 'Manipula el agua para recuperar o mejorar las condiciones de combate.', 0, 'Estado', 2),
(9, 'Chispa Voraz', 'Lanza una descarga de fuego que quema al enemigo.', 40, 'Especial', 3),
(10, 'Puño Calcinante', 'Ataque físico que envuelve el puño en llamas.', 75, 'Físico', 3),
(11, 'Llamarada Solar', 'Concentra el calor solar y libera una enorme llamarada.', 110, 'Especial', 3),
(12, 'Manto Ígneo', 'Envuelve a la criatura en llamas para alterar sus condiciones de combate.', 0, 'Estado', 3),
(13, 'Liana Látigo', 'Golpea al enemigo utilizando una resistente liana.', 45, 'Físico', 4),
(14, 'Drenaje Verde', 'Absorbe energía del rival mediante fuerzas naturales.', 75, 'Especial', 4),
(15, 'Polen Somnífero', 'Libera polen que puede provocar sueño en el enemigo.', 0, 'Estado', 4),
(16, 'Tormenta de Hojas', 'Desata una tormenta de hojas afiladas sobre el rival.', 130, 'Especial', 4),
(17, 'Disparo de Lodo', 'Lanza una masa de lodo contra el enemigo.', 55, 'Especial', 5),
(18, 'Fisura Terrestre', 'Abre una fisura en el suelo para golpear al rival.', 80, 'Físico', 5),
(19, 'Temblor Sísmico', 'Provoca un fuerte movimiento de tierra que daña al enemigo.', 100, 'Físico', 5),
(20, 'Arena Protectora', 'Utiliza arena para mejorar las condiciones defensivas.', 0, 'Estado', 5),
(21, 'Lanzarrocas', 'Lanza fragmentos de roca contra el rival.', 50, 'Físico', 6),
(22, 'Avalancha Maciza', 'Hace caer una gran cantidad de rocas sobre el enemigo.', 75, 'Físico', 6),
(23, 'Joya Ancestral', 'Libera energía especial almacenada en una antigua piedra.', 80, 'Especial', 6),
(24, 'Pulimento Óseo', 'Endurece el cuerpo para mejorar sus condiciones defensivas.', 0, 'Estado', 6),
(25, 'Tornado Veloz', 'Genera un tornado rápido que golpea al enemigo.', 60, 'Especial', 7),
(26, 'Pico Picado', 'Ataque físico realizado mediante un rápido descenso desde el aire.', 80, 'Físico', 7),
(27, 'Vendaval Cruel', 'Desata una poderosa ráfaga de viento contra el rival.', 110, 'Especial', 7),
(28, 'Vuelo Libre', 'Se eleva y realiza un ataque físico desde las alturas.', 90, 'Físico', 7),
(29, 'Picadura Venenosa', 'Ataca con una picadura que puede transmitir toxinas.', 60, 'Físico', 8),
(30, 'Zumbido Plaga', 'Genera una poderosa vibración que golpea al enemigo.', 90, 'Especial', 8),
(31, 'Red Pegajosa', 'Lanza una red que dificulta el movimiento del enemigo.', 0, 'Estado', 8),
(32, 'Tijera X', 'Realiza un corte cruzado con gran precisión.', 80, 'Físico', 8),
(33, 'Viento de Hadas', 'Libera una corriente de energía mágica contra el enemigo.', 40, 'Especial', 9),
(34, 'Fuerza Lunar', 'Concentra energía de la luna para atacar al rival.', 95, 'Especial', 9),
(35, 'Carantoña Mística', 'Ataque físico acompañado de energía mágica.', 90, 'Físico', 9),
(36, 'Luz de Alivio', 'Utiliza energía luminosa para mejorar las condiciones de la criatura.', 0, 'Estado', 9),
(37, 'Mordisco Sucio', 'Mordisco físico ejecutado mediante una táctica traicionera.', 60, 'Físico', 10),
(38, 'Pulso Umbrío', 'Libera una poderosa onda de energía oscura.', 80, 'Especial', 10),
(39, 'Maquinación Traicionera', 'Utiliza tácticas oscuras para mejorar las condiciones de combate.', 0, 'Estado', 10),
(40, 'Desarme Tramposo', 'Golpea al rival y puede interferir con el objeto que lleva equipado.', 65, 'Físico', 10),
(41, 'Rayo Mental', 'Dispara una ráfaga de energía psíquica directamente hacia el rival.', 50, 'Especial', 11),
(42, 'Psicocorte', 'Realiza un corte físico utilizando energía mental.', 70, 'Físico', 11),
(43, 'Choque Psíquico', 'Golpea al enemigo con una fuerte descarga psíquica.', 80, 'Especial', 11),
(44, 'Amnesia Total', 'Altera temporalmente las capacidades defensivas mediante poderes mentales.', 0, 'Estado', 11),
(45, 'Puño Sombra', 'Golpea al rival con un puño formado por energía espectral.', 60, 'Físico', 12),
(46, 'Bola Siniestra', 'Lanza una esfera de energía oscura contra el enemigo.', 80, 'Especial', 12),
(47, 'Fuego Sagrado de Tumba', 'Invoca energía del inframundo para alterar el campo de batalla.', 0, 'Estado', 12),
(48, 'Garra del Inframundo', 'Ataca con garras impregnadas de energía espectral.', 70, 'Físico', 12),
(49, 'Ácido Corrosivo', 'Lanza ácido que deteriora al enemigo.', 40, 'Especial', 13),
(50, 'Puya Tóxica', 'Ataque físico con una punta cargada de toxinas.', 80, 'Físico', 13),
(51, 'Onda de Toxinas', 'Libera una onda de sustancias tóxicas.', 95, 'Especial', 13),
(52, 'Gas Nocivo', 'Expulsa un gas tóxico que altera el estado del rival.', 0, 'Estado', 13),
(53, 'Garra de Metal', 'Ataca al enemigo con garras endurecidas como metal.', 50, 'Físico', 14),
(54, 'Foco Resplandor', 'Concentra energía metálica y la libera como un poderoso ataque.', 80, 'Especial', 14),
(55, 'Cuerpo de Hierro', 'Endurece el cuerpo metálico para mejorar sus defensas.', 0, 'Estado', 14),
(56, 'Cabeza de Acero', 'Golpea al enemigo utilizando la cabeza cubierta de acero.', 80, 'Físico', 14),
(57, 'Impactrueno', 'Lanza una descarga eléctrica contra el rival.', 40, 'Especial', 15),
(58, 'Puño Trueno', 'Golpea físicamente al enemigo con un puño cargado de electricidad.', 75, 'Físico', 15),
(59, 'Rayo Voltio', 'Libera una poderosa descarga eléctrica contra el enemigo.', 90, 'Especial', 15),
(60, 'Onda Trueno', 'Genera una descarga que puede paralizar al rival.', 0, 'Estado', 15),
(61, 'Furia Divina', 'Libera una poderosa energía física proveniente de las antiguas deidades.', 120, 'Físico', 16),
(62, 'Pulso de Deidad', 'Concentra energía mística divina y la lanza contra el rival.', 85, 'Especial', 16),
(63, 'Danza del Dios', 'Realiza una danza mística que altera las condiciones de combate.', 0, 'Estado', 16),
(64, 'Carga Sagrada', 'Realiza una poderosa carga física rodeada de energía divina.', 85, 'Físico', 16);

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

--
-- Volcado de datos para la tabla `objeto`
--

INSERT INTO `objeto` (`id_objeto`, `nombre`, `descripcion`, `tipo_objeto`, `valor_efecto`) VALUES
(1, 'Amuleto de Mma', 'Aumenta la defensa física de la criatura en un 15%.', 'Equipable', 15),
(2, 'Capa de Siruma', 'Aumenta la evasión de la criatura.', 'Equipable', 0),
(3, 'Brazalete de Ka\'i', 'Aumenta en un 10% el daño de los ataques físicos.', 'Equipable', 10),
(4, 'Botas de Viento', 'Aumenta la velocidad de la criatura en un 20%.', 'Equipable', 20),
(5, 'Corona de Cristal', 'Aumenta el ataque especial de la criatura en un 15%.', 'Equipable', 15),
(6, 'Manto del Desierto', 'Evita que la criatura sufra estados alterados.', 'Equipable', 0),
(7, 'Caparazón de Coral', 'Aumenta considerablemente la defensa especial de la criatura.', 'Equipable', 0),
(8, 'Garra de Kasiwain', 'Aumenta la probabilidad de realizar golpes críticos con ataques físicos.', 'Equipable', 0),
(9, 'Colgante de Lapü', 'Recupera una pequeña cantidad de puntos de vida al final de cada turno.', 'Equipable', 0),
(10, 'Lente de Precisión', 'Aumenta la precisión de los ataques en un 20%.', 'Equipable', 20),
(11, 'Escudo Tòtem', 'Reduce a la mitad el daño recibido del primer ataque.', 'Equipable', 50),
(12, 'Cinturón de Roca', 'Evita que la criatura sea derrotada de un solo golpe cuando tiene la vida completa.', 'Equipable', 0),
(13, 'Pluma de Juya', 'Aumenta el poder de los ataques relacionados con el clima y los elementos naturales.', 'Equipable', 0),
(14, 'Anillo del Sabio', 'Reduce el consumo de energía de los ataques especiales.', 'Equipable', 0),
(15, 'Espinas de Cactus', 'Devuelve al atacante un 12% del daño físico recibido.', 'Equipable', 12),
(16, 'Agua de Oasis', 'Recupera 30 puntos de vida.', 'Consumible', 30),
(17, 'Esencia de Moutsü', 'Recupera 80 puntos de vida.', 'Consumible', 80),
(18, 'Raíz Sagrada', 'Restaura completamente los puntos de vida.', 'Consumible', 100),
(19, 'Néctar Floral', 'Restaura la energía del movimiento seleccionado.', 'Consumible', 0),
(20, 'Ungüento de Barro', 'Cura los estados de Paralización o Quemadura.', 'Consumible', 0),
(21, 'Antídoto del Pantano', 'Cura el estado de Envenenamiento.', 'Consumible', 0),
(22, 'Polvo de Estrellas', 'Despierta a una criatura que se encuentre dormida.', 'Consumible', 0),
(23, 'Elíxir del Coraje', 'Aumenta temporalmente el ataque físico de la criatura.', 'Consumible', 0),
(24, 'Tónico Espiritual', 'Revive a una criatura derrotada con la mitad de sus puntos de vida máximos.', 'Consumible', 50),
(25, 'Resina de Palma', 'Aumenta temporalmente la defensa física de la criatura.', 'Consumible', 0);

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

--
-- Volcado de datos para la tabla `rango`
--

INSERT INTO `rango` (`id_rango`, `nombre`, `rating_minimo`, `rating_maximo`) VALUES
(1, 'Bronce', 0, 999),
(2, 'Acero', 1000, 1999),
(3, 'Plata', 2000, 2999),
(4, 'Oro', 3000, 3999),
(5, 'Platino', 4000, 4999),
(6, 'Diamante', 5000, 5999),
(7, 'Maestro', 6000, 7000);

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

--
-- Volcado de datos para la tabla `sala`
--

INSERT INTO `sala` (`id_sala`, `nombre`, `codigo`, `estado`, `id_creador`, `fecha_creacion`) VALUES
(1, 'Sala de Prueba', 'MF001', 'ESPERANDO', 1, '2026-09-27 17:53:16');

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

--
-- Volcado de datos para la tabla `sala_usuario`
--

INSERT INTO `sala_usuario` (`id_sala`, `id_usuario`, `rol`, `fecha_ingreso`) VALUES
(1, 1, 'CREADOR', '2026-09-27 17:53:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`id_tipo`, `nombre`, `descripcion`) VALUES
(1, 'Beastmancer', 'Domina el instinto salvaje, la fuerza bruta y los ataques físicos directos.'),
(2, 'Watermancer', 'Controla las corrientes, mareas y la fluidez del agua para desgastar o curar.'),
(3, 'Firemancer', 'Utiliza el poder destructivo de las llamas y el calor extremo para quemar.'),
(4, 'Forestmancer', 'Manipula la vegetación, las esporas y drena la energía vital de la naturaleza.'),
(5, 'Earthmancer', 'Altera el suelo, crea temblores y utiliza el lodo para ralentizar al rival.'),
(6, 'Rockmancer', 'Posee defensas sólidas como el diamante y ataca lanzando fragmentos de piedra.'),
(7, 'Windmancer', 'Domina los cielos, las ráfagas de aire y ataca con velocidad desde las alturas.'),
(8, 'Freakmancer', 'Utiliza las toxinas, picaduras y redes pegajosas del mundo de los insectos.'),
(9, 'Lightmancer', 'Canaliza la magia estelar, la energía lunar y la purificación espiritual.'),
(10, 'Darkmancer', 'Emplea tácticas sucias, ataques desde las sombras y planes traicioneros.'),
(11, 'Mindmancer', 'Usa la telequinesis, el control mental y ráfagas psíquicas directas al cerebro.'),
(12, 'Necromancer', 'Invoca fuerzas espectrales del inframundo y ataques que ignoran la evasión.'),
(13, 'Poisonmancer', 'Desata gases nocivos, ácidos corrosivos y toxinas que desgastan al oponente.'),
(14, 'Metalmancer', 'Cuenta con un blindaje metálico impenetrable y cortes afilados como cuchillas.'),
(15, 'Lightningmancer', 'Controla la alta tensión, las tormentas eléctricas y paraliza con relámpagos.'),
(16, 'Godmancer', 'Desata el poder místico de las deidades antiguas con ráfagas devastadoras.');

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
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_usuario`, `correo`, `contraseña`, `fecha_registrado`, `id_rango`, `rating`) VALUES
(1, 'Cristian', 'cristian@monsterfighters.com', '123456', '2026-09-27 17:49:51', 1, 500);

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
  MODIFY `id_criatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id_equipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  MODIFY `id_movimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `objeto`
--
ALTER TABLE `objeto`
  MODIFY `id_objeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `rango`
--
ALTER TABLE `rango`
  MODIFY `id_rango` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `sala`
--
ALTER TABLE `sala`
  MODIFY `id_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo`
--
ALTER TABLE `tipo`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
