import React from "react";


const projects = [
    { name: 'Mobile App', color: '#7AC555' },
    { name: 'Website Redisign', color: '#FFA500' },
    { name: 'Design System', color: '#E4CCFD' },
    { name: 'Wireframes', color: '#76A5EA' }
]

const Myprojects = () => {
    return (
        <div>
            <div className="flex flex-row align-middle p-2">
                <h3 className="text-sm font-medium ">My Projects</h3>
                {/* <h3 className="text-sm font-medium mr-0">+</h3> */}
            </div>
            <div>
                {projects.map((project) => (
                    <div className='flex items-center p-2 space-x-2 hover:bg-gray-200 rounded-md cursor-pointer ]'>
                        <div className='w-2 h-2 rounded-full' style={{ backgroundColor: project.color }}></div>
                        <p className="text-sm font-medium">{project.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Myprojects;