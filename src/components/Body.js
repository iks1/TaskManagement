import React from 'react'
import Board from './Board'
import linkicon from '../icons/linkicon.svg'
import arrow from '../icons/arrow-square-up.svg'
import calender from '../icons/calendar.svg'

const Body = () => {
  return (
    <div className='w-full border p-3'>
       {/* <Filter /> */}
       <Heading1 />
      <div className='flex flex-wrap'>
          <Board/>
      </div>
    </div>
  )
}

export default Body


const Heading1=()=>{
  return(
    <div className='flex flex-row justify-start  p-[14px]'>
       <div className='flex flex-row items-center basis-9/12 p-8' >
          <p className='font-bold text-[46px]'>Mobile App</p>
          <img className='m-[10px] w-[30px] h-[30px]' src={arrow} alt="" />
          <img className='w-[30px] h-[30px]' src={linkicon} alt=''/>
       </div>
       <div className='flex flex-row justify-evenly items-center'>
           <img src={calender} alt=''/>
           <p>invite</p>
           <img className='w-[12px] h-[12px] rounded-full' src='https://picsum.photos/200/300' alt=''/>
       </div>
    </div>
  )
}