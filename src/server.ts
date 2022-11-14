/* 
   ===============================| بسم الله الرحمن الرحيم |==========================
   ❤️والصلاة والسلام علي رسول الله سيدنا محمد خير خلق الله اجمعين صلوات ربي وتسليماته عليه صلي الله عليه وسلم
   ============================================================================
*/

import express, { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import UserRoutes from "./handles/users_handler";
import ProductRoutes from "./handles/products_handler";
import orderHandler from "./handles/orders_handler";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express();
export const HOST:number|string = process.env.HOST || "localhost";
export const PORT:number = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req:Request, res:Response) => res.send("Hello, world 🌎"));
UserRoutes(app);
ProductRoutes(app);
orderHandler(app);

app.listen(PORT, () => console.log(`Server runs at http://${HOST}:${PORT}`));

export default app;