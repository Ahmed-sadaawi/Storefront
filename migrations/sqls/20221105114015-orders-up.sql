CREATE TABLE  orders (
   id INTEGER PRIMARY KEY, 
   user_id    INTEGER REFERENCES users(id),
   product_id INTEGER REFERENCES products(id),
   quantity   BIGINT  NOT NULL,
   status VARCHAR(50)
);