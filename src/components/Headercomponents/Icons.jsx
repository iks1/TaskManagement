import React from 'react'
import calender from '../../icons/calender2.svg'
import notification from '../../icons/notification.svg'
import message from '../../icons/message-question.svg'
import arrow from '../../icons/arrow-down.svg'
import header from '../../icons/header.svg'

const Icons = () => {
    return (
        <div className='flex flex-row items-center justify-between lg:w-[20vw] min-[420px]:w-auto '>
            <div className='flex flex-row items center'>
                <img className='w-[3vh] m-1' src={calender} alt='caldender' />
                <img className='w-[3vh] m-1' src={message} alt='caldender' />
                <img className='w-[3vh] m-1' src={notification} alt='notification' />
            </div>
            <div className='flex lg:flex-row  items-center basis-[60%] lg:justify-between min-[320px]:m-3 '>
                <div className='lg:flex flex-col items-center min-[320px]:hidden '>
                    <h3 className='text-[#0D062D] text-[16px]'>Anima Agrawal</h3>
                    <p className='text-[14px] text-[#787486]'>UP,India</p>
                </div>
                <div className='m-1 flex flex-row lg:w-auto min-[320px]:w-full items-center justify-end'>
                    <img className='' src={header} alt='profile' />
                    <img className='w-[3vh] m-1 ' src={arrow} alt='arrow' />
                </div>
            </div>
        </div>
    )
}

export default Icons
