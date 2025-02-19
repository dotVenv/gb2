'use client';
import React, {Suspense, useContext, useRef, useState} from "react";
import TourneyJourney from "../sections/tourneyjourney";
import { signal } from "@preact/signals-react";
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
    CookieConsent,
    ShineBorder,
    } from "../../components";

import { cn,  
    Card, 
    CardHeader, 
    Spacer, 
    Button, 
    Chip,
  } from "@nextui-org/react";

import { UserContext } from '../../connector';

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


    const usercontxt = useContext(UserContext);
    
    /* cookie consent */
    const [updateCookie, setupdateCookie] = useState(usercontxt.cookie_consent.value);


    const showCookieConsent = (userResponse) =>{
        if (userResponse == 'accepted'){
            usercontxt.cookie_consent.value == 'accepted'
            ? updateCookie  == 'accepted'
                ?  undefined 
                : setupdateCookie(usercontxt.cookie_consent.value) 
            : usercontxt.setCookie('accepted') 
                ? setupdateCookie(usercontxt.cookie_consent.value) 
                : undefined 

        }else if (userResponse == 'rejected'){
            usercontxt.setCookie('rejected');
            setupdateCookie(usercontxt.cookie_consent.value);
        };
       
    
    };

     /* cookie consent */

     
    return (
        <> 
            <Suspense fallback={<Preloader />} >
                <NavvBar cpage='/' usrcontext={usercontxt}/>
                <PromoBanner />
               
                <Experience pagetype='main' style={{'overflowX': 'hidden'}}>
                    <div className="bg-white">
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
                        <section className="relative h-[105vh] mt-2  mb-4 pb-4">
                          

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
                            
                                <ShineBorder isBlurred className='p-3 justify-center align-center mx-auto flex-cols col-7 bg-white h-[250px] w-[200px] mb-4'>
                                   
                                        <div className="mx-auto  lg:text-center">
                                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Daily Tournaments 6pm-9pm EST.</h2>
                                            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                Simply register and enter a tournament.
                                            </p>
                                            <p className="mt-6 text-tiny leading-2 text-gray-600">
                                                US Gamers must reside in <i> a valid state. </i>
                                            </p>
                                        </div>
                                    
                                </ShineBorder>
                                    <br></br>
                                    <Spacer></Spacer>
                                    <br></br>

                                    <div className="justify-center align-center mx-auto w-full mt-4 ">
                                        <h3 className='flex text-gray-900 text-center justify-center align-center max-auto  ml-3 font-bold'> <i className='ml-3'> GB Tourney Journey </i>  - <i className='text-small'>Mileage.</i></h3>
                                        <TourneyJourney />
                                    </div>

                                    <br></br>
                                    <div className='flex items-center justify-center align-center mx-auto col-8'>
                                        <span className="grid justify-center align-center mx-auto w-full lg:grid-cols-3 sm:grid-cols-1 space-0 gap-0">
                                            {tourney_journey.map((feature) => (
                                                <Chip variant='dot' size='md' color='success' key={feature.name} className='justify-center align-center mx-auto font-bold text-small text-black mb-2'>
                                                    {feature.name}
                                                </Chip>
                                            ))}
                                        </span>
                                    </div>
                                <div className='align-center justify-center mx-auto flex'>
                                    <PricingTable  />
                                </div>
                                
                        </section>
                        <Spacer></Spacer>
                        <br></br>
                        <section>
                            <SimpleSteps />
                        </section>
                        <br></br>
                        { updateCookie != null ? undefined : <CookieConsent showCookieConsent={showCookieConsent} /> }
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