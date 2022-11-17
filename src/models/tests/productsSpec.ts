// بسم الله الرحمن الرحيم

import { ProductClass } from "../products";

const storeProductSpec = new ProductClass();

describe("Suite, Testting defined Product models🎒🛍", () => {
   it("Test for get all Producters", async () => {
      expect(storeProductSpec.index).toBeDefined();
   });
   it("Show details about one Product", async () => {
      expect(storeProductSpec.show).toBeDefined();
   });
   it("Add a new Product test", async () => {
      expect(storeProductSpec.create).toBeDefined();
   });
   it("Delete a product test", async () => {
      expect(storeProductSpec.delete).toBeDefined();
   });
});
