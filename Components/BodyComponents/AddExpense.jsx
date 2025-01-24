'use client'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function AddExpense({context}) {

    const bodyData = useContext(context);
    const [popExpense, setPopExpense] = useState({
        category:"",
        itemName:"",
        cost:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setPopExpense(popExpense=>({...popExpense,[name]:value}));
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', popExpense.category);
        formData.append('itemName', popExpense.itemName);
        formData.append('cost', popExpense.cost);

        const response = await axios.post('/api/expense',formData);
        const resResult = response.data.success;
        const resMessage = response.data.msg;

         if (resResult) {
            toast.success(resMessage);
            
            const response = await axios.get('/api/display');
            bodyData.setFund(response.data.displayFund[0].value);

            setPopExpense({
                category:"",
                itemName:"",
                cost:""
            })
        } else {
            toast.error("Error");
        }
    }
    return (
<           form onSubmit={onSubmitHandler} className='bg-head-back-1 font-medium pt-5 px-5 sm:pt-12 sm:pl-16 border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]'>
                <div className='flex justify gap-6'>
                    <p className='text-xl mt-4'>Category</p>
                    <select name='category' onChange={onChangeHandler} value={popExpense.category}  className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter" required>
                        <option value="">--Please choose a category--</option>
                        <option >Utilities</option>
                        <option >Gardening</option>
                        <option >Eating Out</option>
                        <option >Groceries</option>
                        <option >Commute</option>
                    </select>
                </div>
                <div className='flex justify gap-5'>
                    <p className='text-xl mt-4'>Item Name</p>
                    <input name='itemName' onChange={onChangeHandler} value={popExpense.itemName} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter name" required/>
                </div>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4'>Cost</p>
                    <input name='cost' onChange={onChangeHandler} value={popExpense.cost}  className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter amount" required/>
                </div>
                <button className='bg-head-back-1 font-medium border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]' type="submit ">ADD</button>
                
            </form>
    );
}

