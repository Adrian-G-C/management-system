DROP DATABASE IF EXISTS usermanagement_db;
CREATE DATABASE usermanagement_db;

USE usermanagement_db;

CREATE TABLE user ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phone VARCHAR(45) NOT NULL,
    comments TEXT NOT NULL,
    status VARCHAR(10) NOT NULL DEFAULT 'active'
    );

    ENGINE = InnoDB ;