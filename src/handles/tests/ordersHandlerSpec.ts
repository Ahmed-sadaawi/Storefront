/* بسم الله الرحمن الرحيم */

import supertest from "supertest";
import Client from "../../database";
import app from "../../server";
import { UserDataType, UserClass } from "../../models/users";
import {ProductDataType, ProductClass } from "../../models/products";
import dotenv from "dotenv";
dotenv.config();

const req = supertest(app);
const uStore= new UserClass();
const pStore= new ProductClass();
// const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6ImFobWVkMTEiLCJlbWFpbCI6ImFobWUxMTJAZ2FpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwNyQ4a1lBeFFPMnlycFRGTy9zNWtyUEVPY05PSmxGc2RjN1pCaWFGdDJ3UFZCUjBxNGRUZllZVyIsImZpcnN0X25hbWUiOiIiLCJsYXN0X25hbWUiOiIifSwiaWF0IjoxNjY4NjI5MTc3fQ.qzrAhL7-d6dLuGdimZuDO11XmjsT7jzBrios5MKJha0";

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
   // سبحان الله 
   beforeAll( async () => {
      await uStore.create(user);
      await pStore.create(productInfo);
   });

   it("Status should returnd 200 when try to get all orders🧑‍💻 (Index)", async () => {
      const res = await req.get('/orders');
      
      expect(res.status).toBe(200);
   });
   it("Status should returnd 200 when try to get one order🧑‍💻 (show)", async () => {
      const res = await req.get('/orders').send({user_id:2, status:'complete'});
      
      expect(res.status).toBe(200);
   });
   // و الحمدلله
   afterAll( async () => {
      const conn = Client.connect();
      const sql = "DELETE FROM products;";
      (await conn).query(sql);
      (await conn).release();
   });
});
 