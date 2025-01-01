import React, { useEffect, useState , useRef } from "react";

import { Avatar, CardBody,CardFooter,Spacer, Card, Button } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import AnimatedGradientText from "../magicui/animated-gradient-text";
import beargif from '../../../imgs/gifs/bear.gif';
import medalgif from '../../../imgs/gifs/medal.gif';
import moneygif from '../../../imgs/gifs/money.gif';
import ww_available from '../../../imgs/pngs/worldwide.png';
const descItems = [
    {
        text: "COMPETE HEAD TO HEAD", 
        desc: "Compete head-to-head or form a team and go for a top placement. We designed a unique matchmaking system for indiviual players and teams to allow lightening quick connection.",
        img: beargif ,
        ref: null,
        
    },
    {
        text: "EARN MONEY FOR PLACING",
        desc: "Tired of playing for fun? Sign up and each match can earn you progress towards a cashout. Top placing gamers will earn a credit to their balance which they will be able to withdrawal at anytime via paypal,stripe, and others.", 
        img: moneygif,
        ref: null,
    },
    {
        text: "BECOME A BOUNTY HUNTER", 
        desc: "Those who finish in a top placement in multiple events will soon earn their rank to Bounty Hunter! With this status, you can earn eligible prizes along-side the prize pool for every tournament you enter.",
        
        img: medalgif,
        ref: null

    },
    {
        text: "NOW WORLDWIDE & AND API DRIVEN", 
        desc: "Overseas or not, have the option to search and connect to tournaments based in your region and payout to your currency. With the relaunch of GB, we've also done a complete API rework to allow automated game results.",
        
        img: ww_available,
        ref: null

    },
  
]

  
const stats = [
    { id: 1, name: 'Bounty Hunters', value: '44 million' },
    { id: 2, name: 'Paid Out', value: '$119 trillion' },
    { id: 3, name: 'Total Gamers', value: '46,000' },
  ]

const DescriptionSplit = () => {


    descItems.map((key, index) => {
        key.ref = useRef();
    });
  

    return(
           <>
     
          
                <div className='relative lg:h-[400px] sm:h-[750px] justify-center mx-auto align-center'>
                   
                    <div className='absolute h-[500px] overflow-hidden  inset-0  mt-3'>
                        <b className='sticky top'> <TextScrollAnim  displayText={0}/> </b>
                        <Spacer></Spacer>
                        <b className='sticky bottom'><TextScrollAnim  displayText={1}/></b> 
                        <Spacer></Spacer>
                    </div>      
                <Spacer></Spacer>
                
                <div className='lg:h-[500px]  sm:h-[850px]'>
                    <div className='flex  gap-4  text-black'>
                        
                        <AnimatedGradientText className='w-full h-full  col-9 grid grid-cols-1 bg-transparent'>
                            <Spacer></Spacer>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-4'>
                                    <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[0].img} /> 
                                    <p className='text-large font-bold'> <i>{descItems[0].text}</i>  </p> 
                                    <br></br>
                                    <p className='text-small'> {descItems[0].desc} </p>
                                </div>
                                
                                <div>
                                    <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[1].img} /> 
                                    <p className='text-large font-bold'> <i>{descItems[1].text}</i>  </p> 
                                    <br></br>
                                    <p className='text-small'> {descItems[1].desc} </p>
                                </div>
                            </div>

                            <br></br>
                            <Spacer></Spacer>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='mb-4'>
                                    <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[2].img} /> 
                                    <p className='text-large font-bold'> <i>{descItems[2].text}</i>  </p> 
                                    <br></br>
                                    <p className='text-small'> {descItems[2].desc} </p>
                                </div>
                                
                                <div>
                                    <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[3].img} /> 
                                    <p className='text-large font-bold'> <i>{descItems[3].text}</i>  </p> 
                                    <br></br>
                                    <p className='text-small'> {descItems[3].desc} </p>
                                </div>
                                <Button variant='light' color='primary' className='border-rounded'> Sign up now </Button>
                            </div>
                        </AnimatedGradientText>
                        
                        <br></br>
                      
                    </div>
                    </div>
                    <br></br>
                </div>
            </>
           
   );

};
export default DescriptionSplit;


{/*{ descItems.map((key, index) => {
                    return(
                        <motion.div
                            className='col-7 justify-center align-center mx-auto'
                           
                            whileInView={{opacity:1}}
                            whileHover={{scale:1.2, rotateY:360}}
                            key={index}
                            >
                                <Card
                                    isHoverable
                                    isBlurred
                                    radius="lg">
                                        <CardHeader>
                                            {key.text}
                                        </CardHeader>
                                            <img src={key.img} className="align-center justify-center mx-auto w-full h-full" style={{'width' : '175px', 'height': '175px'}} />
                                        <CardFooter>
                                            {key.text}
                                        </CardFooter>
                                </Card>
                            
                        </motion.div>
                    )
                })}*/}