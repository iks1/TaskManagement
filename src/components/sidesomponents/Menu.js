import React from "react";
import messages from "../message.svg"
import profile from "../profile.svg"
import task from "../task.svg"
import home from "../home.svg"
import settings from "../settings.svg"

const menu = [
    { name: 'Home', icon: home },
    { name: 'Messages', icon: messages },
    { name: 'Tasks', icon: task },
    { name: 'Profile', icon: profile },
    { name: 'Settings', icon: settings }
]
const Menu = () => {
    return (
        <div>
            {menu.map((item, index) => (
                <div key={index} className='flex items-center p-2 space-x-2 hover:bg-gray-200 rounded-md cursor-pointer ]'>
                    <img src={item.icon} alt={item.name} className='w-6 h-6' />
                    <p className="text-sm font-medium">{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Menu;