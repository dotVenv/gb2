import React, { useContext } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem,Avatar } from "@nextui-org/react";

import { ConnContext } from "../../connector";
import { signal } from "@preact/signals-react";


const UserDropdown = () => {

    const conn = useContext(ConnContext);
    
    return(
        <>
        
        <Dropdown placement="bottom-end" className='items-center rounded-lg' size='sm'>
        <DropdownTrigger>
            <Avatar
            
                isBordered
                alt='Profile Pic'
                as="button"
                className=" relative  float-end flex max-w-xs items-center rounded-full  transition-transformm bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                color="secondary"
                name={conn.userInfo.value.uid}
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Dropdown"  className='p-3 items-center align-center mx-auto ' variant="flat"
         
         itemClasses={{
             base: [
             "rounded-lg",
             "text-default-500",
             "transition-opacity",
             "align-center",
             "justify-center",
             "mx-auto",
             "data-[hover=true]:text-foreground",
             "data-[hover=true]:bg-default-100",
             "dark:data-[hover=true]:bg-default-50",
             "data-[selectable=true]:focus:bg-default-50",
             "data-[pressed=true]:opacity-70",
             "data-[focus-visible=true]:ring-default-500",
             "mr-4"
             ],
         }}>
            <DropdownSection showDivider className='float start' >
                <DropdownItem key="myprofile" textValue={"My profile"}> My Profile {conn.userInfo.value.uid}</DropdownItem>
                <DropdownItem key="mytournaments">My Entries</DropdownItem>
                <DropdownItem key="account status" endContent={<i className="fa-solid fa-check items-center align-center mx-auto mr-4" style={{'color': 'green'}}></i>}>
                    Account Status
                </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider aria-label="Preferences">
            <DropdownItem key="quick_search" shortcut="⌘K">
                Quick search
            </DropdownItem>
            <DropdownItem
                key="theme"
                isReadOnly
                className="cursor-default"
                endContent={
                <select
                    className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                    id="theme"
                    name="theme"
                >
                    <option>System</option>
                    <option>Dark</option>
                    <option>Light</option>
                </select>
                }
            >
                Theme
            </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Help & Feedback">
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" href='/logout'>Log Out</DropdownItem>
            </DropdownSection>
        </DropdownMenu>
        </Dropdown>


        </>
    );
};


export default UserDropdown;