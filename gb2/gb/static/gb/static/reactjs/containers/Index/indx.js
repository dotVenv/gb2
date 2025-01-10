'use client';
import React, {Suspense, useRef} from "react";
import TourneyJourney from "../sections/tourneyjourney";

import { 
    DotPattern,
    TextRevealByWord, 
    DescriptionSplit,
    Experience,
    BorderBeam,
    OurPartners,
    NavvBar,
    Footer,
    PricingTable,
    SimpleSteps,
    Preloader,
    PromoBanner,
    } from "../../components";

import gbAD from '../../../imgs/pngs/gb_ad.png';
import { cn,  
    Card, 
    CardBody, 
    CardHeader, 
    CardFooter, 
    Spacer, 
    Button, 
    Chip,
  } from "@nextui-org/react";
import { motion } from "framer-motion";

import quickintro from '../../../mp4/quickintro.mp4';

const tourney_journey = [
    {
      name: 'Real-Time Ranking',
      description:
        'When it comes to accuracy we nail it by blocking late tournament entries and updating leaderboards very frequently (3s) to ensure the latest stats. We also heavily monitor the data returned from each match to ensure correct game results. Players flagged as cheat-risks will have to download "Gamers-Bounty\'s GCheck-TTK" (GameCheck Task-To-Kernel) to ensure no cheating on PC  is accuring during the tournament.',
      icon: null,
    },
    {
        name: 'Real-Time Monitoring',
        description:'',
        icon: null,
    },
    {
        name: 'Player vs Player Chat',
        description:'',
        icon: null,
    },
    {
        name: 'Same Day Payouts',
        description:'',
        icon: null,
    },
 

]

const stats = [
    { id: 1, name: 'Players Registered', value: '72,000+' },
    { id: 2, name: 'Total Paid Out', value: '$1,523,000+' },
    { id: 3, name: 'Current Prize Pool', value: '$26,000+' },
  ]

const CustmBadge = ({children}) => {

    return (

    <>
    <div className='row flex col-4'>
        {children}
        <Button size='sm' className='col-4'> This is our badge</Button>
        </div>
    </>)
};

const DP = () =>{

    return(
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
        />
    );
};

const Indx = () => {

    return (
        <> 
            <Suspense fallback={<Preloader />} >
                <NavvBar cpage='/'/>
                <PromoBanner />
                <Experience pagetype='main' style={{'overflowX': 'hidden'}}>
                    <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                            </div>
                        ))}
                        </dl>
                    </div>
                    </div>
                        
                        <OurPartners />
                        <br></br>
                        <section className="mb-4 mt-2">
                            <DP />
                            <br></br>
                            <Spacer></Spacer>
                            <DescriptionSplit /> 
                        </section>

                        <br></br>
                        <section className="relative h-[105vh] mt-3 pt-3">
                            <br></br>
                            <Spacer></Spacer>
                            <div>
                                <TextRevealByWord className='justify-center align-center text-center mx-auto flex text-medium' text="The New E-sports, Powered by dotVenv">
                                    <Card className='h-[450px] w-full col-12'>
                                        <video className='w-full h-full' autoPlay loop muted><source  type='video/mp4' src={quickintro}></source></video>
                                    </Card>
                                </TextRevealByWord>
                            </div>
                        </section>
                        <Spacer></Spacer>
                        <br></br>
                        <section className='mt-4 pt-4'>
                            <DP />
                            <Spacer></Spacer>
                            
                                <Card isBlurred className='justify-center align-center mx-auto flex-cols col-7 bg-white h-[250px] w-[200px] mb-4'>
                                    <CardHeader>
                                        <div className="mx-auto  lg:text-center">
                                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Daily Tournaments 6pm-9pm EST.</h2>
                                            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                Simply register and enter a tournament.
                                            </p>
                                            <p className="mt-6 text-tiny leading-2 text-gray-600">
                                                US Gamers must reside in <i> a valid state that allows online gaming competitions. </i>
                                            </p>
                                        </div>
                                    </CardHeader>
                                    
                                    <BorderBeam />
                                </Card>
                                    <br></br>
                                    <Spacer></Spacer>
                                    <br></br>

                                    <div className="justify-center align-center mx-auto w-[400px] mt-4 ">
                                        <h3 className='text-gray-900  ml-3 font-bold'> <i className='ml-3'> GB Tourney Journey </i>  - <i className='text-small'>Mileage.</i></h3>
                                        <TourneyJourney />
                                    </div>

                                    <br></br>

                                    <div className="justify-center mx-auto lg:flex sm:grid-cols-1 gap-y-2">
                                        {tourney_journey.map((feature) => (
                                            <Chip variant='flat' size='md' color='success' key={feature.name} className='font-bold text-small mb-2'>
                                                {feature.name}
                                            </Chip>
                                        ))}
                                    </div>
                                <div className='align-center justify-center mx-auto flex'>
                                    <PricingTable />
                                </div>
                                
                        </section>
                        <Spacer></Spacer>
                        <br></br>
                        <section>
                            <SimpleSteps />
                        </section>
                        <br></br>
                        <div className='justify-center align-center mx-auto'>
                            <Spacer></Spacer>
                            <Footer />
                        </div>
                </Experience>
               
            </Suspense>
        </>
    );
};


export default Indx;



{/* 
    
    <div className="pt-4 pb-4"></div>
    <DP />
    <MainSection />
    <Spacer></Spacer>
    <DescriptionSplit /> 
    <Spacer></Spacer>
    <br></br>
    <div className="pt-4 pb-4"></div>
        
    <DP />
    <div>
        <TextRevealByWord className='justify-center align-center mx-auto flex text-align' text="The New Online E-sports, Powered by dotVenv" />
    </div>
    <TourneyJourney />
    <div className="pt-4 pb-4"></div>


    
    */}