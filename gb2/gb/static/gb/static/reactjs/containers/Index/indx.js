'use client';
import React, {Suspense, useRef} from "react";
import TourneyJourney from "../sections/tourneyjourney";

import { 
    DotPattern,
    TextRevealByWord, 
    DescriptionSplit,
    Experience,
    BorderBeam,
    ShineBorder,
    RetroGrid,
    AnimatedGradientText,
   
    } from "../../components";

import { cn,  Card, CardBody, Spacer, Button } from "@nextui-org/react";
import { motion } from "framer-motion";



const tourney_journey = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: null,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
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
                    <section className="relative h-[115vh] mb-4 pb-4">
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
                        <motion.div
                            initial={{
                                x: -175,
                                y: 150,
                                scale: 0.1,
                                rotate: 0,
                                }}
                            whileInView={{
                                x: 0,
                                y: 150,
                                scale: 1.0,
                            }}
                            viewport={{once:true}}
                            >
                            <AnimatedGradientText className='justify-center align-center mx-auto col-8 bg-white'>
                                <div className="bg-white py-24 sm:py-32">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="mx-auto max-w-2xl lg:text-center">
                                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                            Everything you need to deploy your app
                                        </p>
                                        <p className="mt-6 text-lg leading-8 text-gray-600">
                                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                                            pulvinar et feugiat blandit at. In mi viverra elit nunc.
                                        </p>
                                        </div>
                                        <div className='row '>
                                            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                            
                                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                                                {tourney_journey.map((feature) => (
                                                <div key={feature.name} className="relative pl-16">
                                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                        
                                                    </div>
                                                    {feature.name}
                                                    </dt>
                                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                                </div>
                                                ))}
                                            </dl>
                                            </div>
                                            <TourneyJourney />
                                        </div>
                                    </div>
                                </div>
                                <RetroGrid />
                            </AnimatedGradientText>
                        </motion.div>
          
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