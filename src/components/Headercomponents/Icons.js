import React from 'react'
import calender from '../../icons/calender2.svg'
import notification from '../../icons/notification.svg'
import message from '../../icons/message-question.svg'
import arrow from '../../icons/arrow-down.svg'
import header from '../../icons/header.svg'

const Icons = () => {
    return (
        <div className='flex flex-row items-center justify-between w-[20vw]'>
            <div className='flex flex-row items center'>
                <img className='w-[3vh] m-1' src={calender} alt='caldender' />
                <img className='w-[3vh] m-1' src={message} alt='caldender' />
                <img className='w-[3vh] m-1' src={notification} alt='notification' />
            </div>
            <div className='flex flex-row items-center basis-[60%] justify-between'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-[#0D062D] text-[16px]'>Anima Agrawal</h3>
                    <p className='text-[14px] text-[#787486]'>UP,India</p>
                </div>
                <div className='m-1 flex flex-row'>
                    <img className='' src={header} alt='profile' />
                    <img className='w-[3vh] m-1' src={arrow} alt='arrow' />
                </div>
            </div>
        </div>
    )
}

export default Icons
