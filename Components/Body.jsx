'use client'
import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import axios from 'axios';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddFund from './BodyComponents/AddFund';
import AddExpense from './BodyComponents/AddExpense';

const Body = () => {

    const [fund, setFund] = useState([]);

    const fetchFund = async () =>{
        const response = await axios.get('/api/fund');

        if (response.data.fund === undefined) {
            setFund(0);
        } else {
            setFund(response.data.fund[0].value);
        }
        
        console.log(response.data.fund)
    }

    useEffect(()=>{
        fetchFund();;
    },[])



    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <ToastContainer theme="dark"/>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Remaining Funds</h1>
            </div>

            <div className='flex justify-center items-center gap-2 text-3xl sm:text-5xl font-medium'>
                <Counter number={fund} />
                <h1> Taka</h1>
            </div>
            

            <AddFund/>
            <AddExpense />    

        </div>
    )   
}

export default Body