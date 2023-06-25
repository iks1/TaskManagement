import React from "react";
import arrow from '../../icons/arrow.svg'
import linkicon from '../../icons/linkicon.svg'
import calender from '../../icons/calendar.svg'
import add from '../../icons/add-square.svg'
import heading1 from '../../icons/heading1.svg'

const Heading1=()=>{
    return(
      <div className='flex flex-row justify-between  p-[14px]'>
         <div className='flex flex-row items-center ' >
            <p className='font-bold text-[46px]'>Mobile App</p>
            <img className='m-[10px] w-[30px] h-[30px]' src={arrow} alt="" />
            <img className='w-[30px] h-[30px]' src={linkicon} alt=''/>
         </div>
         <div className='flex flex-row  items-center basis-[20%] justify-between'>
             <img src={add} alt=''/>
             <p className="text-[16px] font-medium text-[#5030E5]">invite</p>
             <img className='' src={heading1} alt=''/>
         </div>
      </div>
    )
  }


export default Heading1;