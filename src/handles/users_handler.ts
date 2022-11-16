/* بسم الله الرحمن الرحيم */

import { Application, Request, Response } from "express";
import { UserDataType, UserClass } from "../models/users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import verifyToken from "../middleware/jwt";
dotenv.config();
const { SECRET_TOKEN } = process.env;

const store = new UserClass();

const index = async (_req: Request, res: Response): Promise<void> => {
   try {
      const user = await store.index();
      res.json(user);
   }
   catch (error) {
      console.log(error);
   }
}

const show = async (req: Request, res: Response): Promise<void> => {
   try {
      const user = await store.show(parseInt(req.params.id));
      res.json(user);
   } catch (error) {
      console.log(error);
      
   }
}

const create = async (req: Request, res: Response) => {
   const UserDataPass: UserDataType = {
      username  :req.body.username,
      email     :req.body.email,
      password  :req.body.password,
      first_name:req.body.first_name,
      last_name :req.body.last_name,
   };
   try {
      const user = await store.create(UserDataPass);
      const token= jwt.sign({user: user}, SECRET_TOKEN as string);
      return res.json({user:user,token:token});
   }
   catch (error) {
      res.status(400);
      res.json(error);
   }
}

const authenticate = async (req: Request, res: Response) => {
   try {
      const User = await store.authenticate(req.body.email, req.body.password);
      const token= jwt.sign({u: User}, SECRET_TOKEN as string);
      return res.json({user:User,token:token});
   }
   catch (error) {
      res.status(401);
      res.json({error});
   }
}

const UserRoutes = async (app: Application): Promise<void> => {
   app.get('/users',verifyToken, index);
   app.get('/users/:id',verifyToken, show);
   app.post('/users', create);
   app.post('/users/authenticate', authenticate);
}

export default UserRoutes;