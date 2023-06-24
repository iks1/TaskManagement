import React from 'react'
import SearchBar from './Headercomponents/SearchBar'
import Icons from './Headercomponents/Icons'

const Header = () => {
  return (
    <div className='App-header p-7 border bg-[#F5F5F5] flex flex-row justify-between h-[10vh] items-center'>
      <SearchBar />
      <Icons />
    </div>
  )
}

export default Header
