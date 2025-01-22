const mongoose = require("mongoose");

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://expense-tracker:#####@cluster0.8trqi.mongodb.net/expense-tracker');
    console.log("DB connected");
}
