import React from 'react'
import calender from '../../icons/calender2.svg'
import notification from '../../icons/notification.svg'
import message from '../../icons/message-question.svg'

const Icons = () => {
  return (
    <div className='flex flex-row items-center justify-between w-[20vw]'>
       <div className='flex flex-row items center'>
          <img className='w-[2.5vh] m-1' src={calender} alt='caldender'/>
          <img className='w-[2.5vh] m-1' src={message} alt='caldender'/>
          <img className='w-[2.5vh] m-1' src={notification} alt='notification'/>
       </div>
       <div className='flex flex-row items-center'>
           <div className='flex flex-col items-center'>
              <h3 className='text-[#0D062D] text-[16px]'>Anima Agrawal</h3>
              <p className='text-[14px]'>up, uttarpradesh</p>
           </div>
           <div className='m-1'>
                <img className='h-[38px] w-[38px] rounded-full' src='https://picsum.photos/200/300' alt='profile'/>
           </div>
       </div>
    </div>
  )
}

export default Icons
