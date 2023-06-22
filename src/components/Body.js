import React from 'react'
// import Filter from './Filter'
//import List from './List'
import Board from './Board'

const Body = () => {
  return (
    <div className='w-full border p-3'>
      {/* <Filter /> */}
      <div className='flex flex-wrap'>
  
          <Board/>
    
      </div>
    </div>
  )
}

export default Body
