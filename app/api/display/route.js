import { ConnectDB } from "@/lib/config/db"
import sumModel from "@/lib/models/SumModel";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

var displayFund;

export async function GET(request){
    displayFund = await sumModel.find({title:"Remaining Funds"})

    if (displayFund[0] == undefined) {
        await sumModel.create({
            title:"Remaining Funds", 
            value:0
        });
        
        displayFund = await sumModel.find({title:"Remaining Funds"})
    }
    
    console.log(displayFund[0].value)
    return NextResponse.json({displayFund, success:true})

}


