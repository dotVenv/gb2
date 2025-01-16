import React, { useContext, useEffect, useMemo, useState } from "react";
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


const isLoginModalOpen = signal(false);
const isSignupModalOpen = signal(false);

const NavvBar = ({cpage}) => {



    const usrcontext = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    /* login & signup modal */

    const {onOpenChange, onOpen} = useDisclosure(); 
    const [triggerLoginModal, setTriggerLoginModal] = useState(isLoginModalOpen.value);
    const [triggerSignUpModal, setTriggerSignupModal] = useState(isSignupModalOpen.value);
    const [isLoggedIn, setIsLoggedIn] = useState(usrcontext.loggedin.value);

    useMemo(() => {
        console.log('Navbar:  ' + usrcontext.uname.value, usrcontext.loggedin.value);
        
    }, [usrcontext.initialPull.value, usrcontext.loggedin.value ]);
    

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

                    { isLoggedIn !== true ? 
                    
                        <NavbarItem className="hidden lg:flex">
                            <Button  size='sm' variant='light' onPress={handleLoginOpen} >Sign In</Button>
                        </NavbarItem>

                        : undefined
                    }
                        
                    <NavbarItem>
                        { isLoggedIn !== true ? 
                            <Button  color="primary" size='sm'  variant="flat" onPress={handleSignupOpen}>
                                Sign Up
                            </Button>
                            : 
                            <Button  color="secondary" size='sm'  variant="flat" onPress={location.href='/'}>
                                Dashboard
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
                            href="#"
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