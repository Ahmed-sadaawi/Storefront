/*========================| بسم الله الرحمن الرحيم |========================*/

import {Pool} from "pg";
import dotenv from "dotenv";
dotenv.config();

const { HOST, DB, DB_TEST, USER, PASSWORD, PORT, ENV } = process.env;

/* or 
   const HOST    = process.env.HOST;
   const DB      = process.env.DB;
   const DB_TEST = process.env.DB_TEST;
   const USER    = process.env.USER;
   const PASSWORD= process.env.PASSWORD;
   const PORT    = process.env.PORT;
   const ENV     = process.env.ENV;
*/

const Client = new Pool({
   host    :HOST, 
   database:(ENV==="dev")? DB : DB_TEST,
   user    :USER,
   password:PASSWORD,
   port    :parseInt(PORT as string)
});

export default Client;