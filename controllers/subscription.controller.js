import Subscription from '../models/subscription.model';

export const createSubscription = async(req, res,next) => {
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user : req.user._id,
        });

        res.status(201).json({success: true, data: subscription})
    }catch (e){
        next(e);

    }
};

export const getUserSubscriptions = async(req, res, next) => {
    try{
        if(req.user.id !== req.params.id){
            const error = new Error(" youre not owner of this content");
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id})
        res.status(200).json({success : true, data : subscriptions});
    } catch (e){
        next(e);
    }
};