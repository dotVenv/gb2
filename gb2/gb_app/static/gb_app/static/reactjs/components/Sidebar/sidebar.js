import React, { useState } from "react";

import { 
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Spacer,
    ScrollShadow,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    } from "@nextui-org/react";
import { ACMELogo } from "../index";

const CustomSidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];


    return(
        <>
        
        <nav className="justify-center align-center mx-auto bg-purple-900 shadow border-rounded rounded-large w-[75%]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex items-center">
                <div className="shrink-0">
                    <ACMELogo />    
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="rounded-lg rounded-full border-rounded rounded-border bg-zinc-400  px-3 py-2 text-sm font-medium text-white" >Dashboard</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
                    </div>
                </div>
                </div>
                <div className=" md:block">
                <div className="ml-4 flex items-center md:ml-6">
                <Dropdown>
                    <DropdownTrigger>
                        <Button radius='full' size='sm' isIconOnly aria-label="Notifications" color="default">
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions" >
                        <DropdownItem key="new" className='text-white'>Tournament Ended</DropdownItem>
                        <DropdownItem key="copy" className='text-white'>Esports Profile Public</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                    

                    <div className="relative ml-3">
                    <div>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                            
                            isBordered
                            as="button"
                            className=" relative  float end flex max-w-xs items-center rounded-full  transition-transformmbg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2 py-5">
                            <p className="text-white text-small">Signed in as <Spacer></Spacer><i className='text-tiny'> test@gmail.com</i></p>
                            </DropdownItem>
                            <DropdownItem className="text-white" key="settings">My Profile</DropdownItem>
                            <DropdownItem className="text-white" key="team_settings">My Tournaments</DropdownItem>
                            <DropdownItem className="text-white" key="analytics">My Team</DropdownItem>
                            <DropdownItem className="text-white" key="system">Support</DropdownItem>
                            <DropdownItem className="text-white" key="logout" color="danger">
                            Log Out
                            </DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                       
                    </div>


                    </div>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <Button onPress={(e) => {setMobileMenu(!mobileMenu)}}  type="button" className="relative float start inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
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
            
                <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
            </div>
           
            </div>
        </nav>
            
        </>
            
    
    );

};

export default CustomSidebar;