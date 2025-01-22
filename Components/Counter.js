'use client'
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number}) {
    console.log(number)
    return (
        <div>
            <CountUp duration={2.5} className='counter' start="0" end={number}/>
        </div>
    );
}