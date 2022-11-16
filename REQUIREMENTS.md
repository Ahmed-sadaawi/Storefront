# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products

- Index  `/products [GET]`
- Show   `/products/:id [GET]`
- Create `/products [POST] (token)`
- delete `/products/:id [delete] (token)`

#### Users
- Index  `/users [get] (token)`
- Show   `/users/:id [get] (token)`
- Create `/users [post] (token)`
- Authenticate `/users/authenticate [post] (token)`

#### Orders
- Index  `/orders [get]`
- Show   `/orders/:user_id [get] (token)`
- Create `/orders [post] (token)`
- orderDetails `/orders/products [post] (token)`

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category
```
CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   name    VARCHAR(150) NOT NULL,
   details VARCHAR(255), 
   price   INTEGER NOT NULL
);
```
#### User
- id
- firstName
- lastName
- password
```
CREATE TABLE users (
   id SERIAL  PRIMARY KEY,
   username   VARCHAR(50)  NOT NULL UNIQUE,
   email      VARCHAR(50)  NOT NULL UNIQUE,
   password   VARCHAR(255) NOT NULL,
   first_name VARCHAR(50),
   last_name  VARCHAR(50)
);
```
#### Orders
```
CREATE TYPE order_status AS ENUM('complate', 'avtive');
CREATE TABLE  orders (
   id SERIAL PRIMARY KEY, 
   user_id INTEGER REFERENCES users(id),
   status order_status,
);
```
#### Orders Details
```
CREATE TABLE order_details (
   id SERIAL  PRIMARY KEY,
   order_id   INTEGER REFERENCES orders(id)   NOT NULL,
   product_id INTEGER REFERENCES products(id) NOT NULL,
   quantity   INTEGER NOT NULL
);
```
