/* بسم الله الرحمن الرحيم */


import Client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const {PEPPER, ROUNDS_SALT} = process.env; 

/* FUNCTIONS ABOUT USER:
  - Index
  - Show 
  - Create
  - Authenticate
*/

/* علي بركة وبسم الله نبدأ */
// The type of data will returns from database;
export type UserDataType = { id?:number; username:string; email:string; password:string; first_name:string; last_name:string; };

// Here is the user class;
export class UserClass {
  // INDEX:
  async index(): Promise<UserDataType[]> { // Returns an array of object with data about the user;
    try {
      const conn  = await Client.connect();
      const sql   = "SELECT * FROM users";
      const result= await conn.query(sql);
      conn.release();
      return result.rows;
    }
    catch (error) {
      throw new Error(`Cannot get users: ${error}`);
    }
  }
  // SHOW:
  async show(id:number): Promise<UserDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "SELECT * FROM users WHERE id=$1";
      const result= await conn.query(sql,[id]);
      conn.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error(`Cannot get user: ${error}`);
    }
  }
  // CREATE:
  async create(user:UserDataType): Promise<UserDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "INSERT INTO users (username, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const hash  = bcrypt.hashSync(user.password+PEPPER, parseInt(ROUNDS_SALT as string));
      const result= await conn.query(sql,[user.username, user.email, hash, user.first_name, user.last_name]);
      conn.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error(`Cannot sign up ${user.username} : ${error}`);
    }
  }
  // AUTHENTICATE:
  async authenticate(email:string, password:string): Promise<null | UserDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "SELECT * FROM users WHERE email=($1)";
      const result= await conn.query(sql,[email]);

      if(result.rows.length){ // if length return 1
        const dataBack = result.rows[0];

        if(bcrypt.compareSync(password+PEPPER, dataBack.password)){
          return dataBack;
        }
      }
      conn.release();
      return null;
    }
    catch (error) {
      throw new Error(`This ${email} doesn't exist: ${error}, You can create an account`);
    }
  }
}

/*
  ( وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ ۖ وَسَتُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ وَالشَّهَادَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ )
  [ التوبة: 105]
*/