import React, { useState } from "react";
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
const menuItems = [
    "Home",
    "About Us",
    "ContactUs",
    "FAQ",
    "dotVenv",
  ];


const isLoginModalOpen = signal(false);
const isSignupModalOpen = signal(false);
const NavvBar = ({cpage}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    /* login modal */

    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 
    const [triggerLoginModal, setTriggerLoginModal] = useState(isLoginModalOpen.value);
    const [triggerSignUpModal, setTriggerSignupModal] = useState(isSignupModalOpen.value);


    const handleLoginOpen = () => {
        setTriggerLoginModal(!isLoginModalOpen.value);
        triggerLoginModal ? onOpen() : undefined;
     
    };
    const handleSignupOpen = () => {
        setTriggerSignupModal(!isSignupModalOpen.value);
        triggerSignUpModal ? onOpen() : undefined;
    };
     /* login modal */
    
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
                    <NavbarItem className="hidden lg:flex">
                    <Button  size='sm' variant='light' onPress={handleLoginOpen} >Sign In</Button>
                    </NavbarItem>
                    <NavbarItem>
                    <Button  color="primary" size='sm'  variant="flat" onPress={handleSignupOpen}>
                        Sign Up
                    </Button>
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
                            href="#"
                            size="lg"
                            >
                        {item}
                        </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
            </Navbar>
            { triggerLoginModal ? <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} /> : undefined }
            { triggerSignUpModal ? <SignUpModal isOpen={isOpen} onOpenChange={onOpenChange} /> : undefined }
        </>
    );
   
};

export default NavvBar;