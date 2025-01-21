import mongoose from "mongoose";

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
        default:Date.now(),
    }
})

var expenseModel = null;

if (mongoose.models.expenses) {
    expenseModel = mongoose.models.expenses;
} else {
    expenseModel = mongoose.model('expenses',Schema,'expenses');
}


export default expenseModel;