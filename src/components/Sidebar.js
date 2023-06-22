import React from 'react'
import Menu from './sidesomponents/Menu'
import Myprojects from './sidesomponents/Myprojects'
import Message from './sidesomponents/Message'

const Sidebar = () => {
  return (
    <div className='p-3 w-[300px] border  bg-white sidebar flex flex-col'>
       <Menu />
       <br/>
       <Myprojects />
       <br/>
       <Message />
    </div>
  )
}

export default Sidebar
