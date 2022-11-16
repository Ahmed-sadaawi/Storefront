// /* بسم الله الرحمن الرحيم */

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_TOKEN } = process.env;

const verifyToken = (req: Request, res: Response, next: Function) => {
   const authorizationHeader = req.headers.authorization as string;
   const token = authorizationHeader.split(" ")[1];
   if(!token) {
      return res.status(400).send("Token missing");
   }

   try {
      jwt.verify(token, SECRET_TOKEN as string);
      next();
   }
   catch (error) {
      res.status(400);
      res.json({message: "Invalid Token", err: error});
      return;
   }
} 
export default verifyToken;