import { Router } from "express";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller";
import authorize from '../middlewares/auth.middleware.js'
const subscriptionsRouter = Router();

subscriptionsRouter.get('/', (req,res) => res.send({ title : "get all Subscriptions"}));
subscriptionsRouter.get('/:id', (req,res) => res.send({ title : "get users Subscriptions"}));
subscriptionsRouter.post('/', authorize ,createSubscription);
subscriptionsRouter.put('/:id', (req,res) => res.send({ title : "update the Subscription"}));
subscriptionsRouter.delete('/:id', (req,res) => res.send({ title : "delete the subscription"}));
subscriptionsRouter.get('/user/:id', authorize, getUserSubscriptions);
subscriptionsRouter.put('/:id/cancle', (req,res) => res.send({ title : "cancle user all subscriptions"}));
subscriptionsRouter.get('/upcoming-renewals', (req,res) => res.send({ title : "get upcoming renewals"}));


export default subscriptionsRouter;