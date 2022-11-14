/*********** بسم الله الرحمن الرحيم ************/

import app from "../server";
import { HOST, PORT } from "../server"; // ADDRESS AND PORT OF SERVER
import Client from "../database";       // Test Pool
import supertest from "supertest";

const req = supertest(app);

describe("Suite test server is running well or not!", () => {
   it("Spec to test the home page /", async () => {
      const res = await req.get('/');
      expect(res.status).toBe(200);
   });

   it("Are HOST and PORT defined?", async () => {
      expect(HOST && PORT).toBeDefined();
   });

   it("Response on home page text toEqual 'Hello, world 🌎'", async () => {
      const res = await req.get('/');
      expect(res.text).toEqual("Hello, world 🌎");
   });

   it("Is Pool connection set HOST and PORT defined?", async () => {
      expect(Client.connect()).toBeDefined();
   });
});

/**=====================================*/
/*      ======== سبحان الله ========       */
/*      ========  الحمد لله ========       */
/*      ====== لا إله إلا الله ========       */
/*      ======= الله اكبر ==========       */
/*      ========: ثم قل =========       */
/*      ====== اللهم اغفر لي =======       */
/*      ======= اللهم اهدني =======       */
/*      ======= اللهم ارزقني =======       */
/***************************************/