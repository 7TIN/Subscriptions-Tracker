import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers";
import authorize from '../middlewares/auth.middleware.js';
const usersRouter = Router();

usersRouter.get('/',getUsers);

usersRouter.get('/:id',authorize,getUser);

usersRouter.post('/',(req,res) => res.send({title : "Create the user"}));

usersRouter.put('/:id',(req,res) => res.send({title : "Update the user info"}));

usersRouter.delete('/:id',(req,res) => res.send({title : "Delete the user"}));

export default usersRouter;