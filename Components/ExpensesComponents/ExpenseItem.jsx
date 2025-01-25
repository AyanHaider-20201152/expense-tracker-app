'use client'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function ExpenseItem({expensesData, uniqueDate}) {
    
    return (
    <div>
        {expensesData.filter((item)=> item.date.slice(0,10)===uniqueDate.slice(0,10)).map((item, index)=>{
           return (
                <div key={index}>
                    {item.value}
                
                </div>
           )
        })}
    </div>
    );
}
// .slice(0,10)