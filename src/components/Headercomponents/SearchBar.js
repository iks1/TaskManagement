import React from 'react'
import search from '../../icons/searchlogo.svg'

const SearchBar = () => {
    return (
        <div className='bg-[#F5F5F5] flex flex-row items-center w-[20vw] h-[5vh]'>
            <img className=' w-[2.5vh]' src={search} alt='search logo' />
            <input className='focus:outline-none bg-transparent text-[#787486] text-[14px] m-3' placeholder='Search for anything' type='text'/>
        </div>
    )
}

export default SearchBar
