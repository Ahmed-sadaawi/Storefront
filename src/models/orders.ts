/* بسم الله الرحمن الرحيم */

import Client from "../database";
import dotenv from "dotenv";
dotenv.config();

export type OrderDataType = { id?: number, user_id: number, status: string };
export type OrderDetailsDataType = { id?: number, order_id: number, product_id: number, quantity: number};

export class OrderClass {
   async index():Promise<OrderDataType[]> {
      try {
         const conn = await Client.connect();
         const sql  = "SELECT * FROM orders";
         const result= await conn.query(sql);
         conn.release();
         return result.rows[0];
      }
      catch (error) {
         throw new Error(`Cannot get all orders : ${error}`);
      }
   }

   async show(user_id:number):Promise<OrderDataType[]> {
      try {
         const conn = await Client.connect();
         const sql  = "SELECT * FROM orders WHERE user_id=$1";
         const result= await conn.query(sql, [user_id]);
         conn.release();
         return result.rows[0];
      }
      catch (error) {
         throw new Error(`Cannot get orders for user: ${error}`);
      }
   }

   async create(order:OrderDataType):Promise<OrderDataType[]> {
      try {
         const conn = await Client.connect();
         const sql  = "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *;";
         const result= await conn.query(sql, [order.user_id, order.status]);
         conn.release();
         return result.rows[0];
      }
      catch (error) {
         throw new Error(`Cannot make an order: ${error}`);
      }
   }

   async orderDetails(details:OrderDetailsDataType):Promise<OrderDataType[]> {
      try {
         const conn = await Client.connect();
         const sql  = "INSERT INTO order_details (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *";
         const result= await conn.query(sql, [details.order_id, details.product_id, details.quantity]);
         conn.release();
         return result.rows[0];
      }
      catch (error) {
         throw new Error(`Cannot add order details: ${error}`);
      }
   }
}