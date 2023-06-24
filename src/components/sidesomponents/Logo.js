import React from "react"; 
import logo from "../../icons/logo.svg" 
import arrow from "../../icons/logoarrow.svg"


const Logo =()=>{
    const handleclick=()=>{
        console.log("clicked")
    }
    return(
        <div className="flex flex-row items-center jusitify-evenly">
            <div className="flex flex-row items-center m-2 basis-[75%]">
                <img src={logo} alt="image" />
                <p className="m-2">Project M</p>
            </div>
            <button onClick={handleclick}>
                 <img src={arrow} alt="close the bar logo"/>
             </button>
        </div>
    )
}

export default Logo;