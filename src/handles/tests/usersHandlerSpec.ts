/* بسم الله الرحمن الرحيم */

import { UserDataType } from "../../models/users";
import supertest from "supertest";
import app from "../../server";
import dotenv from "dotenv";
dotenv.config();

let Token = '';
const req = supertest(app);

describe("Test user endpoints", () => {
   const user:UserDataType ={
      "username": "ahmed11",
      "email": "ahme112@gail.com",
      "password": "123",
      first_name: "",
      last_name: ""
   }
   it("Status should returnd 200 when try to add a new user🧑‍💻 (CREATE)", async () => {
      const res = await req.post('/users').send(user);
      
      expect(res.status).toBe(200);
   });
   
   it("Status should returnd 200 when try to authenticate👨🏻‍🦳📥 (AUTHENTICATE)", async () => {
      const res = await req.post('/users/authenticate').set('content-type', 'application/json').send({email: user.email, password: user.password});
      expect(res.status).toBe(200);
      const {token} = res.body;
      Token = token;
   });
   
   it("Status should returnd 200 when try to get all users👩‍👩‍👦‍👦 (INDEX)", async () => {
      const res = await req.get('/users').auth(Token,{type: 'bearer'});
      
      expect(res.status).toBe(200);
      expect(res.body).toBeTruthy();
   });

   it("Status should returnd 200 when try to get one user🧔‍♂️ (SHOW)", async () => {
      const res = await req.get('/users')
      .auth(Token, {type: "bearer"})
      .send(`username :${user.username}`);
   
      expect(res.status).toBe(200);
   });
});
