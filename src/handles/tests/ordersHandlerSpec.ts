/* بسم الله الرحمن الرحيم */

import supertest from "supertest";
import Client from "../../database";
import app from "../../server";
import { UserDataType } from "../../models/users";
import {ProductDataType } from "../../models/products";
import dotenv from "dotenv";
import { OrderDetailsDataType } from "../../models/orders";
dotenv.config();

let token= '';
let id :number;
const req = supertest(app);

describe("Suite, Orders handler", () => {
   const user:UserDataType ={
      "username": "ahmed",
      "email": "ahme2@gail.com",
      "password": "123",
      first_name: "",
      last_name: ""
   }

   const productInfo:ProductDataType = {
      "name": "Air Pods",
      "details": "From apple",
      "price": 10
   }
   
   const orderDetails:OrderDetailsDataType = {
      "order_id": 2,
      "product_id": 2,
      "quantity": 10
   }
   // سبحان الله 
   beforeAll(async () => {
      const { body } = await req.post('/users').send(user);
      await req.post('/products').send(productInfo);
      token = body.token;
      id = body.id;
   });

   it("Status should returnd 200 when try to get all orders🧑‍💻 (Index)", async () => {
      const res = await req.get('/orders').auth(token, {type: 'bearer'});
      
      expect(res.status).toBe(200);
      expect(res).toBeTruthy();
      expect(res.body).toEqual('');
   });

   it("Status should returnd 200 when try to make a order🧑‍💻 (CREATE)", async () => {
      const res = await req.get('/orders').auth(token, {type: 'bearer'}).send({user_id:2, status:'complete'});

      expect(res.status).toBe(200);
      expect(res).toBeTruthy();
      expect(res.body).toEqual('');
   });

   it("Status should returnd 200 when try to get one order🧑‍💻 (show)", async () => {
      const res = await req.get('/orders').auth(token, {type: 'bearer'}).send({id});

      expect(res.status).toBe(200);
      expect(res).toBeTruthy();
      expect(res.body).toEqual('');
   });
   it("Status should returnd 200 when try to get one order🧑‍💻 (orderDetails)", async () => {
      const res = await req.get('/orders').auth(token, {type: 'bearer'}).send(orderDetails);

      expect(res.status).toBe(200);
      expect(res).toBeTruthy();
      expect(res.body).toEqual('');
   });
   // و الحمدلله
   afterAll( async () => {
      const conn = Client.connect();
      const sql = "DELETE FROM products;";
      (await conn).query(sql);
      (await conn).release();
   });
});
 