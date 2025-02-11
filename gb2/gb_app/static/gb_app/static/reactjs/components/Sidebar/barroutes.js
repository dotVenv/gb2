import React from "react";
import { Tooltip } from "@nextui-org/react";


const BarRoutes = ({userInfo, uri_endpoint}) =>{
    

    return (
        <div className="ml-10 flex items-baseline space-x-4">

            <Tooltip content="Home"  className='text-white' placement='bottom' showArrow={true}>
                <a href="/"  className="rounded-lg rounded-full hover:bg-gray-700 hover:text-white bg-transparent  px-3 py-2 text-sm font-medium text-white" >
                    <i className="fa-solid fa-house fa-xl" style={uri_endpoint.value.length == 0 ? {'color': '#ADD8E6'} : {}}></i>
                </a>
            </Tooltip>

            <Tooltip content="Tournaments" className="text-white" placement='bottom' showArrow={true}>
                <a href={userInfo.setup_step < 4 ? '#' : '/tournaments'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-gamepad fa-xl" style={uri_endpoint.value== 'tournaments' ? {'color': '#ADD8E6'} : {}}></i>
                </a>
            </Tooltip>

            <Tooltip content="My Entries" className="text-white" placement='bottom' showArrow={true}>
                <a href={userInfo.setup_step < 4 ? '#' : '/entries'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-ticket fa-xl" style={uri_endpoint.value== 'entries' ? {'color': '#ADD8E6'} : {}}></i>
                </a>
            </Tooltip>
            
            <Tooltip content="All time rankings" className="text-white" placement='bottom' showArrow={true}>
                <a href={userInfo.setup_step < 4 ? '#' : '/leaderboards'} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <i className="fa-solid fa-ranking-star fa-xl" style={uri_endpoint.value== 'rankings' ? {'color': '#ADD8E6'} : {}}></i>
                </a>
            </Tooltip>

            <Tooltip content="Report a bug." className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <i className="fa-solid fa-bug fa-xl" ></i>
                </a>
            </Tooltip>
            <Tooltip content="Help" className="text-white" placement='bottom' showArrow={true}>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-circle-question fa-xl" style={uri_endpoint.value== 'help' ? {'color': '#ADD8E6'} : {}}></i>
                    
                </a>
            </Tooltip>
            
        </div>
    );
};

export default BarRoutes;