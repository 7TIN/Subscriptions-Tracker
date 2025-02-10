import { Router } from "express";

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', (req,res) => res.send({ title : "get all Subscriptions"}));
subscriptionsRouter.get('/:id', (req,res) => res.send({ title : "get users Subscriptions"}));
subscriptionsRouter.post('/', (req,res) => res.send({ title : "create the Subscription"}));
subscriptionsRouter.put('/:id', (req,res) => res.send({ title : "update the Subscription"}));
subscriptionsRouter.delete('/:id', (req,res) => res.send({ title : "delete the subscription"}));
subscriptionsRouter.get('/user/:id', (req,res) => res.send({ title : "get user all subscriptions"}));
subscriptionsRouter.put('/:id/cancle', (req,res) => res.send({ title : "cancle user all subscriptions"}));
subscriptionsRouter.get('/upcoming-renewals', (req,res) => res.send({ title : "get upcoming renewals"}));


export default subscriptionsRouter;