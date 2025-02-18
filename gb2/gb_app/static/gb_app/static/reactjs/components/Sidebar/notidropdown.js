import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spacer, Button, Badge, Card } from "@nextui-org/react";



const NotiDropdown = () => {

    return(
        <>
             <Dropdown>
                   
                <Badge color="danger" showOutline={false} content={1}  shape="circle" >
                <DropdownTrigger>
                    <Button radius='full' size='sm' isIconOnly aria-label="Notifications" color="default">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </Button>
                </DropdownTrigger>
                    
                </Badge>
                
                <DropdownMenu aria-label="User Notifications" >
                    <DropdownItem key="new" className='text-white'
                        title={'Prize Claimed'}
                        description={
                           <span className='grid grid-cols-1 space-y-0 gap-y-0'>
                                <p>You have claimed a new prize</p>
                               
                                <p className='text-tiny '> 2 minutes ago</p>
                            </span>
                           
                        }>
                            
                        <br></br> 
                    </DropdownItem>
                  
                    
                    <DropdownItem key="delete" className="text-danger border-rounded rounded-border rounded-large bg-red-300 mt-4" color="danger" >
                        Clear Notifications
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
                   

        </>
    );
};


export default NotiDropdown;