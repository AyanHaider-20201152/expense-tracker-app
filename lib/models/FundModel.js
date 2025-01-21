import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
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

var fundModel = null;

if (mongoose.models.fund) {
    fundModel = mongoose.models.fund;
} else {
    fundModel = mongoose.model('fund',Schema,'fund');
    const currentFund = {
        title:"Remaining Funds", 
        value:"0"
    };
    fundModel.create(currentFund);
}


export default fundModel;