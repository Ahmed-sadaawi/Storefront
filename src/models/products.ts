/* بسم الله الرحمن الرحيم */

import Client from "../database";
import dotenv from "dotenv";
dotenv.config();

/* FUNCTIONS ABOUT PRODUCTS:
  - Index
  - Show 
  - Create
*/

/* علي بركة وبسم الله نبدأ */
// The type of data will returns from database;
export type ProductDataType = {id?:number; name:string; details:string; price:number;};

// Here is the product class;
export class ProductClass {

  // INDEX:
  async index(): Promise<ProductDataType[]> { // Returns an array of object with data about the product;
    try {
      const conn  = await Client.connect();
      const sql   = "SELECT * FROM products";
      const result= await conn.query(sql);
      conn.release();
      return result.rows;
    }
    catch (error) {
      throw new Error(`Cannot get products: ${error}`);
    }
  }
  // SHOW:
  async show(id:number): Promise<ProductDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "SELECT * FROM products WHERE id=$1";
      const result= await conn.query(sql,[id]);
      conn.release();
      return result.rows;
    }
    catch (error) {
      throw new Error(`Cannot get products: ${error}`);
    }
  }
  // CREATE:
  async create(product:ProductDataType): Promise<ProductDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "INSERT INTO products (name, details, price) VALUES ($1, $2, $3) RETURNING *";
      const result= await conn.query(sql,[product.name, product.details, product.price]);
      conn.release();
      return result.rows[0];
    }
    catch (error) {
      throw new Error(`Cannot add product ${product.name} : ${error}`);
    }
  }
  // DELETE:
  async delete(id: number): Promise<ProductDataType[]> {
    try {
      const conn  = await Client.connect();
      const sql   = "DELETE FROM products WHERE id=$1 RETURNING *";
      const result= await conn.query(sql,[id]);
      conn.release();
      console.log(result.rows[0]);
      return result.rows[0];
    }
    catch (error) {
      throw new Error(`Cannot add product ${id} : ${error}`);
    }
  }
}
