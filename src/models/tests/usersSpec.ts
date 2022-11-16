// بسم الله الرحمن الرحيم

import Client from "../../database";
import { UserDataType, UserClass } from "../users";

const storeUserSpec = new UserClass();

describe("Suite, Testting user models🌝. => ( Defined 📥 )", () => {
   it("Test for get all users", async () => {
      expect(storeUserSpec.index).toBeDefined();
   });
   it("Show details about one user", async () => {
      expect(storeUserSpec.show).toBeDefined();
   });
   it("Sign Up test", async () => {
      expect(storeUserSpec.create).toBeDefined();
   });
   it("Sign In test", async () => {
      expect(storeUserSpec.authenticate).toBeDefined();
   });
});

const user:UserDataType ={
   "username": "ahmed1352",
   "email": "ahme5d132@gail.com",
   "password": "123",
   first_name: "",
   last_name: ""
}
describe("Suite, Testting User models🌝. => ( Output results📝 )", () => {
   beforeAll( async () => {
      await storeUserSpec.create(user);
   });
   afterAll( async () => {
      const conn = await Client.connect();
      const sql = "DELETE FROM users;";
      await conn.query(sql);
      conn.release();
   });

   it("auth",async () => {
      const auth = await storeUserSpec.authenticate(user.email, user.password as string);
      expect(auth?.username).toBe(user.username);
      expect(auth?.email).toBe(user.email);
      expect(auth?.first_name).toBe(user.first_name);
      expect(auth?.last_name).toBe(user.last_name);
      expect(user).not.toBeNull();
   });
});