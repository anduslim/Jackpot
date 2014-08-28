DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `type` enum('item','link','place','person') NOT NULL,
  `name` varchar(255) NOT NULL,
  `comment` text,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
CREATE DATABASE `jackpot` /*!40100 DEFAULT CHARACTER SET utf8 */;
DROP TABLE IF EXISTS `prize`;
CREATE TABLE `prize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(95) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `image_url` varchar(150) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

