import express from 'express';
import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import authRouter from './routes/auth.routes.js';
import subscriptionsRouter from './routes/subscription.route.js';
import usersRouter from './routes/user.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/subscriptions',subscriptionsRouter);


app.get('/',(req,res)=>{
    res.send("Welcome to the subscription api ");
})

app.listen(PORT, async()=>{
    console.log(` server running of port http://localhost:${PORT}`);

    await connectToDatabase();
})


export default app;
