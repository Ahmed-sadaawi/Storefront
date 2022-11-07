CREATE TABLE order_details(
   id INTEGER NOT NULL PRIMARY KEY,
   order_id   INTEGER REFERENCES orders(id)   NOT NULL,
   product_id INTEGER REFERENCES products(id) NOT NULL,
   quantity   INTEGER NOT NULL
);