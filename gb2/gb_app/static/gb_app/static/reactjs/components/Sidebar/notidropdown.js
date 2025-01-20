import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, User, Button, Badge } from "@nextui-org/react";



const NotiDropdown = () => {

    return(
        <>
             <Dropdown>
                   
                <Badge color="danger" content={5}  shape="circle">
                <DropdownTrigger>
                    <Button radius='full' size='sm' isIconOnly aria-label="Notifications" color="default">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </Button>
                </DropdownTrigger>
                    
                </Badge>
                
                <DropdownMenu aria-label="Example with disabled actions" >
                    <DropdownItem key="new" className='text-white'>
                        <Badge color="primary" size='sm' variant='flat' content={<i className="fa-regular fa-bell"></i>} placement="bottom-left">
                        <User
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                            description="Sent you a new friend request"
                            name="Jane Doe"
                            />
                        </Badge>
                        <br></br>
                        <i className='text-tiny text-gray-100'> 5 minutes ago</i>
                    </DropdownItem>
                    <DropdownItem key="copy" className='text-white'></DropdownItem>
                </DropdownMenu>
            </Dropdown>
                   

        </>
    );
};


export default NotiDropdown;