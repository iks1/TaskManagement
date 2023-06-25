import React from 'react'

const Helper = (props) => {
    return (
        <div className='flex-row h-[6vh] w-auto border-[#787486] border inline-flex p-3 items-center rounded-[6px] m-1'>
            <img src={props.capsImg} alt="image" />
            <p className='m-2 text-[#787486] text-[16px]'>{props.caption}</p>
            {props.arrow && <img src={props.arrow} alt="image" />}
        </div>
    )
}

export default Helper
