'use client';

import React, {useState,useContext, useEffect, Suspense} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Button, Card, CardBody, CardFooter, Spacer, Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ConnContext } from "../../connector";
import { ProfileSide, ShineBorder, ActionCard, CompCard, TicketTable } from "../../components";
import { signal } from "@preact/signals-react";


const MyProfile = () => {

    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);
    cu.getTickets();
    


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
          
            <div className='mt-4 ml-4 col-9 justify-center align-center mx-auto'>
                <div className="lg:flex sm:grid sm:grid-cols-2 gap-0 space-0 mb-4 w-full">
                    <ProfileSide userInfo={userInfo} />
                        <section className='h-full w-full justify-center align-center mx-auto'>
                        <div>
                            <ShineBorder className='flex gap-4 mx-auto bg-zinc-400  bg-transparent' color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                                <div className='grid grid-cols-3 gap-2'>
                                    <span className='w-full'>
                                        <dt className="text-small text-center mx-auto font-medium text-gray-700">Games Played</dt>
                                        <dd className="text-lg text-center mx-auto font-semibold text-gray-500">15</dd>
                                    </span>
                                    <span className='w-full'>
                                        <dt className="text-small text-center mx-auto font-medium text-gray-700">Report Status</dt>
                                        <dd className="text-lg text-center mx-auto font-semibold text-gray-500"><i style={{'color': 'green'}}> {userInfo.report_status} </i></dd>
                                    </span>
                                    <span className='w-full'>
                                        <dt className="text-small text-center mx-auto font-medium text-gray-700">Balance</dt>
                                        <dd className="text-lg text-center mx-auto font-semibold text-gray-500"><i style={{'color': 'green'}}> ${userInfo.balance} </i></dd>
                                    </span>
                                </div>
                            </ShineBorder>
                        </div>
                        <div className='w-full flex mt-3 mx-auto gap-x-7 space-x-8 grid sm: grid-cols-1 lg:grid-cols-2 gap-0'>
                            <div className=' float start justify-start mx-auto'>
                                <ActionCard
                                        className='bg-gray-100 h-15 mb-2 w-full'
                                        color='primary'
                                        isCompleted={true}
                                        description="Complete account setup."
                                        icon={<i className="fa-solid fa-user-astronaut"></i>}
                                        title="Create a new agreement"
                                        onPress={() => {
                                        console.log("Create a new agreement");
                                        }}
                                    />
                                    <ActionCard
                                        className='bg-gray-100 h-15 w-full mb-2'
                                        color={userInfo.membership.toLowerCase() == 'free'? 'danger' : 'success'}
                                        isCompleted={userInfo.membership.toLowerCase() == 'free'?  false : true }
                                        description="Activate membership."
                                        icon={<i className="fa-solid fa-gem"></i>}
                                        title="Active membership"
                                        onPress={() => {
                                        console.log("Create a new agreement");
                                        }}
                                    />
                                    <ActionCard
                                        className='bg-gray-100 h-15 w-full mb-2'
                                        color={userInfo.mfa.toLowerCase() == 'false' ? 'danger' : 'success'}
                                        isCompleted={userInfo.mfa.toLowerCase() == 'false' ? false : true}
                                        description="Enable 2FA Security"
                                        icon={<i className="fa-solid fa-user-lock"></i>}
                                        title="Active 2FA"
                                        onPress={() => {
                                        console.log("Create a new agreement");
                                        }}
                                    />
                            </div>
                            <CompCard userInfo={userInfo} />
                           
                            <Button variant='ghost' color='success' radius="lg" className='w-full mt-4 col-8' startContent={<i className="fa-solid fa-money-bill-transfer"></i>}>
                                    Withdrawal Balance
                            </Button>  
                          
                            <Button variant='ghost' color='primary' radius="lg" className='w-full mt-4 col-8' startContent={<i className="fa-solid fa-money-bill-transfer"></i>}>
                                    Manage Membership
                            </Button>  
                            </div>
                        <br></br>  
                                   
                    </section>
                </div>    
                    <Suspense>
                       
                        <TicketTable cu={cu} userInfo={userInfo} />
                    </Suspense>
            </div>
            </Layout>
        </>
    );
};

export default MyProfile;