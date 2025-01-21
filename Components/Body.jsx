'use client'
import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import axios from 'axios';
import { ToastContainer} from 'react-toastify';

const Body = () => {

    const [fund, setFund] = useState([]);
    const [popFund, setPopFund] = useState(false)
    const [popExpense, setPopExpense] = useState({
        category:"Utilities",
        itemName:"",
        cost:""
    })

    const onChanceHandler = (event) =>{
        const name =event.target.name;
        const value = event.target.value;
        setPopExpense(popExpense=>({...popExpense,[name]:value}));
    }

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', popExpense.category)
        formData.append('itemName', popExpense.itemName)
        formData.append('cost', popExpense.cost)
        const response = await axios.post('/api/expense')
        if (response.data.success) {
            toast.success("Expense added")
        } else {
            toast.error("Error")
        }
    }

    const fetchFund = async () =>{
        const response = await axios.get('/api/fund');
        setFund(response.data.fund);
        console.log(response.data.fund)
    }

    var fundItems = null;

    useEffect(()=>{
        fetchFund();
    },[])


    function togglePopFund() {
        setPopFund(!popFund);
    };
    function togglePopExpense() {
        setPopExpense(!popExpense);
    };

    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <ToastContainer theme="dark"/>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Remaining Funds</h1>
            </div>

            <div className='flex justify-center items-center gap-2 text-3xl sm:text-5xl font-medium'>
                {
                    fundItems = fund.map((item, index)=>{
                        console.log(item.value);
                })}

                <Counter key={fundItems.index} number={fundItems.value} />    
                <h1> Taka</h1>
            </div>
            
            {/* <div className='bg-head-back-1 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]'>
                <button onClick={() => setPopFund(true)} >Add</button>

                {
                    popFund && 
                    <div>
                        <div className='bg-head-back-1 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]'s>
                            <h2>PPopuop</h2>
                            <button onClick={()=> setPopFund(false)}>X</button>
                        </div>
                    </div>
                }
            </div> */}

            <form onSubmit={onSubmitHandler} className='bg-head-back-1 font-medium pt-5 px-5 sm:pt-12 sm:pl-16 border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]'>
                <div className='flex justify gap-6'>
                    <p className='text-xl mt-4'>Category</p>
                    <select name='category' onChange={onChanceHandler} value={popExpense.category}  className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter" required>
                        <option value="Utilities">Utilities</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Eating Out">Eating Out</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Commute">Commute</option>
                    </select>
                </div>
                <div className='flex justify gap-5'>
                    <p className='text-xl mt-4'>Item Name</p>
                    <input name='itemName' onChange={onChanceHandler} value={popExpense.itemName} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter" required/>
                </div>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4'>Cost</p>
                    <input name='cost' onChange={onChanceHandler} value={popExpense.cost}  className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter" required/>
                </div>
                <button className='bg-head-back-1 font-medium border border-solid border-head-text hover:shadow-[-4px_4px_0px_#06402B]' type="submit ">ADD</button>
                
            </form>
                

        </div>
    )   
}

export default Body