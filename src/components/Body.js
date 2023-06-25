import React from 'react'
import Board from './Board'
import Heading1 from '../components/Bodycomps/Heading1'
import Heading2 from './Bodycomps/Heading2'

const Body = () => {
  return (
    <div className='w-full border p-3'>
       <Heading1 />
       <Heading2 />
      <div className='flex flex-wrap'>
          <Board/>
      </div>
    </div>
  )
}

export default Body


