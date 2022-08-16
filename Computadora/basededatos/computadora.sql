-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-08-2022 a las 14:47:53
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `computadora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(250) DEFAULT NULL,
  `producto` text NOT NULL,
  `precio` text NOT NULL,
  `descuento` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `producto`, `precio`, `descuento`) VALUES
(1, 'xoaqnn9vbljoc2urgmii', 'Tablet', '$12000', '5% de descuento y 3 cuotas sin interés'),
(2, 'yynfxcdhow7g1aj6midy', 'Notebook', '$80000', '10% de descuento'),
(3, 'jtc0xhup8dbnxxf8k9xj', 'Mobiliario', '$20000', '10% de descuento con debito automático'),
(4, 'uzocf1ghgmcovfedlwkj', 'Computadora', '$12000', '5% de descuento'),
(5, 'smvtyfbvy4rztfeuwqid', 'Notebook', '$20000', ''),
(6, 'anku0blfpqquwdn8iezh', 'Notebook', '$80000', ''),
(7, 'lbjr9xvxtgxs18r5g0qm', 'Mousse y Teclado', '$2000', ''),
(8, 'xe8hez3jmucij0rryb3b', 'Base', '$1800', ''),
(9, 'rou9ebmf78q1gkxjbs2z', 'Funda', '$2500', ''),
(14, 'uqwl0fj21fp1ryykzmee', 'Auriculares', '$1850', '10% de descuento'),
(15, 'zb3ffimvbnlfljmlcdj7', 'Teclado', '$2500', '20% con tarjeta de banco Nación'),
(18, 'qcu2hwvktjwilx1vsrny', 'memoria ddr5', '$2500', '10% de descuento con su compra al contado'),
(21, 'hnwijcbwyraculx7mwj2', 'Disco', '$5000', '5% de descuento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'oscarcogno@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'sabrina@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'victor@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
