'use client';
import React, {useContext} from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, Link, DropdownItem,Avatar } from "@nextui-org/react";
import { ConnContext } from "../../connector";

const UserDropdown = ({ userInfo }) => {


    return(
        <>
        
        <Dropdown placement="bottom-end" className=' bg-zinc-800 items-center rounded-large rounded-border' radius='lg' size='sm'>
        <DropdownTrigger>
            <Avatar
            
                isBordered
                alt='Profile Pic'
                as="button"
                className=" relative  float-end flex max-w-xs items-center rounded-full  transition-transformm bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                color="secondary"
                name={userInfo.username}
                size="sm"
                src={userInfo.profile_pic}
                showFallback={true}
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Dropdown"   className='p-2 mx-auto text-gray-400' radius='lg'  variant="faded"
            disabledKeys={["profile"]}
           
           >
            <DropdownItem key="profile" textValue={'signed in'} className="h-14 gap-0 mt-3  p-3">
            <p className="font-bold">Signed in @{ userInfo.username }</p>
          </DropdownItem>
          <DropdownItem textValue={'myprofile'} key="myprofile" onPress={(e) => {location.href='/myprofile' }}  color='success'>My Profile</DropdownItem>
          <DropdownItem textValue={'entries'} key="entries" onPress={(e) => {location.href='/entries' }}  color='success'>My Entries ({ userInfo.entries })</DropdownItem>
          <DropdownItem textValue={'myteam'} key="myteam" onPress={(e) => {location.href='/myteam' }}  color='success'>My Team</DropdownItem>
          <DropdownItem textValue={'help'} onPress={(e) => {location.href='/help' }} key="help_and_feedback" color='warning'>Help & Feedback</DropdownItem>
          <DropdownItem textValue={'logout'} key="logout" href='/logout' color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
        </Dropdown>


        </>
    );
};


export default UserDropdown;