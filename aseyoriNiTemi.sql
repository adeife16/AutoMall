-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 02, 2022 at 03:30 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aseyoriNiTemi`
--

-- --------------------------------------------------------

--
-- Table structure for table `am_admin`
--

CREATE TABLE `am_admin` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(100) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `am_admin`
--

INSERT INTO `am_admin` (`id`, `admin_id`, `first_name`, `last_name`, `email`, `password`, `picture`) VALUES
(1, 'automallAdmin01e71c5ac50e', 'Opeyemi', ' Dada', ' dadaadeife@gmail.com', '$2y$10$V6G7tvFNBYTP45CjqZEIFuE83LjyzE643mz7zMml6marRfnBa9sYm', 'automallAdmin01e71c5ac50ejpg');

-- --------------------------------------------------------

--
-- Table structure for table `am_bank`
--

CREATE TABLE `am_bank` (
  `id` int(100) NOT NULL,
  `am_bank_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_buyer`
--

CREATE TABLE `am_buyer` (
  `id` int(200) NOT NULL,
  `buyer_id` varchar(200) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` text NOT NULL,
  `state` int(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_category`
--

CREATE TABLE `am_category` (
  `id` int(100) NOT NULL,
  `cat_name` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_merchant`
--

CREATE TABLE `am_merchant` (
  `id` int(200) NOT NULL,
  `merchant_id` varchar(50) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `address` text NOT NULL,
  `state` int(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `about` text DEFAULT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_number` varchar(20) NOT NULL,
  `bank` int(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_orders`
--

CREATE TABLE `am_orders` (
  `id` int(200) NOT NULL,
  `product_id` varchar(200) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` double(100,2) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `order_total` int(100) NOT NULL,
  `buyer_id` varchar(200) NOT NULL,
  `seller_id` varchar(200) NOT NULL,
  `pay_on_delivery` enum('true','false') NOT NULL DEFAULT 'false',
  `order_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_product`
--

CREATE TABLE `am_product` (
  `id` int(100) NOT NULL,
  `product_id` varchar(200) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` double NOT NULL,
  `product_category` int(100) NOT NULL,
  `product_sub_category` int(100) DEFAULT NULL,
  `product_negotiable` enum('true','false') NOT NULL DEFAULT 'false',
  `product_discount` double DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `am_state`
--

CREATE TABLE `am_state` (
  `id` int(100) NOT NULL,
  `state_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `am_state`
--

INSERT INTO `am_state` (`id`, `state_name`) VALUES
(1, 'Abia'),
(2, 'Adamawa'),
(3, 'Akwa Ibom'),
(4, 'Anambra'),
(5, 'Bauchi'),
(6, 'Bayelsa'),
(7, 'Benue'),
(8, 'Borno'),
(9, 'Cross River'),
(10, 'Delta'),
(11, 'Ebonyi'),
(12, 'Edo'),
(13, 'Ekiti'),
(14, 'Enugu'),
(15, 'FCT'),
(16, 'Gombe'),
(17, 'Imo'),
(18, 'Jigawa'),
(19, 'Kaduna'),
(20, 'Kano'),
(21, 'Katsina'),
(22, 'Kebbi'),
(23, 'Kogi'),
(24, 'Kwara'),
(25, 'Lagos'),
(26, 'Nasarawa'),
(27, 'Niger'),
(28, 'Ogun'),
(29, 'Ondo'),
(30, 'Osun'),
(31, 'Oyo'),
(32, 'Plateau'),
(33, 'Rivers'),
(34, 'Sokoto'),
(35, 'Taraba'),
(36, 'Yobe'),
(37, 'Zamfara');

-- --------------------------------------------------------

--
-- Table structure for table `am_sub_category`
--

CREATE TABLE `am_sub_category` (
  `id` int(100) NOT NULL,
  `cat_id` int(100) NOT NULL,
  `sub_cat_name` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `am_admin`
--
ALTER TABLE `am_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `am_bank`
--
ALTER TABLE `am_bank`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `am_buyer`
--
ALTER TABLE `am_buyer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `buyer_id` (`buyer_id`),
  ADD KEY `state` (`state`);

--
-- Indexes for table `am_category`
--
ALTER TABLE `am_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cat_name` (`cat_name`);

--
-- Indexes for table `am_merchant`
--
ALTER TABLE `am_merchant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `company_name` (`company_name`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `bank` (`bank`),
  ADD KEY `merchant_id` (`merchant_id`),
  ADD KEY `state` (`state`);

--
-- Indexes for table `am_orders`
--
ALTER TABLE `am_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buyer_id` (`buyer_id`),
  ADD KEY `seller_id` (`seller_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `am_product`
--
ALTER TABLE `am_product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`),
  ADD KEY `product_category` (`product_category`,`product_sub_category`),
  ADD KEY `product_sub_category` (`product_sub_category`);

--
-- Indexes for table `am_state`
--
ALTER TABLE `am_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `am_sub_category`
--
ALTER TABLE `am_sub_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_cat_name` (`sub_cat_name`),
  ADD KEY `cat_id` (`cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `am_admin`
--
ALTER TABLE `am_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `am_bank`
--
ALTER TABLE `am_bank`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_buyer`
--
ALTER TABLE `am_buyer`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_category`
--
ALTER TABLE `am_category`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_merchant`
--
ALTER TABLE `am_merchant`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_orders`
--
ALTER TABLE `am_orders`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_product`
--
ALTER TABLE `am_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `am_state`
--
ALTER TABLE `am_state`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `am_sub_category`
--
ALTER TABLE `am_sub_category`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `am_buyer`
--
ALTER TABLE `am_buyer`
  ADD CONSTRAINT `am_buyer_ibfk_1` FOREIGN KEY (`state`) REFERENCES `am_state` (`id`);

--
-- Constraints for table `am_merchant`
--
ALTER TABLE `am_merchant`
  ADD CONSTRAINT `am_merchant_ibfk_1` FOREIGN KEY (`bank`) REFERENCES `am_bank` (`id`),
  ADD CONSTRAINT `am_merchant_ibfk_2` FOREIGN KEY (`state`) REFERENCES `am_state` (`id`);

--
-- Constraints for table `am_orders`
--
ALTER TABLE `am_orders`
  ADD CONSTRAINT `am_orders_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `am_buyer` (`buyer_id`),
  ADD CONSTRAINT `am_orders_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `am_merchant` (`merchant_id`),
  ADD CONSTRAINT `am_orders_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `am_product` (`product_id`);

--
-- Constraints for table `am_product`
--
ALTER TABLE `am_product`
  ADD CONSTRAINT `am_product_ibfk_1` FOREIGN KEY (`product_category`) REFERENCES `am_category` (`id`),
  ADD CONSTRAINT `am_product_ibfk_2` FOREIGN KEY (`product_sub_category`) REFERENCES `am_sub_category` (`id`);

--
-- Constraints for table `am_sub_category`
--
ALTER TABLE `am_sub_category`
  ADD CONSTRAINT `am_sub_category_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `am_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;