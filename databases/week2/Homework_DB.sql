-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number_plate` VARCHAR(10) NOT NULL,
  `Users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Users_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Cars_Users1_idx` (`Users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Cars_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Parking_summary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Parking_summary` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(2) NOT NULL,
  `from_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `Users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Users_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Parking_summary_Users1_idx` (`Users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Parking_summary_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Parking_zones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Parking_zones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `latitude` VARCHAR(45) NOT NULL,
  `longitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Prices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(2) NOT NULL,
  `timing` VARCHAR(45) NOT NULL,
  `Parking_zone_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Parking_zone_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Prices_Parking_zone1_idx` (`Parking_zone_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prices_Parking_zone1`
    FOREIGN KEY (`Parking_zone_id`)
    REFERENCES `mydb`.`Parking_zones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Receipt`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Receipt` (
  `Prices_id` INT NOT NULL,
  `Parking_summary_id` INT NOT NULL,
  PRIMARY KEY (`Prices_id`, `Parking_summary_id`),
  INDEX `fk_Prices_has_Parking_summary_Parking_summary1_idx` (`Parking_summary_id` ASC) VISIBLE,
  INDEX `fk_Prices_has_Parking_summary_Prices1_idx` (`Prices_id` ASC) VISIBLE,
  CONSTRAINT `fk_Prices_has_Parking_summary_Prices1`
    FOREIGN KEY (`Prices_id`)
    REFERENCES `mydb`.`Prices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Prices_has_Parking_summary_Parking_summary1`
    FOREIGN KEY (`Parking_summary_id`)
    REFERENCES `mydb`.`Parking_summary` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
