import { ConnectDB } from "@/lib/config/db"
import expenseModel from "@/lib/models/ExpenseModel";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();


export async function GET(request){
    const expenses = await expenseModel.find({})

    return NextResponse.json({expenses})
}


export async function POST(request){
    const formData = await request.formData()

    const expenseData = {
        category:`${formData.get('category')}`,
        itemName:`${formData.get('itemName')}`,
        value:`${formData.get('cost')}`
    }

    await expenseModel.create(expenseData);

    return NextResponse.json({sucess:true})
}