import React, { Suspense, useContext, useEffect, useMemo, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    useDisclosure } from "@nextui-org/react";

import { signal } from "@preact/signals-react";
import { LoginModal, SignUpModal, ACMELogo } from '../index';
import { UserContext } from "../../connector";
const menuItems = [
    "Home",
    "About Us",
    "ContactUs",
    "FAQ",
    "dotVenv",
  ];

const menuLinks = [
    '/',
    '/about-us',
    '/contact-us',
    '/FAQ',
    'https://venv.pro',
]
const isLoginModalOpen = signal(false);
const isSignupModalOpen = signal(false);

const NavvBar = ({cpage, usrcontext}) => {

   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    /* login & signup modal */

    const {onOpenChange, onOpen} = useDisclosure(); 
    const [triggerLoginModal, setTriggerLoginModal] = useState(isLoginModalOpen.value);
    const [triggerSignUpModal, setTriggerSignupModal] = useState(isSignupModalOpen.value);
    const [logUpdated, setLogUpdated] = useState(usrcontext.loggedin.value);
     

    useEffect(() => {
    }, [usrcontext.loggedin.value]);

    const handleLoginOpen = () => {
        isLoginModalOpen.value = !triggerLoginModal
        setTriggerLoginModal(isLoginModalOpen.value);
        triggerLoginModal ? onOpen() : undefined;
     
    };
    const handleSignupOpen = () => {
        isSignupModalOpen.value = !triggerSignUpModal
        setTriggerSignupModal(isSignupModalOpen.value);
        triggerSignUpModal ? onOpen() : undefined;
    };
     /* login login & signup modal  */
    
    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                </NavbarContent>
                            
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className='mt-2' isActive={cpage == '/' ? true : false }>
                        <Link color="foreground" href='/'>
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'about-us' ? true : false }>
                        <Link color='foreground' href="/about-us">
                            About Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'FAQ' ? true : false }>
                        <Link color="foreground" href="/FAQ">
                            FAQ
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'dotVenv' ? true : false }>
                        <Link color="foreground" href="https://venv.pro">
                            dotVenv
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                    <NavbarContent justify="end" className='mt-2'>
                        { logUpdated 
                            ?   <NavbarItem className="hidden lg:flex">
                                    <Button  size='sm' variant='light' onPress={(e) => {location.href='/logout'}} >Sign Out</Button>
                                </NavbarItem>

                            :   <NavbarItem className="hidden lg:flex">
                                    <Button  size='sm' variant='light' onPress={(e) => {handleLoginOpen()}} >Sign In</Button>
                                </NavbarItem>}
                            
                        <NavbarItem>
                            { logUpdated 
                                ?   <Button  color="secondary" 
                                    size='sm'  
                                    variant="flat"
                                    startContent={<i className="fa-solid fa-door-open"></i>}
                                    onPress={(e) => { location.href='http://app.gamers-bounty-dev.com:8000'}}
                                    >
                                        Dashboard
                                    </Button>

                                :   <Button  color="primary" size='sm'  variant="flat" onPress={(e) => {handleSignupOpen()}}>
                                        Sign Up
                                    </Button>
                            }
                            
                        </NavbarItem>

                    
                </NavbarContent>
               
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === cpage ? "danger" : "foreground"
                            }
                            href={menuLinks[index]}
                            size="lg"
                            >
                        {item}
                        </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
            </Navbar>
            { triggerLoginModal ? <LoginModal isOpen={triggerLoginModal} onOpenChange={onOpenChange} handleLoginOpen={handleLoginOpen} /> 
                : triggerSignUpModal ? <SignUpModal isOpen={triggerSignUpModal} onOpenChange={onOpenChange} handleSignupOpen={handleSignupOpen} /> : undefined }
          
        </>
    );
   
};

export default NavvBar;