// بسم الله الرحمن الرحيم

import { OrderClass } from "../orders"; 

const storeOrdersSpec = new OrderClass();

describe("Suite, Testting defined Order models👜👑", () => {
   it("Test for get all orders", async () => {
      expect(storeOrdersSpec.index).toBeDefined();
   });
   it("Show details about one orders", async () => {
      expect(storeOrdersSpec.show).toBeDefined();
   });
   it("Add a new orders, test", async () => {
      expect(storeOrdersSpec.create).toBeDefined();
   });
   it("Details of productd, test", async () => {
      expect(storeOrdersSpec.orderDetails).toBeDefined();
   });
});