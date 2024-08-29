'use client';
import React, {Suspense, useRef} from "react";
import TourneyJourney from "../sections/tourneyjourney";

import { 
    DotPattern,
    TextRevealByWord, 
    DescriptionSplit,
    Experience,
    BorderBeam,
   
    } from "../../components";

import { cn,  Card, CardBody, CardHeader, CardFooter, Spacer, Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";



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
const CustomButton = ({children}) => {

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
            <Suspense fallback={<p> Loading Environment...</p>} >
                <Experience >
                    <br></br>
                    <section className="mb-4 mt-2">
                        <DP />
                        <br></br>
                        <Spacer></Spacer>
                        <DescriptionSplit /> 
                    </section>

                    <br></br>
                    <section className="relative h-[105vh] mb-4 pb-4">
                        <br></br>
                        <Spacer></Spacer>
                        <div>
                            <TextRevealByWord className='justify-center align-center text-center mx-auto flex text-medium' text="The New E-sports, Powered by dotVenv">
                                <Card className='h-[450px] w-full col-12'>
                                    <iframe className='w-full h-full' src='https://www.youtube.com/embed/843nec-IvW0'></iframe>
                                </Card>
                            </TextRevealByWord>
                        </div>
                    </section>
                    <Spacer></Spacer>
                    <br></br>
                    <section className='mt-4 pt-4'>
                        <DP />
                        <Spacer></Spacer>
                        
                            <Card isBlurred className='justify-center align-center mx-auto flex-cols col-9 bg-white h-full'>
                                <CardHeader>
                                    <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 lg:text-center">
                                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Start Competing Now</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                            Simply register and enter a tournament.
                                        </p>
                                        <p className="mt-6 text-tiny leading-2 text-gray-600">
                                            US Gamers must reside in <i> a valid state that allows online gaming competitions. </i>
                                        </p>
                                    </div>
                                </CardHeader>
                                    <CardBody className='w-full h-full mb-4'>
                                    
                                        <div className="mx-auto ">
                                            <TourneyJourney />
                                        </div>
                                        <br></br>
                                        <div className="justify-center align-center items-center mx-auto lg:flex sm:grid sm:grid-cols-1 gap-y-2">
                                            {tourney_journey.map((feature) => (
                                                <Chip variant='flat' size='md' color='success' className='font-bold text-small justify-center align-center mb-2'>
                                                    {feature.name}
                                                </Chip>
                                            ))}
                                        </div>
                                        </CardBody>
                                <BorderBeam />
                            </Card>
          
                    </section>
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