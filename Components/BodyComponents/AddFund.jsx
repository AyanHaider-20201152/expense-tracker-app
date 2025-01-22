'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFund= () => {
    const [popFund, setPopFund] = useState({
        value:""
    })

    const onChanceHandler = (event) =>{
        const name =event.target.name;
        const value = event.target.value;
        setPopFund(popFund=>({...popFund,[name]:value}));
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('value', popFund.value);
        const response = await axios.post('/api/fund',formData);
        if (response.data.success) {
            toast.success(response.data.msg);
        } else {
            toast.error("Error");
        }
    }
    return (
<           form onSubmit={onSubmitHandler} className='bg-head-back-1 font-medium pt-5 px-5 sm:pt-12 sm:pl-16 border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]'>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4'>Value</p>
                    <input name='value' onChange={onChanceHandler} value={popFund.value}  className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="number" placeholder="Enter amount" required/>
                </div>
                <button className='bg-head-back-1 font-medium border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]' type="submit ">ADD</button>
                
            </form>
    );
}

export default AddFund