import { Router } from "express";

const usersRouter = Router();

usersRouter.get('/',(req,res) => res.send({title : "Get All users"}));

usersRouter.get('/:id',(req,res) => res.send({title : "Get user info"}));

usersRouter.post('/',(req,res) => res.send({title : "Create the user"}));

usersRouter.put('/:id',(req,res) => res.send({title : "Update the user info"}));

usersRouter.delete('/:id',(req,res) => res.send({title : "Delete the user"}));

export default usersRouter;