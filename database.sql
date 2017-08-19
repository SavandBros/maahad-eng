-- Database structure setup.
-- Note: A user with a database named 'maahad-eng' should be created first.
-- Version: 2017-07-30

SET time_zone = "+4:00";

CREATE TABLE `settings` (
 `setting` varchar(50) NOT NULL,
 `label` varchar(50) NOT NULL,
 `value` varchar(100) NOT NULL,
 PRIMARY KEY (`setting`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `messages` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `name` varchar(50) NOT NULL,
 `number` varchar(50) NOT NULL,
 `email` varchar(200) NOT NULL,
 `message` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `products` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(100) NOT NULL,
 `detail` text NOT NULL,
 `image` varchar(200) NOT NULL,
 `price` int(11) NOT NULL DEFAULT '0',
 `is_special` tinyint(1) NOT NULL DEFAULT '0',
 `ordering` int(11) NOT NULL,
 `link` varchar(1000) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
