-- Database structure setup.
-- Note: A user with a database named 'maahad-eng' should be created first.
-- Version: 2017-07-30
CREATE TABLE `settings` (
 `setting` varchar(50) NOT NULL,
 `label` varchar(50) NOT NULL,
 `value` varchar(100) NOT NULL,
 PRIMARY KEY (`setting`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
