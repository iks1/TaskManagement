import React from 'react'
import Menu from './sidesomponents/Menu'
import Myprojects from './sidesomponents/Myprojects'
import Message from './sidesomponents/Message'
import Logo from './sidesomponents/Logo'
import { useState } from 'react'
import arrow from "../icons/logoarrow.svg"

const Sidebar = () => {
  const [projects, setProjects] = useState(true);

  const handleclick =()=>{
    setProjects(!projects)
  }
  return (
    <>
    {!projects && <button onClick={handleclick} className="mr-0 flex flex-col justify-start mt-[40px]">
                <img className="mr-0" src={arrow} alt="close the bar logo" />
            </button>}
    {projects &&
    <div className={`${projects? "p-3":"p-0"}  ${projects? "w-[300px]":"w-auto"} border  bg-white sidebar flex flex-col ${projects?"translate-x-0" : "translate-x-[-50px]"}  ease-in-out duration-300`}>
       { !projects && <p className='flex flex-row justify-end]'>H</p>}
        { projects &&<Logo handleclick={handleclick} showTitle={projects} />}
        <br/>
        {projects && <Menu />}
       <br/>
       {projects && <Myprojects />}
       <br/>
       {projects && <Message />}
    </div>}
    </>
  )
}

export default Sidebar
