import React from 'react'
import Helper from './Helper'
import arrowdown from '../../icons/arrow-down.svg'
import filter from '../../icons/filter.svg'
import calander from '../../icons/calendar.svg'
import share from '../../icons/share.svg'
import line from '../../icons/line.svg'
import twoequals from '../../icons/twoequals.svg'
import fourdots from '../../icons/fourdots.svg'


const Heading2=()=>{
    return(
      <div className='flex justify-between lg:p-[14px] min-[320px]:p-[12px] w-full'>
        <div className='flex flex-row items-center'>
           <Helper capsImg={filter} caption='Filter' arrow={arrowdown}/>
           <Helper capsImg={calander} caption='Today' arrow={arrowdown}/>
        </div>
        <div className='flex flex-row items-center m-1 lg:basis-[20%] justify-between min-[320px]:w-auto'>
           <Helper capsImg={share} caption='Share'/>
           <img  src={line} alt='line'/>
           <img  src={twoequals} className='m-2 max-sm:h-[4.9vh]' alt='twoequals'/>
           <img  src={fourdots} alt='fourdots'/>
        </div>
      </div>
    )
  }
  
export default Heading2