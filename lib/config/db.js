const mongoose = require("mongoose");

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://expense-tracker:hate@cluster0.8trqi.mongodb.net/expense-tracker');
    console.log("DB connected");
}