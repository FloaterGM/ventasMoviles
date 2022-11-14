-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2022 at 06:23 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviles`
--

-- --------------------------------------------------------

--
-- Table structure for table `vendedor`
--

CREATE TABLE `vendedor` (
  `idVendedor` varchar(16) NOT NULL,
  `nombreVendedor` varchar(50) NOT NULL,
  `correoVendedor` varchar(50) NOT NULL,
  `totalComisiones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendedor`
--

INSERT INTO `vendedor` (`idVendedor`, `nombreVendedor`, `correoVendedor`, `totalComisiones`) VALUES
('1021802567', 'Cristobal', 'floatingttv@gmail.com', 0),
('1021802568', 'Cristobal', 'vcristobal3@gmail.com', 0),
('24333401', 'Marcela', 'marcgh324@gmail.com', 0),
('24333402', 'Marcela', 'marcgh324@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `idVendedor` varchar(11) NOT NULL,
  `zonaVenta` int(11) NOT NULL,
  `fechaVenta` varchar(20) NOT NULL,
  `valorVenta` int(11) NOT NULL,
  `valorComision` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ventas`
--

INSERT INTO `ventas` (`idVendedor`, `zonaVenta`, `fechaVenta`, `valorVenta`, `valorComision`) VALUES
('', 2, '30/03/2004', 2000000, 60000),
('1021802567', 1, '30/03/2004', 20000000, 400000),
('1021802567', 2, '30/03/2004', 20000000, 600000),
('1021802567', 1, '30/03/2004', 2000000, 40000),
('24333402', 2, '30/03/2004', 2000000, 60000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`idVendedor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
