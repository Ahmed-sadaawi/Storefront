/* بسم الله الرحمن الرحيم */

import Client from "../../database";
import { ProductDataType } from "../../models/products";
import supertest from "supertest";
import app from "../../server";
import dotenv from "dotenv";
import { UserDataType } from "../../models/users";
dotenv.config();

const req = supertest(app);
let token  = ''
let id:number = 2
describe("Suite, Product endpoints", () => {
   const product:ProductDataType = {
      "name": "Air Pods",
      "details": "From apple",
      "price": 10
   }
   const user:UserDataType ={
      "username": "ahmed11",
      "email": "ahme112@gail.com",
      "password": "123",
      first_name: "",
      last_name: ""
   }
   beforeAll(async () => {
      const { body } = await req.post('/users').send(user);
      await req.post('/products').auth(token, {type: 'bearer'}).send(product);
      token = body.token;
   });

   it("Spec, Get All Products🛍🛍🛍", async () => {
      const res = await req.get('/products');
      expect(res.status).toBe(200);
   });

   it("Spec, Get One Product🛍", async () => {
      const res = await req.get('/products').auth(token, {type: 'bearer'}).send(product.name);
      expect(res.status).toBe(200);
   });

   it("Spec, Add a new product👑🛍", async () => {
      const res = await req.post('/products').auth(token, {type: 'bearer'}).send(product);
      expect(res.status).toBe(200);
   });

   it("Spec, Delete a product👑🛍", async () => {
      const res = await req.delete(`/products/1`).auth(token, {type: 'bearer'});
      expect(res.status).toBe(200);
   });

   afterAll( async () => {
      const conn = Client.connect();
      const sql = "DELETE FROM products;DELETE FROM users;";
      (await conn).query(sql);
      (await conn).release();
   });
});
