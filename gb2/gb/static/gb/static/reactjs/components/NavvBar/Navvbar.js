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
import { LoginModal, ACMELogo } from '../index';
const menuItems = [
    "Home",
    "About Us",
    "ContactUs",
    "FAQ",
    "dotVenv",
  ];



const NavvBar = ({cpage}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    /* login modal */

    const isLoginModalOpen = signal(false);
    const {onLoginModalOpenChange} = useDisclosure();
    const [triggerLoginModal, setTriggerLoginModal] = useState(isLoginModalOpen.value);


    const changeLoginModal = (e) =>{
        isLoginModalOpen.value ? isLoginModalOpen.value = false : isLoginModalOpen.value = true;
        setTriggerLoginModal(isLoginModalOpen.value);
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
                    <Button  size='sm' variant='light' onPress={(e) => {changeLoginModal(e);}} >Sign In</Button>
                    </NavbarItem>
                    <NavbarItem>
                    <Button  color="primary" size='sm'  variant="flat">
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
            <LoginModal isLoginModalOpen={triggerLoginModal} onLoginModalOpenChange={onLoginModalOpenChange} changeLoginModal={changeLoginModal}/>
        </>
    );
   
};

export default NavvBar;