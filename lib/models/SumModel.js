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

var sumModel = null;


sumModel = mongoose.models.sum || mongoose.model('sum',Schema);


export default sumModel;