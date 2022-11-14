// بسم الله الرحمن الرحيم

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

describe("Suite, Testting User models🌝. => ( Output results📝 )", () => {
   it("Shouldn't create user function return null ", async () => {
      const create = await storeUserSpec.create({
         "username": "ahmed1352", "email": "ahme5d132@gail.com", "password": "123",
         first_name: "",
         last_name: ""
      });
      expect(create).not.toBeNull();
   });
});

