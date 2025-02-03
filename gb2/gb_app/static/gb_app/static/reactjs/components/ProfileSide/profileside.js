'use client';

import React, {useState,useContext} from "react";

import { User, Card, CardBody, CardFooter, Spacer, Button, Chip, cn, CardHeader, Tooltip, } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ButtonGroup } from "flowbite-react";


const ProfileSide = ({userInfo}) => {

    return(
        <>
        
        <aside className='mb-3 w-50'>
            <Card isBlurred  className='shadow-2xl bg-gray-100 h-full rounded-border rounded-large w-80 shrink-0 overflow-y-auto'>
                <CardHeader>
                <div className="p-3">
                    <User
                        className='text-black'
                        avatarProps={{
                            src: userInfo.profile_pic,
                            size:'lg',
                            isBordered: true,
                            className: 'h-16 w-16 rounded-lg',
                            showFallback: true,
                        }}
                        description={
                            <Chip variant='flat' color={userInfo.membership.toLowerCase() == 'free' ? 'warning' : 'primary'} className="p-2 inline-block rounded text-tiny font-bold font-medium text-black "> <b className='mt-1 '><i>{ userInfo.membership.toLowerCase() == 'free' ? "Free" : userInfo.membership.toLowerCase() == '7day' ? "Trial" : "Official" }</i></b> Member </Chip>
                        }
                        name={ <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl"> <Spacer></Spacer>@{ userInfo.username}</h2>}
                        />

                    <Spacer></Spacer>
                    <br></br>
                    <ul className="flex text-sm text-black">
                        <li className="me-2">
                            
                            <span className="font-semibold text-gray-900 dark:text-white">799</span>
                            {'    '}
                            <span>Following</span>
                            
                        </li>
                        <li>
                            
                            <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                            {'    '}
                            <span>Followers</span>
                        
                        </li>
                    </ul>
                </div>
                </CardHeader>
                <CardBody>
                    <ButtonGroup className='justify-center align-center mx-auto gap-2' size='lg'>
                        <Tooltip  className="capitalize" color='secondary' content='Edit account details'>
                            <Button variant='flat' color='primary' size='lg' style={{'color': 'orange'}} isIconOnly>
                                <i className="fa-solid fa-user-pen"></i>
                            </Button>
                        </Tooltip>
                        <Tooltip  className="capitalize" color='secondary' content='Change account password'>
                            <Button variant='flat' color='primary' size='lg' style={{'color': 'orange'}} isIconOnly>
                                <i className="fa-solid fa-key"></i>
                            </Button>
                        </Tooltip>
                        <Tooltip  className="capitalize" color='secondary' content='Change 2FA settings'>
                            <Button variant='flat' color='primary' size='lg' style={{'color': 'orange'}} isIconOnly>
                                <i className="fa-solid fa-fingerprint"></i>
                            </Button>
                        </Tooltip>
                    </ButtonGroup>
                </CardBody>
                <CardFooter>
                <Button variant='ghost' className='justify-center align-center mx-auto' size='sm' color='danger'> Request Account Deletion </Button>
            </CardFooter>
            </Card>
        
        </aside>
        </>
    );
};

export default ProfileSide;