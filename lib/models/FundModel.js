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
        default:new Date()
    }
})

var fundModel = null;


fundModel = mongoose.models.fund || mongoose.model('fund',Schema);

export default fundModel;