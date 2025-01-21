import { ConnectDB } from "@/lib/config/db"
import fundModel from "@/lib/models/FundModel";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();


export async function GET(request){
    const fund = await fundModel.find({})

    return NextResponse.json({fund})
}


export async function POST(request){
    const formData = await request.formData()

    const fundData = {
        title:`${formData.get('title')}`,
        value:`${formData.get('value')}`,
    }

    await fundModel.create(fundData);

    return NextResponse.json({sucess:true})
}