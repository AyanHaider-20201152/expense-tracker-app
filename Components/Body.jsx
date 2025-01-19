import React from 'react'
import Counter from './Counter'


const Body = () => {
    return (
        <div className='bg-body-back text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Remaining Funds</h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='text-3xl sm:text-5xl font-medium'>
                    <Counter number={10000} title="Taka"/>
                </div>
            </div>
        </div>
    )   
}

export default Body