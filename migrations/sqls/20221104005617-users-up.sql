CREATE TABLE users (
   id SERIAL  PRIMARY KEY,
   username   VARCHAR(50)  NOT NULL unique,
   email      VARCHAR(50)  NOT NULL UNIQUE,
   password   VARCHAR(255) NOT NULL,
   first_name VARCHAR(50),
   last_name  VARCHAR(50)
);