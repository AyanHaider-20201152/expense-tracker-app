import { ConnectDB } from "@/lib/config/db"
import fundModel from "@/lib/models/FundModel";
import { Cursor } from "mongoose";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

var fundExists;

export async function GET(request){
    fundExists = await fundModel.exists({title:"Remaining Funds"})

    if (fundExists != null) {
        const fund = await fundModel.find({title:"Remaining Funds"})
        return NextResponse.json({fund, success:true})
    }

    else {
        const fund = await fundModel.find({title:"Remaining Funds"})
        return NextResponse.json({fund, success:false})
    }
}


export async function POST(request){
    const formData = await request.formData()
    const formValue = Number(formData.get('value'))
    var currentFund 

    if (fundExists){
        currentFund = Number(await fundModel.find({title:"Remaining Funds"}).value);
    }
    else {
        currentFund = 0;
        fundExists= true;
    }

    await fundModel.updateOne({title:"Remaining Funds"}, {value:formValue + currentFund}, {upsert: true});
    console.log(formValue)
    console.log(currentFund)
    return NextResponse.json({success:true, msg:"Funds Added"})
}