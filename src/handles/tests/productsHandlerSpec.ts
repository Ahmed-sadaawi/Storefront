/* بسم الله الرحمن الرحيم */

import Client from "../../database";
import {ProductDataType, ProductClass } from "../../models/products";
import supertest from "supertest";
import app from "../../server";

const pStore = new ProductClass();
const req = supertest(app);

const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJ1c2VybmFtZSI6ImFobWVkU2F5ZWQxMiIsImVtYWlsIjoidGVzdDIyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA3JDV6cS5pdGdMSFFMZGdiNGJMV2JHeGVnVXJCaHU0LjdKSGpZTlpJbC9tajVRSlBvZUwwR1ZDIiwiZmlyc3RfbmFtZSI6bnVsbCwibGFzdF9uYW1lIjpudWxsfSwiaWF0IjoxNjY4NjAyNTE2fQ.HdSN2nGlVzk2z6I6BmmQfyf0Pb9afvJu7ik_22X1Huc";
describe("Suite, Product endpoints", () => {
   const product: ProductDataType = {
      name:"Air Pods",
      details:"From apple",
      price:12
   }
   beforeAll( async () => {
      await pStore.create(product);
   });

   it("Spec, Get All Products🛍🛍🛍", async () => {
      const res = await req.get('/products');
      expect(res.status).toBe(200);
   });

   it("Spec, Get One Product✅🛍", async () => {
      const res = await req.get('/products').send(product.name);
      expect(res.status).toBe(200);
   });

   it("Spec, Add a new product👑🛍", async () => {
      const res = await req.post('/products').auth(token, {type: 'bearer'}).send(product);
      expect(res.status).toBe(200);
   });
   afterAll( async () => {
      const conn = Client.connect();
      const sql = "DELETE FROM products;";
      (await conn).query(sql);
      (await conn).release();
   });
});
