/* بسم الله الرحمن الرحيم */

import { Application, Request, Response } from "express";
import { UserDataType, UserClass } from "../models/users";

const store = new UserClass();

const index = async (_req: Request, res: Response): Promise<void> => {
   const user = await store.index();
   res.json(user);
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
      return res.json(user);
   }
   catch (error) {
      console.log(error);
      
   }
}

const authenticate = async (req: Request, res: Response) => {
   try {
      const user = await store.authenticate(req.body.email, req.body.password);
      return res.json(user);
   }
   catch (error) {
      console.log(error);
   }
}

const UserRoutes = async (app: Application): Promise<void> => {
   app.get('/users', index);
   app.get('/users/:id', show);
   app.post('/users', create);
   app.post('/users/authenticate', authenticate);
}

export default UserRoutes;