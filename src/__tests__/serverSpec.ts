/*********** بسم الله الرحمن الرحيم ************/
/*      ======== سبحان الله ========       */
/*      ========  الحمد لله ========       */
/*      ====== لا إله إلا الله ========       */
/*      ======= الله اكبر ==========       */
/*      ========: ثم قل =========       */
/*      ====== اللهم اغفر لي =======       */
/*      ======= اللهم اهدني =======       */
/*      ======= اللهم ارزقني =======       */
/***************************************/

import app from "../server";
import supertest from "supertest";

const req = supertest(app);

describe("Suite test server is running or not!", () => {
   it("Spec test the home page /", async () => {
      const res = await req.get('/');
      expect(res.status).toBe(200);
   });
});