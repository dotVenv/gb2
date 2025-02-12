'use client';

import React, {useState,useContext} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  CardBody, CardFooter, Spacer, Button, Chip, Image } from "@nextui-org/react";
import { GamesPlayedStat, 
        DailyRewards, 
        Globe, 
        MagicCard, 
        RankingStepper, 
        MostRecentMatches, 
        ExtraPlayerStats,
        PopularTournaments, 
        ShineBorder,
        SparklesText} from "../../components";
import { useAtom } from "jotai";
import { ConnContext } from "../../connector";


const Dashboard = () => {
    
    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);
    cu.PopularTournaments();


    return(
        <>
            <Layout>
                 
                <section className='h-full'>
                <Breadcrumbs className='justify-center align-center mx-auto col-9' 
                    variant="solid"
                    radius='full'
                    itemClasses={{
                        separator: "px-2",
                    }}
                    separator="/">
                    <BreadcrumbItem key="dashboard" isCurrent>
                        <span>Dashboard</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
                </section>
                <section className='h-full'>
                    <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            
                            <MagicCard 
                                    className="p-7 px-4  bg-gray-50 border-gray-50 dark:border-gray-600 h-70 p-4 cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                                    >
                                <Spacer></Spacer>
                                <Chip variant='flat' color='secondary' className='flex sm:text-small text-center mt-3 text-black justify-center align-center mx-auto'> 
                                    <i> Daily Reward <i className="fa-solid fa-gift"></i> </i>
                                </Chip>
                                <Spacer></Spacer>
                                <br></br>
                                   <DailyRewards />
                            </MagicCard>
                            <div className='grid grid-cols-1 gap-1'>
                            <Card className="bg-gray-50 shadow bg-gray-50 border-gray-50 dark:border-gray-600 h-[200px] p-1 cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl">
                                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-800/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                    Connected
                                </span>
                                <Globe className="top-0 border-none justify-center align-center mx-auto" />
                            </Card>
                            <Card className='h-[300px] bg-gray-50 shadow-2xl p-4 items-center'>
                             
                                <RankingStepper />
                            </Card>
                            </div>
                        </div>
                        
                    
                        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-0">
                           
                            <ShineBorder className='mx-auto bg-zinc-400 w-full items-center bg-transparent' color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                               
                                <div className="flex flex-col gap-y-2">
                                    <dl>
                                        <dt className="text-small text-black font-medium text-default-500">Membership <i className="fa-solid fa-money-check-dollar"></i></dt>
                                        <dd className="text-2xl font-semibold text-black">{ userInfo.membership.toUpperCase() }</dd>
                                    </dl>
                                </div> 
                            </ShineBorder>
                            <ShineBorder className=' mx-auto bg-zinc-400  w-full items-center bg-transparent' color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                                <div className="flex flex-col gap-y-2">
                                    <dl>
                                        <dt className="text-small text-black font-medium text-default-500">Entries <i className="fa-solid fa-ticket-simple"></i></dt>
                                        <dd className="text-2xl text-black"><b>{userInfo.entries}</b> <span className='text-tiny text-black'> active</span></dd>
                                    </dl>
                                </div> 
                            </ShineBorder>
                           
                            <ShineBorder className='mx-auto bg-zinc-400 w-full items-center bg-transparent' color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                               
                                        <div className="flex flex-col gap-y-2">
                                            <dl>
                                            <div className="flex flex-col gap-y-2">
                                            <dt className="float start text-small text-black font-medium ">Preferences <i className="fa-solid fa-user-gear"></i></dt>
                                            <div className='flex'>
                                                <div className='grid grid-cols-1 float-start justify-start'>
                                                    <dd className="text-2xl font-semibold text-black">{ 
                                                        userInfo.platform == 'PC' 
                                                            ? <i className="fa-solid fa-computer"></i>
                                                            : userInfo.platform == 'Xbox' 
                                                                ? <i className='fa-solid fa-xbox'></i>
                                                                : userInfo.platform = 'PSN'
                                                                    ? <i className='fa-solid fa-playstation'></i>
                                                                    : undefined
                                                        }</dd>
                                                    <span className='text-tiny text-black'><b> { userInfo.platform } </b></span>
                                                </div>
                                                <Spacer></Spacer>
                                                <div className='grid grid-cols-1 end justify-end mx-auto float-end justify-end'>
                                                    <dd className="text-2xl font-semibold text-black"><i className="fa-solid fa-server"></i></dd>
                                                    <span className='text-tiny text-black'> <b> { userInfo.server } </b></span>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    
                                        </dl>
                                    </div> 
                                  
                            </ShineBorder>


                        </div>
                       
                        <MagicCard className="shadow-2xl  h-full mb-4 p-4">
                            <MostRecentMatches />
                            <div className='grid sm:grid-grid-cols-1 lg:grid-cols-2 gap-4 justify-center align-center mx-auto '>
                                <div>
                                    <GamesPlayedStat userInfo={userInfo} />
                                </div>
                                <div>
                                    <ExtraPlayerStats userInfo={userInfo}/>
                                </div>
                            
                            </div>
                        </MagicCard>
                        <Card className="bg-transparent shadow-2xl  h-full mb-4 p-4">
                            
                            <div className='flex'>
                                <span className='text-center mt-4 justify-center align-center  mx-auto text-black'> <SparklesText text='Popular Tournaments' /></span>
                                <Spacer></Spacer>
                                <Button variant='flat' color='primary' size='md' radius='md'> View All </Button>
                            </div>
                            <PopularTournaments cu={cu} />
                            

                            <hr></hr>

                            <p className='text-center justify-center align-center mx-auto text-black'><i> LIMITED </i> <b>Gamers-Bounty</b> <i> Merch</i></p>
                            <div className=' grid grid-cols-2 gap-4  justify-center align-center mx-auto'>
                            <Card className='bg-transparent' isFooterBlurred>
                                <CardBody>
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="z-0 w-[150px] h-[150px] object-cover"
                                        src="https://heroui.com/images/card-example-2.jpeg"
                                        />
                                </CardBody>
                                <CardFooter>
                                    <Button variant='ghost' className='justify-center align-center mx-auto' color='success' startContent={<i className="fa-solid fa-bag-shopping"></i>}> Buy Now </Button>
                                </CardFooter>
                                </Card>
                                <Card className='bg-transparent' isFooterBlurred>
                                    <CardBody>
                                    <Image
                                        removeWrapper
                                        alt="Card background"
                                        className="z-0 w-[150px] h-[150px] object-cover"
                                        src="https://heroui.com/images/card-example-2.jpeg"
                                        />
                                    </CardBody>
                                    <CardFooter>
                                        <Button variant='ghost' className='justify-center align-center mx-auto' color='success' startContent={<i className="fa-solid fa-bag-shopping"></i>}> Buy Now </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Card>
                
                    </div>
                </section>
              
            </Layout>
        </>
    );
};
export default Dashboard;



{ /*

 <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
    <div className="border-2 border-dashed rounded-lg border-rounded border-gray-300 dark:border-gray-600 h-96 mb-4">
        
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
    
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

        </div>
        
    </div>
    

</div>
*/}