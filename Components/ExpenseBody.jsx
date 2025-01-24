'use client'
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';


const ExpenseBody = () => {

    const counterContext = createContext();
    const [expenseValue, setExpense] = useState([]);

    const fetchExpense = async () =>{
        const response = await axios.get('/api/expense');

        if (response.data.displayExpense[0] === undefined) {
            setExpense();
        } else {
            setExpense(response.data.displayExpense);
        }
        
        console.log(response.data.displayExpense)
    }

    useEffect(()=>{
        fetchExpense();
    },[])



    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>All Expenses</h1>
            </div>

            <div className='flex justify-evenly items-center'>
                <div className='d-flex flex-column '>

                    <div>
                    <Dropdown className='text-3xl sm:text-5xl font-medium border border-solid border-head-text' autoClose={"false"}>
                            <Dropdown.Toggle>Open Menu</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    Home Page
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       
                    </div>

                </div>
            </div>


        </div>
    )   
}

export default ExpenseBody
