# بسم الله الرحمن الرحيم

# Udacity: Storefront Backend

This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the front end developer.

The database schema and the API route information can be found in the REQUIREMENT.md doc

Install all library, packages and dependences by:

`yarn` or `npm install`


## Steps and tricks:

### Set up Database:
### Create tow databases:
- store `CREATE DATABASE store;`

- store_test `CREATE DATABASE store_test;`

## Environment variables:
```
PORT=5432
NODE_ENV=dev

# DATABASE CONNECTION:
HOST=127.0.0.1
DB=store
DB_TEST=store_test
USER=embaby
PASSWORD="123"

# HASHING PASSWORDS:
PEPPER=This-is-very-hot🍕🙂
ROUNDS_SALT=7

# JSON WEB TOKEN:
SECRET_TOKEN="❤️لا اله الا الله في السر والعلن"
```
