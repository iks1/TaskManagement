import React from 'react'
import Board from './Bodycomps/Board'
import Heading1 from '../components/Bodycomps/Heading1'
import Heading2 from './Bodycomps/Heading2'

const Body = () => {
  return (
    <div className='w-full lg:border lg:p-3 min-[320px]:p-2'>
       <Heading1 />
       <Heading2 />
      <div className='flex flex-wrap min-[320px]:flex-col lg:flex-row'>
          <Board/>
      </div>
    </div>
  )
}

export default Body


