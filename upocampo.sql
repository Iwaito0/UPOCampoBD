-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2020 a las 19:40:35
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `upocampo`
--

DROP DATABASE IF EXISTS `upocampo`;
CREATE DATABASE upocampo;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(5) NOT NULL,
  `nombre` varchar(140) NOT NULL,
  `precio` float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
(1, 'Piragüismo', 45.20),
(2, 'Alpinismo', 55.50),
(3, 'Tenis', 7.50),
(4, 'Futbol', 4.20),
(5, 'Buceo', 12.50),
(6, 'Buceo con bombona', 45.20),
(7, 'Tiro con arco', 19.95),
(8, 'Baloncesto', 45.20),
(9, 'Exploracion de cuevas', 50.00),
(10, 'Juegos infantiles', 2.50),
(11, 'Bingo', 0.00),
(12, 'Rafting', 65.50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `dni` varchar(15) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `telefono` bigint(12) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `email` varchar(40) NOT NULL,
  `numero_tarjeta` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('25518526A', 'Sofia', 34954612542, 'Plaza roma s/n 13 2C', 'sofialadivina@gmail.com', 4215512442155124),
('25584568J', 'Sara', 34954826375, 'Plaza de parma 19 4A', 'sara089@gmail.com', 4444555566664444),
('28569535T', 'Paula', 34954685933, 'Avenida alegria n3', 'paula1999@hotmail.es', 4758586914252536),
('30452198R', 'Pedro', 34954778485, 'Calle paraiso n5', 'pedroelcrak@gmail.com', 4152526385967485),
('44855685D', 'Rocio', 34954121512, 'Av europa 5 3D', 'rociobestfriends@gmail.com', 4421553266325548),
('51483972H', 'Raul', 34954332654, 'Av montequinto n5', 'raulinformatico@gmail.com', 4478445844214456),
('54664665A', 'Manuel', 34654887722, 'Av portimao n 12', 'manoloeldelbombo@hotmail.es', 4946464346494643),
('68546545G', 'Amparo', 34632152354, 'Calle la esperanza n 9', 'amparo1993@gmail.com', 4174528563962052),
('85216328G', 'Javier', 34692548752, 'Plaza la nueva n5', 'xavierfotografo@gmail.com', 4210973184265579),
('98866866S', 'Lucia', 34653201325, 'Plaza de parma 21 3B', 'luciabogados@gmail.com', 4107520863097931);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id` int(4) NOT NULL,
  `tipo` varchar(12) NOT NULL,
  `precio` float(5,2) NOT NULL,
  `ocupacion_max` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
(0, 'simple', 28.90, 2),
(1, 'doble', 40.50, 4),
(2, 'simple', 28.90, 2),
(3, 'doble', 40.50, 4),
(4, 'simple', 28.90, 2),
(5, 'doble', 40.50, 4),
(6, 'doble', 40.50, 4),
(7, 'doble', 40.50, 4),
(8, 'simple', 28.90, 2),
(9, 'simple', 28.90, 2),
(10, 'simple', 28.90, 2),
(11, 'simple', 28.90, 2),
(12, 'doble', 40.50, 4),
(13, 'triple', 75.95, 6),
(14, 'triple', 75.95, 6),
(15, 'triple', 75.95, 6),
(16, 'triple', 75.95, 6),
(17, 'triple', 75.95, 6),
(18, 'triple', 75.95, 6),
(19, 'triple', 75.95, 6),
(20, 'triple', 75.95, 6),
(21, 'triple', 75.95, 6),
(22, 'triple', 75.95, 6),
(23, 'triple', 75.95, 6),
(24, 'triple', 75.95, 6),
(25, 'triple', 75.95, 6),
(26, 'triple', 75.95, 6),
(27, 'triple', 75.95, 6),
(28, 'triple', 75.95, 6),
(29, 'triple', 75.95, 6),
(30, 'premium', 149.99, 2),
(31, 'premium', 149.99, 2),
(32, 'premium', 149.99, 2),
(33, 'premium', 149.99, 2),
(34, 'premium', 149.99, 2),
(35, 'premium', 149.99, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parking`
--

CREATE TABLE `parking` (
  `id` int(10) NOT NULL,
  `precio` float(5,2) NOT NULL,
  `ancho_especial` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `parking`
--

INSERT INTO `parking` (`id`, `precio`, `ancho_especial`) VALUES
(1, 25.00, 0),
(2, 25.00, 1),
(3, 25.00, 0),
(4, 25.00, 1),
(5, 25.00, 0),
(6, 25.00, 1),
(7, 25.00, 0),
(8, 25.00, 1),
(9, 25.00, 0),
(10, 25.00, 1),
(11, 25.00, 0),
(12, 25.00, 1),
(13, 25.00, 0),
(14, 25.00, 1),
(15, 25.00, 0),
(16, 25.00, 1),
(17, 25.00, 0),
(18, 25.00, 1),
(19, 25.00, 0),
(20, 25.00, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `CIF` varchar(10) NOT NULL,
  `nombre` text NOT NULL,
  `telefono` bigint(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('25852563D', 'Victor', 34758962534),
('45826584T', 'Pepe', 34652895123),
('52928526D', 'Rodrigo', 34685127963),
('58102605U', 'Paula', 34658215985),
('59354285G', 'Laura', 34658952574);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regimen_alimentario`
--

CREATE TABLE `regimen_alimentario` (
  `id` varchar(20) NOT NULL,
  `precio_persona` float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `regimen_alimentario`
--

INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Media Pensión', 22.50),
('Nada', 0.00),
('Pensión Completa', 33.75),
('Solo Desayuno', 8.99),
('Todo Incluido', 60.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id` varchar(10) NOT NULL,
  `numero_personas` int(10) NOT NULL,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `precio` float(5,2) NOT NULL,
  `numero_habitacion` int(4) NOT NULL,
  `nif_cliente` varchar(15) NOT NULL,
  `numero_parking` varchar(5) NOT NULL,
  `actividades` varchar(180) NOT NULL,
  `regimen_alimentario` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`, `actividades`, `regimen_alimentario`) VALUES
('1111', 2, '2020-02-12', '2020-02-16', 45.45, 12, '51483972H', '7', 'Exploracion de cuevas, Bingo', 'Media Pensión'),
('4321', 1, '2020-02-10', '2020-02-14', 90.45, 6, '30452198R', '4', 'Tenis', 'Todo Incluido'),
('5234', 1, '2020-02-01', '2020-02-03', 77.30, 8, '85216328G', 'NO', 'Alpinismo', 'Solo Desayuno'),
('5555', 2, '2020-03-03', '2020-03-06', 65.20, 15, '44855685D', '8', 'Buceo con bombona, Baloncesto', 'Media Pensión'),
('5656', 1, '2020-01-30', '2020-02-01', 12.80, 4, '25584568J', 'NO', 'Bingo', 'Nada'),
('9090', 3, '2020-01-20', '2020-02-10', 25.80, 1, '25518526A', '3', 'Alpinismo, Bingo', 'Pensión Completa'),
('9832', 4, '2020-02-15', '2020-02-26', 63.25, 13, '28569535T', '15', 'Tiro con arco, Baloncesto', 'Pensión Completa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`CIF`);

--
-- Indices de la tabla `regimen_alimentario`
--
ALTER TABLE `regimen_alimentario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
