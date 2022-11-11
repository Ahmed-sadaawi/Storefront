// /* بسم الله الرحمن الرحيم */

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_TOKEN } = process.env;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
   const authorizationHeader = req.headers.authorization;
   const token = authorizationHeader?.split(' ')[1];
   if(!token) return res.status(401).send("Token missing");

   try {
      jwt.verify(token, SECRET_TOKEN as string);
      next();
   }
   catch (error) {
      res.status(400);
      res.json({message: "Invalid Token", err: error});
   }
} 
export default verifyToken;