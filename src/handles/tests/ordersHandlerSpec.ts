/* بسم الله الرحمن الرحيم */

import supertest from "supertest";
import bcrypt from "bcrypt";
import app from "../../server";
import { UserDataType, UserClass } from "../../models/users";
import {ProductDataType, ProductClass } from "../../models/products";
import dotenv from "dotenv";
dotenv.config();

const { PEPPER, ROUNDS_SALT, SECRET_TOKEN } = process.env;
const req = supertest(app);
const uStore= new UserClass();
const pStore= new ProductClass();

// describe("Suite, Orders handler", () => {
//    beforeAll( async () => {
//       const uPassword = "tes211";
//       const hash = bcrypt.hashSync(uPassword+PEPPER, await bcrypt.genSalt(parseInt(ROUNDS_SALT as string)));
//       const userInfo: UserDataType= {
//          "username": "ahmedSayed11",
//          "email": "test11@gmail.com",
//          password: hash as string,
//          first_name: "",
//          last_name: ""
//       }
//       await uStore.create(userInfo);

//       const productInfo:ProductDataType = {
//          "name": "Air Pods",
//          "details": "From apple",
//          "price": 10
//       }

//       await pStore.create(productInfo);
//    });

//    it("", async () => {
//       const res = await req.get('/orders').auth(SECRET_TOKEN as string, {type: "bearer"});
//    })
// });
 