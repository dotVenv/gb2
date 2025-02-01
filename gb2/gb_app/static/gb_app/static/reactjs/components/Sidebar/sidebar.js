'use client';

import React, { useContext, useState } from "react";
import { Button, Tooltip, Chip, Spacer } from "@nextui-org/react";
import { ACMELogo, UserDropdown, NotiDropdown, BarRoutes } from "../index";
import { signal } from "@preact/signals-react";


const uri_endpoint = signal(window.location.pathname.split('/')[1]);
console.log(uri_endpoint.value.length);


const CustomSidebar = ({userInfo}) => {

    const [mobileMenu, setMobileMenu] = useState(false);
   
    return(
        <>
        
        <nav className="justify-center align-center mx-auto bg-gradient-to-r from-zinc-800 to-gray-300 shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex items-center">
                <div className="shrink-0">
                    <ACMELogo />    
                </div>
                <div className="hidden md:block">
                    <BarRoutes userInfo={userInfo} uri_endpoint={uri_endpoint}/>
                </div>
                </div>
                <div className=" md:block">
                    { parseInt(userInfo.setup_step) < 4 ? undefined  :
                    
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className='mr-2 '>
                                <Chip variant='flat' className='text-black' startContent={ <i className="fa-solid fa-wallet fa-lg" style={{'color': 'black'}}></i> } color='secondary'size='md' radius='md'>
                                    ${userInfo.balance}
                                </Chip>
                                <Spacer></Spacer>
                            </div>
                            <div>
                                <NotiDropdown />
                            </div>
                            <div className="relative ml-3">
                                <div>
                                <UserDropdown userInfo={userInfo} /> 
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mr-2 flex md:hidden lg:hidden">
                <Button onPress={(e) => {setMobileMenu(!mobileMenu)}}  radius='lg'  variant='flat' color='default' isIconOnly
                    className="relative inline-flex items-center rounded-large p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                        <i className="fa-solid fa-bars"></i>
                </Button>
                </div>
            </div>
            </div>
            <div className={mobileMenu  ? undefined : 'sm:hidden md:hidden lg:hidden hidden' } id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">

                <Tooltip content="Home"  className='text-white' placement='bottom' showArrow={true}>
                    <a href="/" className="rounded-lg rounded-full hover:bg-gray-700 hover:text-white bg-transparent  px-3 py-2 text-sm font-medium text-white" >
                        <i className="fa-solid fa-house fa-xl" style={uri_endpoint.value.length == 0 ? {'color': '#ADD8E6'} : {}}></i>
                    </a>
                </Tooltip>
    
                <Tooltip content="Tournaments" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-gamepad fa-xl" style={uri_endpoint.value== 'tournaments' ? {'color': '#ADD8E6'} : {}}></i>
                    </a>
                </Tooltip>
    
                <Tooltip content="My Entries" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-ticket fa-xl" style={uri_endpoint.value== 'entries' ? {'color': '#ADD8E6'} : {}}></i>
                    </a>
                </Tooltip>
                
                <Tooltip content="All time rankings" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-ranking-star fa-xl" style={uri_endpoint.value== 'rankings' ? {'color': '#ADD8E6'} : {}}></i>
                    </a>
                </Tooltip>
                <Tooltip content="Tournament Rules" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-scale-balanced fa-xl" style={uri_endpoint.value== 'rules' ? {'color': '#ADD8E6'} : {}}></i>
                    </a>
                </Tooltip>
                <Tooltip content="Report a bug." className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <i className="fa-solid fa-bug fa-xl"></i>
                    </a>
                </Tooltip>
                <Tooltip content="Customer Support" className="text-white" placement='bottom' showArrow={true}>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <i className="fa-solid fa-circle-question fa-xl" style={uri_endpoint.value== 'help' ? {'color': '#ADD8E6'} : {}}></i>
                        
                    </a>
                </Tooltip>

            </div>
           
            </div>
        </nav>
            
        </>
            
    
    );

};

export default CustomSidebar;