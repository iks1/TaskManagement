import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src="https://picsum.photos/200/300" alt="profile" className='rounded-full h-10 w-10 mb-[-19px] z-10'/>
      <div className='bg-[#F5F5F5] flex flex-col items-center p-4 rounded-2xl h-[200px] w-[206px] justify-around'>
         <p className='font-bold text-xs'>Thoughts Time</p>
         <p className='text-[#787486] text-[12px]'>we don't hve any notice for you now till then you can share you thoughts with your peers</p>
         <div className='bg-white w-[166px] h-[40px] flex justify-center items-center'>
            <p className='text-[14px]'>Write a Message</p>
         </div>
      </div>
    </div>
  )
}

export default Message
