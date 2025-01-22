import React from "react";
import { Tooltip } from "@nextui-org/react";


const BarRoutes = () =>{
    

    return (
        <div className="ml-10 flex items-baseline space-x-4">

            <Tooltip content="Home"  className='text-white' placement='bottom' showArrow={true}>
                <a href="/" className="rounded-lg rounded-full hover:bg-gray-700 hover:text-white bg-transparent  px-3 py-2 text-sm font-medium text-white" >
                    <i className="fa-solid fa-house fa-xl" style={{'color': 'blue'}}></i>
                </a>
            </Tooltip>

            <Tooltip content="Tournaments" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-gamepad fa-xl"></i>
                </a>
            </Tooltip>

            <Tooltip content="My Entries" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-ticket fa-xl"></i>
                </a>
            </Tooltip>
            
            <Tooltip content="All time rankings" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-list-ol fa-xl"></i>
                </a>
            </Tooltip>
            <Tooltip content="Tournament Rules" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-scale-balanced fa-xl"></i>
                </a>
            </Tooltip>
            <Tooltip content="Report a bug." className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <i className="fa-solid fa-bug fa-xl"></i>
                </a>
            </Tooltip>
            <Tooltip content="Help" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-circle-question fa-xl"></i>
                    
                </a>
            </Tooltip>
            
        </div>
    );
};

export default BarRoutes;