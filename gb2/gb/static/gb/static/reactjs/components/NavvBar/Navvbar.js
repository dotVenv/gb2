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
                    <NavbarItem isActive={cpage == 'home' ? true : false }>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                    </NavbarItem>
                    <NavbarItem isActive={cpage == 'about-us' ? true : false }>
                    <Link color='foreground' href="#">
                        About Us
                    </Link>
                    </NavbarItem>
                    <NavbarItem isActive={cpage == 'dotVenv' ? true : false }>
                    <Link color="foreground" href="#">
                        dotVent
                    </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end" className='mt-2'>
                    <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
   
};

export default NavvBar;