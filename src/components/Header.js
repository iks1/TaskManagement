import React from 'react'
import SearchBar from './Headercomponents/SearchBar'
import Icons from './Headercomponents/Icons'

const Header = () => {
  return (
    <div className='App-header lg:p-7 min-[320]:p-0 min-[320]:pl-3 lg:border bg-white flex flex-row justify-between h-[10vh] items-center'>
      <SearchBar />
      <Icons />
    </div>
  )
}

export default Header
