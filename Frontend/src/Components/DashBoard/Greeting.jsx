import React from 'react'

import student from '../../assets/studentGreet.png'
const   Greeting = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
let date = d.getDate();
let year=d.getFullYear();
  return (
    <div className='w-[95%]  m-4 rounded-3xl text-white bg-[#925FE2] flex'>
    <div id="left" className='w-[45%]  px-20  py-6 flex flex-col justify-between '>
     <h6 className='text-2xl opacity-80  mt-4'>  {name} {date} ,  {year}</h6>

     <div>
        <h1 className='text-3xl'>Welcome Back John!</h1>
        <p className='text-md opacity-80'>Always stay updated in your student portal</p>
     </div>
    </div>
    <div id="right" className='w-[55%] flex  items-end justify-start'>
        <img src={student} alt="student image " />
    </div>
    </div>
  )
}

export default Greeting