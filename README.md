# بسم الله الرحمن الرحيم

# Udacity: Storefront Backend

This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the front end developer.

The database schema and the API route information can be found in the REQUIREMENT.md doc

#### Stack:

- [Nodejs]()

- [PostgreSQL]()

- [Express]()

- [Typescript]()

- [Jasmine]()

### Clone this repo:
```
 $ git clone https://github.com/Ahmed-sadaawi/Storefront.git
```

#### Run this project on local:
```
   $ cd Storefront
``` 

#### Install all dependencies by this command:
```
   $ npm install  // or yarn 
``` 

Now let's set up the database and connect to it:
## Set up database:

#### Start PostgreSql:
```
$ psql -h localhost -U postgres 
```

#### **First**, check if you have a database with this name or not.
```
postgres=# \l
```
#### **Then**, create a new user and grand all privilegeses to this user by this command:
```
$ CREATE USER ahmed WITH PASSWORD '123'; 
```
#### Create databases:
If you don't have any of these databases `store` and `store_test` then we can create them by:
```
   $ CREATE DATBASE store; 
   $ CREATE DATBASE store_test;
```

#### To connect to a `store` database;
```
   $ \c store
   # To exit
   $ \q
```

#### To run the server:  (will run on `port 3000`)
```
   $ npm start
``` 

#### To migrates dev database:
```
   $ npm run db-dev // or yarn db-dev
```
#### To migrates test database:
```
   $ npm run test // or yarn test
```

## Environment variables in `.env` file includes database `port`:
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

### API Endpoints:
Please check the `REQUIREMENTS.md` file.

# والسلام عليكم ورحمة الله وبركاته