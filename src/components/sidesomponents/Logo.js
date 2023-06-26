import React from "react";
import logo from "../../icons/logo.svg"
import arrow from "../../icons/logoarrow.svg"


const Logo = ({ handleclick, showTitle }) => {
    return (
        <div className="flex flex-row items-center justify-end h-[10vh] w-full ">
            {
                showTitle &&
                <div className="flex flex-row items-center m-2 ">
                    <img src={logo} alt="image" />
                    <p className="m-2">Project M</p>
                </div>
            }
            <button onClick={handleclick} className="mr-0">
                <img className="mr-0" src={arrow} alt="close the bar logo" />
            </button>
        </div>
    )
}

export default Logo;