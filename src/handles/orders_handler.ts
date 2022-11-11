/* بسم الله الرحمن الرحيم */

import {Request, Response, Application} from "express";
import verifyToken from "../middleware/jwt";
import { OrderDataType, OrderDetailsDataType, OrderClass } from "../models/orders";

const order = new OrderClass();

const index = async (req:Request, res:Response): Promise<void>  => {
   try {
      const index = await order.index();
      res.json(index);
   }
   catch (error) {
      res.status(404).send("🙂");
   }
}

const show = async (req:Request, res:Response): Promise<void>  => {
   try {
      const show = await order.show(parseInt(req.body.user_id));
      res.json(show);
   }
   catch (error) {
      res.status(404).send("🙂");
   }
}

const create = async (req:Request, res:Response) => {
   try {
      const orderPassData: OrderDataType = { 
         user_id: req.body.user_id,
         status: req.body.status
      };
      const create = await order.create(orderPassData);
      return res.json(create);
   }
   catch (error) {
      res.status(404).send(error);
   }
}

const orderDetails = async (req:Request, res:Response): Promise<void> => {
   try {
      const detailsPassData: OrderDetailsDataType = {
         order_id: req.body.order_id,
         product_id: req.body.product_id,
         quantity:req.body.quantity
      } ;
      const create = await order.orderDetails(detailsPassData);
      res.json(create);
   }
   catch (error) {
      res.status(404).send("🙂");
   }
}

const orderHandler = async (app: Application): Promise<void> => {
   app.get('/orders'          ,           index);
   app.get('/orders/:user_id' , verifyToken, show);
   app.post('/orders'         , verifyToken, create);
   app.post('/orders/products', verifyToken, orderDetails);
}

export default orderHandler;

