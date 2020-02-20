-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2020 a las 14:45:55
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

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

CREATE DATABASE  IF NOT EXISTS `upocampo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `upocampo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--
DROP TABLE IF EXISTS `actividades`;
CREATE TABLE `actividades` (
  `id` varchar(5) NOT NULL,
  `nombre` text NOT NULL,
  `precio` float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `actividades` ADD PRIMARY KEY (`id`);

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('1', 'Piragüismo', '45.20');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('2', 'Alpinismo', '55.50');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('3', 'Tenis', '7.50');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('4', 'Futbol', '4.20');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('5', 'Buceo', '12.50');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('6', 'Buceo con bombona', '45.20');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('7', 'Tiro con arco', '19.95');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('8', 'Baloncesto', '45.20');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('9', 'Exploracion de cuevas', '50');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('10', 'Juegos infantiles', '2.50');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('11', 'Bingo', '0');
INSERT INTO `actividades` (`id`, `nombre`, `precio`) VALUES
('12', 'Rafting', '65.50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--
DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `dni` varchar(15) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `telefono` int(12) NOT NULL,
  `direccion` varchar(80) NOT NULL,
  `email` varchar(40) NOT NULL,
  `numero_tarjeta` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `cliente` ADD PRIMARY KEY (`dni`);

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('25518526A', 'Sofia', '34652753182', 'Plaza roma s/n 13 2C', 'sofialadivina@gmail.com', '4125825674593258');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('30452198R', 'Pedro', '34625635851', 'Calle paraiso n5', 'pedroelcrak@gmail.com', '4348521495426582');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('51483972H', 'Raul', '34785215953', 'Av montequinto n5', 'raulinformatico@gmail.com', '4654853696265553');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('25584568J', 'Sara', '34652983541', 'Plaza de parma 19 4A', 'sara089@gmail.com', '4253852495328512');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('28569535T', 'Paula', '34685257548', 'Avenida alegria n3', 'paula1999@hotmail.es', '4582468528569514');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('85216328G', 'Javier', '34655329357', 'Plaza la nueva n5', 'xavierfotografo@gmail.com', '4265582695478582');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('44855685D', 'Rocio', '34685248263', 'Av europa 5 3D', 'rociobestfriends@gmail.com', '4885963258452658');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('54664665A', 'Manuel', '34685695247', 'Av portimao n 12', 'manoloeldelbombo@hotmail.es', '4859632458215236');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('68546545G', 'Amparo', '34758265925', 'Calle la esperanza n 9', 'amparo1993@gmail.com', '4782695321584582');
INSERT INTO `cliente` (`dni`, `nombre`, `telefono`, `direccion`, `email`, `numero_tarjeta`) VALUES
('98866866S', 'Lucia', '34658951235', 'Plaza de parma 21 3B', 'luciabogados@gmail.com', '4859652148536258');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--
DROP TABLE IF EXISTS `habitacion`;
CREATE TABLE `habitacion` (
  `id` int(10) NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `precio` float(5,2) NOT NULL,
  `ocupacion_max` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `habitacion` ADD PRIMARY KEY (`id`);

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('0', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('1', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('2', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('3', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('4', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('5', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('6', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('7', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('8', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('9', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('10', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('11', 'simple', '28.90', '2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('12', 'doble', '40.50', '4');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('13', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('14', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('15', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('16', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('17', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('18', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('19', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('20', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('21', 'triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('22','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('23','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('24','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('25','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('26','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('27','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('28','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('29','triple', '75.95', '6');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('30','premium','149.99','2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('31','premium','149.99','2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('32','premium','149.99','2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('33','premium','149.99','2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('34','premium','149.99','2');
INSERT INTO `habitacion` (`id`, `tipo`, `precio`, `ocupacion_max`) VALUES
('35','premium','149.99','2');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parking`
--
DROP TABLE IF EXISTS `parking`;
CREATE TABLE `parking` (
  `id` int(10) NOT NULL,
  `precio` float(5,2) NOT NULL,
  `ancho_especial` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `parking` ADD PRIMARY KEY (`id`);


--
-- Volcado de datos para la tabla `parking`
--

INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('1','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('2','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('3','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('4','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('5','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('6','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('7','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('8','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('9','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('10','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('11','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('12','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('13','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('14','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('15','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('16','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('17','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('18','25','false');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('19','25','true');
INSERT INTO `parking` (`id`,`precio`,`ancho_especial`) VALUES ('20','25','false');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--
DROP TABLE IF EXISTS `proveedor`;
CREATE TABLE `proveedor` (
  `CIF` varchar(10) NOT NULL,
  `nombre` text NOT NULL,
  `telefono` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `proveedor` ADD PRIMARY KEY (`CIF`);
--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('25852563D', 'Victor', '34758962534');
INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('59354285G', 'Laura', '34658952574');
INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('52928526D', 'Rodrigo', '34685127963');
INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('45826584T', 'Pepe', '34652895123');
INSERT INTO `proveedor` (`CIF`, `nombre`, `telefono`) VALUES
('58102605U', 'Paula', '34658215985');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regimen_alimentario`
--

DROP TABLE IF EXISTS `regimen_alimentario`;
CREATE TABLE `regimen_alimentario` (
  `id` varchar(20) NOT NULL,
  `precio_persona` float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `regimen_alimentario` ADD PRIMARY KEY (`id`);

--
-- Volcado de datos para la tabla `regimen_alimentario`
--

INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Nada', '0');
INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Solo Desayuno', '8.99');
INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Media Pensión', '22.50');
INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Pensión Completa', '33.75');
INSERT INTO `regimen_alimentario` (`id`, `precio_persona`) VALUES
('Todo Incluido', '60');
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

DROP TABLE IF EXISTS `reserva`;
CREATE TABLE `reserva` (
  `id` varchar(10) NOT NULL,
  `numero_personas` int(10) NOT NULL,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `precio` float(5,2) NOT NULL,
  `numero_habitacion` varchar(2) NOT NULL,
  `nif_cliente` varchar(15) NOT NULL,
  `numero_parking` varchar(5) NOT NULL,
  `actividades` varchar (180) NOT NULL,
  `regimen_alimentario` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `reserva` ADD PRIMARY KEY (`id`);


--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('9090', '3', '2020-01-20', '2020-02-10', '25.80', '1', '25518526A', '3', 'Alpinismo, Bingo', 'Pensión Completa');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('4321', '1', '2020-02-10', '2020-02-14', '90.45', '6', '30452198R', '4', 'Tenis', 'Todo Incluido');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('1111', '2', '2020-02-12', '2020-02-16', '45.45', '12', '51483972H', '7', 'Exploracion de cuevas, Bingo', 'Media Pensión');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('5656', '1', '2020-01-30', '2020-02-01', '12.80', '4', '25584568J', 'NO', 'Bingo', 'Nada');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('9832', '4', '2020-02-15', '2020-02-26', '63.25', '13', '28569535T', '15', 'Tiro con arco, Baloncesto', 'Pensión Completa');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('5234', '1', '2020-02-01', '2020-02-03', '77.30', '8', '85216328G', 'NO', 'Alpinismo', 'Solo Desayuno');
INSERT INTO `reserva` (`id`, `numero_personas`, `checkin`, `checkout`, `precio`, `numero_habitacion`, `nif_cliente`, `numero_parking`,`actividades`,`regimen_alimentario`) VALUES
('5555', '2', '2020-03-03', '2020-03-06', '65.20', '15', '44855685D', '8', 'Buceo con bombona, Baloncesto', 'Media Pensión');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
