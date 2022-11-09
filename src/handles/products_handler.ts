/* بسم الله الرحمن الرحيم */

import { Application, Request, Response } from "express";
import { ProductDataType, ProductClass } from "../models/products";

const store = new ProductClass();

const index = async (_req: Request, res: Response): Promise<void> => {
   try {
      const product = await store.index();
      res.json(product);
   }
   catch (error) {
      console.log(error);
      res.status(504).send("مش هقولك🙂");
   }
}

const show = async (req: Request, res: Response): Promise<void> => {
   try {
      const product = await store.show(parseInt(req.params.id));
      res.json(product);
   } catch (error) {
      console.log(error);
   }
}

const create = async (req: Request, res: Response) => {
   const productDataPass: ProductDataType = {
      id: req.body.id,
      name: req.body.name,
      details: req.body.details,
      price: req.body.price,
   };
   try {
      
      const product = await store.create(productDataPass);
      res.json(product);
      console.log(productDataPass);
   }
   catch (error) {
      console.log(error);
      
   }
}
const del = async (req: Request, res: Response) => {
   try {
      const product = await store.delete(parseInt(req.params.id as string));
      res.json(product);
   }
   catch (error) {
      console.log(error);
   }
}

const ProductRoutes = async (app: Application): Promise<void> => {
   app.post('/products', create);
   app.get('/products', index);
   app.get('/products/:id', show);
   app.delete('/products/:id', del);
}

export default ProductRoutes;