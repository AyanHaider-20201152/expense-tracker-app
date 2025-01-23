import { ConnectDB } from "@/lib/config/db"
import sumModel from "@/lib/models/SumModel";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();



export async function POST(request){
    const formData = await request.formData()
    const formValue = Number(formData.get('value'))

    var displayFund = await sumModel.find({title:"Remaining Funds"})
    displayFund = Number(displayFund[0].value)

    await sumModel.updateOne({title:"Remaining Funds"}, {value:formValue + displayFund}, {upsert: true});

    console.log(formValue)
    console.log(displayFund)
    return NextResponse.json({success:true, msg:"Funds Added"})
}