'use client'
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CountUp from "react-countup";
import AddFund from './BodyComponents/AddFund';
import AddExpense from './BodyComponents/AddExpense';


const Body = () => {

    const counterContext = createContext();
    const [fundValue, setFund] = useState([]);

    const fetchFund = async () =>{
        const response = await axios.get('/api/display');

        if (response.data.displayFund[0] === undefined) {
            setFund(0);
        } else {
            setFund(response.data.displayFund[0].value);
        }
        
        console.log(response.data.displayFund)
    }

    useEffect(()=>{
        fetchFund();
    },[])



    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <ToastContainer theme="dark"/>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Remaining Funds</h1>
            </div>

            <div className='flex justify-center items-center gap-2 text-3xl sm:text-5xl font-medium border border-solid border-head-text'>
                <CountUp duration={2.5} className='counter' end={fundValue}/>
                <h1> Taka</h1>
            </div>
            
            <counterContext.Provider value ={{fundValue, setFund}}>
                <AddFund context={counterContext} />  
                <AddExpense context={counterContext} />    
            </counterContext.Provider>


        </div>
    )   
}

export default Body
