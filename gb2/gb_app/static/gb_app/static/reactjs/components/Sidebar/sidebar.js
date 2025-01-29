'use client';

import React, { useContext, useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { ACMELogo, UserDropdown, NotiDropdown, BarRoutes } from "../index";

const CustomSidebar = ({userInfo}) => {

    const [mobileMenu, setMobileMenu] = useState(false);
   
    return(
        <>
        
        <nav className="justify-center align-center mx-auto bg-gradient-to-r from-purple-900 to-zinc-800 shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex items-center">
                <div className="shrink-0">
                    <ACMELogo />    
                </div>
                <div className="hidden md:block">
                    <BarRoutes userInfo={userInfo}/>
                </div>
                </div>
                <div className=" md:block">
                    { parseInt(userInfo.setup_step) < 4 ? undefined  :
                    
                        <div className="ml-4 flex items-center md:ml-6">
                            <div>
                                <NotiDropdown />
                            </div>
                            <div className="relative ml-3">
                                <div>
                                <UserDropdown /> 
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="-mr-2 flex md:hidden">
                <Button onPress={(e) => {setMobileMenu(!mobileMenu)}}  type="button" className="relative bg-purple-900 float start inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Button>
                </div>
            </div>
            </div>
            <div className={mobileMenu  ? undefined : 'sm:hidden md:hidden lg:hidden hidden' } id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">

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
                <Tooltip content="Customer Support" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-circle-question fa-xl"></i>
                        
                    </a>
                </Tooltip>

            </div>
           
            </div>
        </nav>
            
        </>
            
    
    );

};

export default CustomSidebar;