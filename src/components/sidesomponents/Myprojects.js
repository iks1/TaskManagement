import React from "react";


const projects = [
    { name: 'Mobile App', color: '#7AC555' },
    { name: 'Website Redisign', color: '#FFA500' },
    { name: 'Design System', color: '#E4CCFD' },
    { name: 'Wireframes', color: '#76A5EA' }
]

const Myprojects = () => {
    return (
        <div className="flex flex-col p-2">
            <div className="flex flex-row items-center w-full justify-between">
                <h3 className="text-sm font-bold text-[12px] text-[#787486] ">My Projects</h3>
                <h3 className="text-sm font-medium mr-0 text-[#787486]">+</h3>
            </div>
            <div className="flex flex-col w-full my-[8px] ">
                {projects.map((project) => (
                    <div className='flex items-center justify-start my-[8px]  hover:bg-gray-200 rounded-md cursor-pointer  hover:text-black text-[#787486]'>
                        <div className='w-2 h-2 rounded-full mx-[7px] ' style={{ backgroundColor: project.color }}></div>
                        <p className="text-sm font-medium  mx-[7px]">{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Myprojects;