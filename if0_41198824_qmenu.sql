-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql106.infinityfree.com
-- Generation Time: Jun 04, 2026 at 03:53 AM
-- Server version: 11.4.12-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_41198824_qmenu`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `fullname`, `username`, `email`, `password`) VALUES
(3, 'suratbest', 'suratbest', 'info@surat.best', '0192023a7bbd73250516f069df18b500');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `name_guj` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `name_eng` varchar(50) NOT NULL,
  `name_hindi` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `categorydesc` varchar(2024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `restroid`, `name_guj`, `name_eng`, `name_hindi`, `categorydesc`) VALUES
(4, 11, 'ગુજરા', 'pizza  eng', 'हिन्दी ', ''),
(22, 20, 'લુંચ', 'lunch', 'लंच', ''),
(23, 20, 'મોકટેઈલ', 'Moktail', 'मॉकटेल', ''),
(24, 20, 'જુઈસ', 'Juice', 'जूस', '');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `mobile` bigint(12) NOT NULL,
  `email` varchar(100) NOT NULL,
  `feedback` varchar(2024) NOT NULL,
  `dob` date DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `restroid`, `fullname`, `mobile`, `email`, `feedback`, `dob`, `timestamp`) VALUES
(1, 11, 'jenil mangukiya', 7600143939, 'sruchit7@gmail.com', 'nice', '2002-10-13', '2020-10-13 10:35:03');

-- --------------------------------------------------------

--
-- Table structure for table `historyitem`
--

CREATE TABLE `historyitem` (
  `id` int(11) NOT NULL,
  `orderid` int(11) NOT NULL,
  `name_eng` varchar(50) NOT NULL,
  `name_hindi` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `name_guj` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `price` varchar(20) NOT NULL,
  `quantity` varchar(10) NOT NULL,
  `totalprice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `historyitem`
--

INSERT INTO `historyitem` (`id`, `orderid`, `name_eng`, `name_hindi`, `name_guj`, `price`, `quantity`, `totalprice`) VALUES
(1, 1, 'JJ Dhosa special', 'à¤œà¥‡ à¤œà¥‡ à¤¢à¥‹à¤¸à¤¾ à¤¸à¥à¤ªà¥ˆà¤¶à¤²', 'àªœà«‡ àªœà«‡ àª¢à«‹àª¸àª¾ àª¸à«àªªà«‡àª¶àª¿àª¯àª', '150', '2', '300'),
(2, 3, 'pizza  eng', 'pizza hindi', 'pizza guj', '100', '1', '100'),
(3, 4, '\r\npizza  eng', 'pizza hindi', 'pizza guj', '100', '12', '1200'),
(4, 5, 'Idli', 'इडली', 'ઈડલી', '20', '3', '60'),
(5, 6, 'Idli', 'इडली', 'ઈડલી', '100', '2', '200'),
(6, 6, 'Milkshake', 'मिल्कशेक', 'મિલ્કશકે', '200', '2', '400'),
(7, 6, 'Orange Juice', 'ऑरेंज जूस', 'ઓરંગે જુઈસ', '150', '1', '150'),
(8, 7, 'Orange Juice', 'ऑरेंज जूस', 'ઓરંગે જુઈસ', '150', '1', '150'),
(9, 8, 'Idli', 'इडली', 'ઈડલી', '100', '3', '300'),
(10, 8, 'Orange Juice', 'ऑरेंज जूस', 'ઓરંગે જુઈસ', '150', '1', '150'),
(11, 9, 'Idli', 'इडली', 'ઈડલી', '100', '1', '100'),
(12, 9, 'Orange Juice', 'ऑरेंज जूस', 'ઓરંગે જુઈસ', '150', '1', '150'),
(13, 10, 'Idli', '????', '????', '100', '1', '100'),
(14, 11, 'Milkshake', '????????', '????????', '200', '1', '200'),
(15, 11, 'Orange Juice', '????? ???', '????? ????', '150', '1', '150'),
(16, 11, 'Idli', '????', '????', '100', '2', '200');

-- --------------------------------------------------------

--
-- Table structure for table `menuitems`
--

CREATE TABLE `menuitems` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `categoryid` int(11) NOT NULL,
  `image` varchar(2024) NOT NULL,
  `name_guj` varchar(200) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `name_hindi` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `name_eng` varchar(50) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `veg` varchar(20) NOT NULL DEFAULT '0' COMMENT '0 for veg  1 for nonveg',
  `available` varchar(20) NOT NULL DEFAULT '1' COMMENT '0 for unavailable \r\n1 for available \r\n',
  `price` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `menuitems`
--

INSERT INTO `menuitems` (`id`, `restroid`, `categoryid`, `image`, `name_guj`, `name_hindi`, `name_eng`, `veg`, `available`, `price`) VALUES
(2, 11, 4, '/restro/admin/images/item_1602613208347.jpg', 'pizza guj', 'pizza hindi', 'pizza  eng', '1', '1', '100'),
(3, 11, 4, '/restro/admin/images/item_1602835101164.jpg', 'munchiu guj ', 'muchu hindi ', 'mucharian', '0', '1', '900'),
(4, 20, 24, 'images/item_1771848782435.jpg', 'મિલ્કશકે', 'मिल्कशेक', 'Milkshake', '0', '1', '200'),
(5, 20, 24, 'images/item_1771848814673.png', 'ઓરંગે જુઈસ', 'ऑरेंज जूस', 'Orange Juice', '0', '1', '150'),
(6, 20, 22, 'images/item_1771849139120.png', 'ઈડલી', 'इडली', 'Idli', '0', '1', '100');

-- --------------------------------------------------------

--
-- Table structure for table `orderhistory`
--

CREATE TABLE `orderhistory` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `orderid` varchar(20) NOT NULL,
  `tableid` varchar(20) NOT NULL,
  `tablename` varchar(50) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `number` bigint(12) NOT NULL,
  `total` varchar(100) NOT NULL DEFAULT '0',
  `withgst` varchar(20) NOT NULL DEFAULT '0',
  `discount` varchar(50) NOT NULL DEFAULT '0',
  `servicetax` varchar(50) NOT NULL DEFAULT '0',
  `grandtotal` varchar(100) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderhistory`
--

INSERT INTO `orderhistory` (`id`, `restroid`, `orderid`, `tableid`, `tablename`, `fullname`, `number`, `total`, `withgst`, `discount`, `servicetax`, `grandtotal`, `timestamp`) VALUES
(1, 11, '120913104335648', '1', 'Table A1', 'Ruchit', 1234567890, '300', '1', '0', '0', '354', '2019-10-13 09:28:42'),
(2, 11, '120913104335648', '1', 'Table A1', 'Ruchit SHAH', 1234567890, '300', '1', '0', '0', '354', '2020-10-13 09:28:42'),
(3, 11, '12091412528879', '1', 'Table A1', 'madhav savani', 9978421224, '100', '1', '0', '0', '118', '2020-10-15 13:13:32'),
(4, 11, '1602770932390', '1', 'Table A1', 'jenil mangukiya', 9978421224, '1200', '1', '0', '0', '1416', '2020-10-15 14:08:53'),
(5, 20, '1771507092496', '9', 'A2', 'defgegg', 1234567890, '60', '1', '0', '0', '70.8', '2026-02-19 13:18:14'),
(6, 20, '1771850067436', '4', 'A1', 'defgegg', 1234567890, '750', '1', '0', '0', '885', '2026-02-23 12:34:33'),
(7, 20, '1771850075774', '4', 'A1', 'abcdefg', 2345678903, '150', '1', '0', '0', '177', '2026-02-23 12:34:37'),
(8, 20, 'MERGED-1771850753725', '4', 'A1', 'abcc', 2345678903, '450', '1', '0', '0', '531', '2026-02-23 12:45:53'),
(9, 20, '1771850996964', '4', 'A1', 'abcc (Merged)', 2345678901, '250', '1', '0', '0', '295', '2026-02-23 12:50:03'),
(10, 20, '1.7719319705E+12', 'null', '', 'Nikita', 0, '100', '1', '0', '0', '118', '2026-02-24 11:19:35'),
(11, 20, '1.77193867383E+12', 'null', '', 'aryan (Merged)', 0, '550', '1', '0', '20', '759', '2026-02-24 13:11:19');

-- --------------------------------------------------------

--
-- Table structure for table `paymenthistory`
--

CREATE TABLE `paymenthistory` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `paymentdate` date NOT NULL,
  `subplan` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `subtype` varchar(20) NOT NULL,
  `expdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restro`
--

CREATE TABLE `restro` (
  `id` int(11) NOT NULL,
  `restroname` varchar(200) NOT NULL,
  `mobileno` bigint(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(2024) NOT NULL,
  `password` varchar(400) NOT NULL,
  `gstno` varchar(100) NOT NULL,
  `qrcode` varchar(2024) NOT NULL,
  `themecode` varchar(20) NOT NULL COMMENT 'some unique code for theme',
  `status` int(11) NOT NULL COMMENT 'active =1 , deactivate = 0',
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `distance` varchar(20) NOT NULL,
  `joindate` date NOT NULL,
  `paymentdate` date NOT NULL,
  `subtype` varchar(10) NOT NULL COMMENT 'o for normal menu 1 for place order',
  `subplan` int(11) NOT NULL COMMENT 'subscription plan in month',
  `expdate` date NOT NULL,
  `price` int(11) NOT NULL,
  `pdf` text NOT NULL,
  `slug` varchar(300) NOT NULL DEFAULT '',
  `restrootp` varchar(20) NOT NULL DEFAULT '0',
  `count` varchar(20) NOT NULL DEFAULT '0',
  `discount` varchar(20) NOT NULL DEFAULT '0',
  `servicecharge` varchar(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `restro`
--

INSERT INTO `restro` (`id`, `restroname`, `mobileno`, `email`, `address`, `password`, `gstno`, `qrcode`, `themecode`, `status`, `latitude`, `longitude`, `distance`, `joindate`, `paymentdate`, `subtype`, `subplan`, `expdate`, `price`, `pdf`, `slug`, `restrootp`, `count`, `discount`, `servicecharge`) VALUES
(1, 'Default', 9999999999, 'info@surat.best', 'default', '999999999', '', '', '11', 1, '21.2298548', '21.2298548', '72.90798380000001', '2020-10-10', '2020-10-10', '1', 12, '2021-10-10', 6999, '', '1', '1224', '0', '0', '0'),
(11, 'Surat.Best', 7016426420, 'sruchit7@gmail.com', 'aedf', '25d55ad283aa400af464c76d713c07ad', '5456456456', '/admin/images/qr/qrcodeof_11.jpg', '11', 1, '21.2298548', '72.90798380000001', '10000000', '2020-10-10', '2020-10-10', '1', 12, '2021-10-10', 6999, '', '6512bd43d9caa6e02c990b0a82652dca', '6987', '4', '0', '0'),
(20, 'Cafe', 9408626864, 'devuuchakuu@gmail.com', 'vesu', '0192023a7bbd73250516f069df18b500', '12345678sdrftgyhj', 'images/qr/qrcodeof_20.jpg', '11', 1, '21.136302749411687', '72.74865502987483', '100000000000', '2026-02-19', '2026-02-19', '1', 7, '2026-07-19', 5000, '', '98f13708210194c475687be6106a3b84', '8142', '4', '0', '20');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `restroid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `restroid`, `name`) VALUES
(1, 11, 'Table A1'),
(4, 20, 'A1'),
(5, 20, 'A2');

-- --------------------------------------------------------

--
-- Table structure for table `theme`
--

CREATE TABLE `theme` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `image` varchar(2024) NOT NULL,
  `url` varchar(2024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `theme`
--

INSERT INTO `theme` (`id`, `title`, `image`, `url`) VALUES
(11, 'dark-yellow', 'images/1599660875562.png', 'minires/suratbest/template-demo/dark-yellow/index.html');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `historyitem`
--
ALTER TABLE `historyitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderid` (`orderid`);

--
-- Indexes for table `menuitems`
--
ALTER TABLE `menuitems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryid` (`categoryid`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `orderhistory`
--
ALTER TABLE `orderhistory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `paymenthistory`
--
ALTER TABLE `paymenthistory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `restro`
--
ALTER TABLE `restro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restroid` (`restroid`);

--
-- Indexes for table `theme`
--
ALTER TABLE `theme`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `historyitem`
--
ALTER TABLE `historyitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `menuitems`
--
ALTER TABLE `menuitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orderhistory`
--
ALTER TABLE `orderhistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `paymenthistory`
--
ALTER TABLE `paymenthistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restro`
--
ALTER TABLE `restro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `theme`
--
ALTER TABLE `theme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`restroid`) REFERENCES `restro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`restroid`) REFERENCES `restro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `historyitem`
--
ALTER TABLE `historyitem`
  ADD CONSTRAINT `historyitem_ibfk_1` FOREIGN KEY (`orderid`) REFERENCES `orderhistory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `menuitems`
--
ALTER TABLE `menuitems`
  ADD CONSTRAINT `menuitems_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderhistory`
--
ALTER TABLE `orderhistory`
  ADD CONSTRAINT `orderhistory_ibfk_1` FOREIGN KEY (`restroid`) REFERENCES `restro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `paymenthistory`
--
ALTER TABLE `paymenthistory`
  ADD CONSTRAINT `paymenthistory_ibfk_1` FOREIGN KEY (`restroid`) REFERENCES `restro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tables`
--
ALTER TABLE `tables`
  ADD CONSTRAINT `tables_ibfk_1` FOREIGN KEY (`restroid`) REFERENCES `restro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
