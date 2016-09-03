CREATE DATABASE burgers_db;

SHOW DATABASES LIKE 'burgers_db';

USE burgers_db;

DROP TABLES burgers;

CREATE TABLE burgers
(
burgerID               int(5)  AUTO_INCREMENT, 
burgerName             varchar(50),
devoured               boolean,
date                   timestamp,
PRIMARY KEY (burgerID)
);


SHOW DATABASES LIKE 'burgers_db';
SHOW COLUMNS from burgers;
SELECT * from burgers;
