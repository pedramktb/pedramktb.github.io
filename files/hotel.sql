SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `bill` (
  `customer_id` varchar(14) NOT NULL,
  `room_number` varchar(16) NOT NULL,
  `reservation_id` int(8) NOT NULL,
  `status` enum('Not Paid','Paid') NOT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `type` enum('Cash','Credit') DEFAULT NULL,
  `bill_id` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `customer` (
  `customer_id` varchar(14) NOT NULL,
  `firstname` varchar(128) NOT NULL,
  `lastname` varchar(128) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `mail` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `hotel` (
  `hotel_id` int(4) NOT NULL,
  `name` varchar(128) NOT NULL,
  `location` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `own` (
  `hotel_id` int(4) NOT NULL,
  `room_number` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `reservation` (
  `customer_id` varchar(14) NOT NULL,
  `room_number` varchar(16) NOT NULL,
  `reservation_id` int(8) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `period` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `room` (
  `room_number` varchar(16) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `capacity` int(2) NOT NULL,
  `type` enum('Economic','VIP','Business') NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `bill`
  ADD PRIMARY KEY (`room_number`,`reservation_id`,`customer_id`),
  ADD KEY `customer_id` (`customer_id`,`room_number`,`reservation_id`);

ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

ALTER TABLE `hotel`
  ADD PRIMARY KEY (`hotel_id`);

ALTER TABLE `own`
  ADD PRIMARY KEY (`hotel_id`,`room_number`),
  ADD KEY `room_number` (`room_number`);

ALTER TABLE `reservation`
  ADD PRIMARY KEY (`customer_id`,`room_number`,`reservation_id`),
  ADD KEY `room_number` (`room_number`);

ALTER TABLE `room`
  ADD PRIMARY KEY (`room_number`);

ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`customer_id`,`room_number`,`reservation_id`) REFERENCES `reservation` (`customer_id`, `room_number`, `reservation_id`);

ALTER TABLE `own`
  ADD CONSTRAINT `own_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`),
  ADD CONSTRAINT `own_ibfk_2` FOREIGN KEY (`room_number`) REFERENCES `room` (`room_number`);

ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`room_number`) REFERENCES `room` (`room_number`);
COMMIT;