CREATE TABLE users (
   id SERIAL  PRIMARY KEY,
   username   VARCHAR(50)  NOT NULL UNIQUE,
   email      VARCHAR(50)  NOT NULL UNIQUE,
   password   VARCHAR(255) NOT NULL,
   first_name VARCHAR(50),
   last_name  VARCHAR(50)
);

CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   name    VARCHAR(150) NOT NULL,
   details VARCHAR(255), 
   price   INTEGER NOT NULL
);
CREATE TYPE order_status AS ENUM('complate', 'avtive');
CREATE TABLE  orders (
   id SERIAL PRIMARY KEY, 
   user_id INTEGER REFERENCES users(id),
   status order_status
);

CREATE TABLE order_details (
   id SERIAL  PRIMARY KEY,
   order_id   INTEGER REFERENCES orders(id)   NOT NULL,
   product_id INTEGER REFERENCES products(id) NOT NULL,
   quantity   INTEGER NOT NULL
);