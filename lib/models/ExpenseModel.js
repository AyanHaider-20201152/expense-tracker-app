import mongoose from "mongoose";

const days = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}

const Schema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
    },
    itemName:{
        type:String,
        required:true,
    },
    value:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:new Date(),
    },
    day:{
        type:String,
        default:days[new Date().getDay()]
    }
})

var expenseModel = null;

if (mongoose.models.expenses) {
    expenseModel = mongoose.models.expenses;
} else {
    expenseModel = mongoose.model('expenses',Schema,'expenses');
}


export default expenseModel;