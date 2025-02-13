import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async(req,res,next) =>{

    const session = await mongoose.startSession();
    session.startTransaction();
    try {

        const {name , email, password} = req.body

        const existingUser = await User.fineOne({email});
        
        if (existingUser){
            const error = new Error("User already Exists");
            // res.error("Transactions Failed");
            error.statusCode = 409;
            throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUsers = await user.create([{name, email, password:hashedPassword}], {session});

    const token = jwt.sign({userId: newUsers[0]._id} , JWT_SECRET, {expiresIn : JWT_EXPIRES_IN});

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
        success: true,
        Message: 'User Created Successfully',
        data: {
            token,
            user : newUsers[0],
        }
    })
    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

};

export const signIn = async(req, res, next) =>{

};

export const signOut = async(req, res, next) =>{

};