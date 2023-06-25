import React from "react";
import arrow from '../../icons/arrow.svg'
import linkicon from '../../icons/linkicon.svg'
import calender from '../../icons/calendar.svg'
import add from '../../icons/add-square.svg'

const Heading1=()=>{
    return(
      <div className='flex flex-row justify-between  p-[14px]'>
         <div className='flex flex-row items-center ' >
            <p className='font-bold text-[46px]'>Mobile App</p>
            <img className='m-[10px] w-[30px] h-[30px]' src={arrow} alt="" />
            <img className='w-[30px] h-[30px]' src={linkicon} alt=''/>
         </div>
         <div className='flex flex-row  items-center basis-[20%]'>
             <img src={add} alt=''/>
             <p className="text-[16px] font-medium text-[#5030E5]">invite</p>
             <img className='w-[38px] h-[38px] rounded-full' src='https://picsum.photos/200/300' alt=''/>
         </div>
      </div>
    )
  }


export default Heading1;