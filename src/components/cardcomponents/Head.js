import React from 'react'
import add from '../../icons/add-square.svg'

function Head({board}) {
  return (
    <div className='w-[80%] flex flex-col items-center'>
        <div className='flex flex-row items-center justify-between w-full'>
           <div className='inline-flex flex-row items-center w-auto justify-between'>
              <div className={`w-[8px] h-[8px] rounded-full ${board.color}`}></div>
              <p className='text-[16px] m-2'>{board.title}</p>
              <div className='text-[12px] bg-[#E0E0E0] text-[#625F6D] w-[20px] h-[20px] rounded-full items-center flex justify-center font-medium'>{board.length}</div>
           </div>
           <div>
               <img src={add} alt='add' />
           </div>
        </div>
        <div className={`w-full h-[2px] ${board.color} m-[30px]`}></div>
    </div>
  )
}

export default Head