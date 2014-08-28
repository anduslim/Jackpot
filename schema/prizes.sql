
CREATE DATABASE `jackpot` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `jackpot`;
DROP TABLE IF EXISTS `prize`;
CREATE TABLE `prize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(95) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '0',
  `active_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
