'use client'
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';

import ExpenseItem from './ExpensesComponents/ExpenseItem';

const ExpenseBody = () => {

    const counterContext = createContext();
    const [selectedDate1, setSelectedDate1] = useState(new Date("01-01-2020"));
    const [selectedDate2, setSelectedDate2] = useState(new Date());

    const [expensesData, setExpense] = useState([]);
    const [expensesDates, setExpDates] = useState([]);


    const fetchExpense = async () =>{
        const response = await axios.get('/api/expense');

        if (response.data.displayExpenses[0] == undefined) {
            setExpense();
        } else {
            setExpense(response.data.displayExpenses);
        }
        
        setExpDates(response.data.dates);

        console.log(response.data.displayExpenses);
        console.log(response.data.dates);
    }

    useEffect(()=>{
        fetchExpense();
    },[])


    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>All Expenses</h1>
            </div>

            <div className="d-flex flex-direction:column justify-evenly">

                <div className="flex justify-evenly">
                    <DatePicker width="640" height="480"
                        label="startRange"
                        value={selectedDate1}
                        onChange={(newValue) => setSelectedDate1(new Date(newValue))}
                    />
                    <DatePicker width="640" height="480"
                        label="endRange"
                        value={selectedDate2}
                        onChange={(newValue) => setSelectedDate2(new Date(newValue))}
                    />
                </div>


                <div className="flex justify-evenly">
                    <iframe width="350" height="350" 
                    src={'https://charts.mongodb.com/charts-project-0-kwirzsu/embed/charts?id=0e3fa54b-f19b-464a-af61-cef75829a01e&maxDataAge=60&theme=light&filter={"date":{$gte:"'+''+'",$lte:"'+''+'"}}&autoRefresh=true'}>
                    </iframe>
                </div>
            </div>

            {expensesDates.map((uniqueDate, index)=>{
                
                return (
                    <div key={index}>
                    <div>Expenses on {uniqueDate.slice(0,10)}</div>
                    <ExpenseItem expensesData={expensesData} uniqueDate={uniqueDate}/>
                    </div>
                )
            })}
            
        </div>
    )   
}

export default ExpenseBody
