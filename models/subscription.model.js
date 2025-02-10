import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Subscription is required"],
        trim : true,
        minLength : 2,
        maxLength : 100,
    },
    price : {
        type : number,
        required : [true, "Price is required"],
        minLength : [0, "cant be less than 0"],
        // maxLength : [1000,"cant be greater than 1000"],
    },
    currency : {
        type : String,
        enum : ['USD , INR'],
        default : 'INR',
    },
    frequency : {
        type : String,
        enum : ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category : {
        type : String,
        enum : ['sports', 'gym', 'ott', 'news', 'entertaintment', 'technology', 'finance', 'politics','other' ],
        required : true,
    },
    paymentMethod : {
        type : String,
        required : true,
        trim : true,
    },

    status : {
        type : String,
        enum : ['active', 'cancelled','expired'],
        default : 'active',
    },
    startDate : {
        type : Date,
        required : true,
        validate : {
            validator : (value) => value <= new Date(),
            message : "Start date must be in past", 
        },
    },
    renewalDate : {
        type : Date,
        // required : true,
        validate : {
            validator : function (value)
            { 
                return value > this.startDate;
            },
            message : "Renewal date must be in greater than start date", 
        },
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true,
    },
},{timestamps : true});

subscriptionSchema.pre('save', function(){
    if (!renewalDate){
        const renewalPeriods = {
            daily : 1,
            weekly : 7,
            monthly : 30,
            yearly : 365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + this.renewalPeriods[this.frequency]);
    }
    if (this.renewalDate < new Date()){
        this.status = 'expried';
    }
    next();
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;