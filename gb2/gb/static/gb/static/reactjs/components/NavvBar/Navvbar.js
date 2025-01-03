import React from "react";
import {
    Button,
    Link,
    Navbar, 
    NavbarContent, 
    NavbarItem, } from "@nextui-org/react";


const NavvBar = ({cpage}) => {
    return (
        <>
            <Navbar>
                            
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className='mt-2' isActive={cpage == 'home' ? true : false }>
                        <Link color="foreground" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'about-us' ? true : false }>
                        <Link color='foreground' href="#">
                            About Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'FAQ' ? true : false }>
                        <Link color="foreground" href="#">
                            FAQ
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='mt-2' isActive={cpage == 'dotVenv' ? true : false }>
                        <Link color="foreground" href="#">
                            dotVenv
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end" className='mt-2'>
                    <NavbarItem className="hidden lg:flex">
                    <Link href="#">Sign In</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Button as={Link} color="primary" size='sm' href="#" variant="flat">
                        Sign Up
                    </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
   
};

export default NavvBar;