import React from 'react'
import Addnew from './Addnew'
import Card from './Card'

const List = () => {
  return (
    <div className='p-3 bg-gray-200 w-1/3'>
      <div>List Title</div>
      <Card/>
      <Addnew/>
    </div>
  )
}

export default List
