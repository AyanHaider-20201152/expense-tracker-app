import React from 'react'

const Header = () => {
    return (
        <div className='bg-head-back-2 text-head-text py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Xpense-Tracker</h1>

                <div className='flex justify-end items-center gap-3'>
                    <button className='bg-head-back-1 gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-head-text shadow-[-7px_7px_0px_#06402B]'>Expenses</button>
                    <button className='bg-head-back-1 gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-head-text shadow-[-7px_7px_0px_#06402B]'>Pnses</button>
                </div>
            </div>
            {/* <div className='text-center text-head-text my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Funds Remaining</h1>
            </div> */}
        </div>
    )
}

export default Header