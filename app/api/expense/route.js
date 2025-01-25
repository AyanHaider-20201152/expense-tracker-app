import { ConnectDB } from "@/lib/config/db"
import expenseModel from "@/lib/models/ExpenseModel";
import sumModel from "@/lib/models/SumModel";
const { NextResponse } = require("next/server")

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();

var displayExpenses;

export async function GET(request){
    displayExpenses = await expenseModel.find({date:{$gte:new Date("2025-01-18"),$lte:new Date("2025-01-26")}})
    

    if (displayExpenses[0] == undefined) {
        await expenseModel.create({
        });
    }
    
    var dates = await expenseModel.distinct("date")
    return NextResponse.json({dates, displayExpenses, success:true})

}



export async function POST(request){
    const formData = await request.formData()
    const formValue = Number(formData.get('cost'))

    const expenseData = {
        category:`${formData.get('category')}`,
        itemName:`${formData.get('itemName')}`,
        value:`${formData.get('cost')}`
    }

    var displayFund = await sumModel.find({title:"Remaining Funds"})
    displayFund = Number(displayFund[0].value)

    await expenseModel.create(expenseData);
    await sumModel.updateOne({title:"Remaining Funds"}, {value:displayFund - formValue}, {upsert: true});


    return NextResponse.json({success:true, msg:"Expense Added"})
}

