-- MySQL Workbench Forward Engineering


-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema stage
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stage
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stage` ;
USE `stage` ;

-- -----------------------------------------------------


-- -----------------------------------------------------
-- Table `stage`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stage`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 50
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `stage`.`cours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stage`.`cours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titre` LONGTEXT NULL DEFAULT NULL,
  `description_two` LONGTEXT NOT NULL,
  `description_one` LONGTEXT NULL DEFAULT NULL,
  `description_three` LONGTEXT NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  INDEX `fk_cours_users_idx` (`users_id` ASC) VISIBLE,
  PRIMARY KEY (`id`))
ENGINE = MRG_MyISAM
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;



