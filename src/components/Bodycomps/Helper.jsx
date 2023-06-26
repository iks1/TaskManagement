import React from 'react'

const Helper = (props) => {
    return (
        <div className='flex-row sm:h-auto lg:h-[6vh] w-auto border-[#787486] border inline-flex lg:p-3 p-1 items-center rounded-[6px] m-1'>
            <img className='h-3 lg:h-4' src={props.capsImg} alt="image" />
            <p className='lg:m-3 m-1 text-[#787486] lg:text-[16px] text-[12px]'>{props.caption}</p>
            {props.arrow && <img src={props.arrow} className='h-3 lg:h-4' alt="image" />}
        </div>
    )
}

export default Helper
