import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button, } from "@nextui-org/react";
import ACMELogo from "../ACMELogo/acme";


const NavvBar = ({cpage}) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "About Us",
        "FAQ",
        "ContactUs",
        "dotVenv",
        "Log Out",
      ];
    
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
                    <Link href="#">Sign In</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Button as={Link} color="primary" size='sm' href="#" variant="flat">
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
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
        </>
    );
   
};

export default NavvBar;