'use client';

import React, {useState,useContext} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, User, Card, CardBody, CardFooter, Spacer, Divider, } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ConnContext } from "../../connector";
import { ButtonGroup } from "flowbite-react";
import { ProfileSide, ShineBorder } from "../../components";


const MyProfile = () => {

    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);

    return(
        <>
            <Layout>
            <section className='h-full flex'>
                <Breadcrumbs className='justify-center align-center mx-auto col-9' 
                    variant="solid"
                    radius='full'
                    itemClasses={{
                        separator: "px-2",
                    }}
                    separator="/">
                    <BreadcrumbItem key="myprofile" isCurrent>
                        <span>My Profile</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
            </section>
            <Spacer></Spacer>
            <br></br>
          
            <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    
                    <ProfileSide userInfo={userInfo} />


                    <section className='h-full justify-center align-center mx-auto'>
                        <ShineBorder className='flex gap-4 mx-auto bg-zinc-400 w-full  bg-transparent' color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                            <div className='grid grid-cols-3 gap-2'>
                                <span className='w-full'>
                                    <dt className="text-small text-center mx-auto font-medium text-gray-700">Games Played</dt>
                                    <dd className="text-lg text-center mx-auto font-semibold text-gray-500">15</dd>
                                </span>
                                <span className='w-full'>
                                    <dt className="text-small text-center mx-auto font-medium text-gray-700">Report Status</dt>
                                    <dd className="text-lg text-center mx-auto font-semibold text-gray-500"><i style={{'color': 'green'}}> Clean </i></dd>
                                </span>
                                <span className='w-full'>
                                    <dt className="text-small text-center mx-auto font-medium text-gray-700">Balance</dt>
                                    <dd className="text-lg text-center mx-auto font-semibold text-gray-500"><i style={{'color': 'green'}}> ${userInfo.balance} </i></dd>
                                </span>
                            </div>
                        </ShineBorder>
                      
                       
                    </section>
                </div>               
            </div>
            </Layout>
        </>
    );
};

export default MyProfile;