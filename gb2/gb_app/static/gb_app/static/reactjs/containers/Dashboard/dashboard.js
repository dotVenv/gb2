'use client';

import React, {useState,} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  CardBody, CardFooter, Spacer, Button, Chip, Image } from "@nextui-org/react";

import { GamesPlayedStat, DailyRewards, Globe, MagicCard, RankingStepper, MostRecentMatches, ExtraPlayerStats, TournamentCard, } from "../../components";



const Dashboard = () => {
    

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
                            <Card className=" bg-gray-50 shadow bg-gray-50 border-gray-50 dark:border-gray-600 h-[200px] p-1 cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl">
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

                        <MagicCard className="shadow-2xl  h-full mb-4 p-4">
                            <MostRecentMatches />
                            <div className='grid sm:grid-grid-cols-1 lg:grid-cols-2 gap-4 justify-center align-center mx-auto '>
                                <div>
                                    <GamesPlayedStat />
                                </div>
                                <div>
                                    <ExtraPlayerStats />
                                </div>
                            
                            </div>
                        </MagicCard>
                        <Card className="bg-transparent shadow-2xl  h-full mb-4 p-4">

                            <p className='text-center mt-4 justify-center align-center mx-auto text-black'> Popular Tournaments <i className="fa-solid fa-star"></i> </p>
                            <div>
                                <TournamentCard />
                            </div>

                            <hr></hr>

                            <p className='text-center justify-center align-center mx-auto text-black'><i> LIMITED </i> <b>Gamers-Bounty</b> <i> Merch</i></p>
                            <div className=' grid grid-cols-2 gap-4  justify-center align-center mx-auto'>
                            <Card className='bg-transparent' isFooterBlurred>
                                    <CardBody>
                                    <Image
                                        removeWrapperMerch
                                        alt="Card background"
                                        className="z-0 w-[150px] h-[150px] object-cover"
                                        src="https://heroui.com/images/card-example-2.jpeg"
                                        />
                                    </CardBody>
                                    <CardFooter>
                                        <Button variant='flat' color='success' startContent={<i className="fa-solid fa-bag-shopping"></i>}> Buy Now </Button>
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
                                        <Button variant='flat' color='success' startContent={<i className="fa-solid fa-bag-shopping"></i>}> Buy Now </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Card>
                
                    </div>
                </section>
                <footer className='col-9 justify-center align-center mx-auto'>
                    <p className='mx-auto text-small left-0'>Copyright &#169; 2025 <b> Gamers-Bounty Inc </b></p>
                </footer>
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