CREATE TYPE state AS ENUM('active', 'complete');

CREATE TABLE  orders (
   "id" INTEGER PRIMARY KEY, 
   "user_id" INTEGER REFERENCES users(id),
   "status" state NOT NULL
);