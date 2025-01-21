'use client'
import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AddExpense() {
    return (
        <div>
            <Popup trigger=
                {<button> Increase Your Expenses </button>} 
                modal nested>
                {
                    close => (
                        <div className='bg-head-back-1 gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-head-text '>
                            <div className='content'>
                                Welcome to GFG!!!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    );
}