import React, { useEffect, useState , useRef } from "react";

import { Avatar, CardBody,CardFooter,Spacer,  } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import AnimatedGradientText from "../magicui/animated-gradient-text";
import beargif from '../../../imgs/gifs/bear.gif';
import medalgif from '../../../imgs/gifs/medal.gif';
import moneygif from '../../../imgs/gifs/money.gif';
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
        img: medalgif,
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
            <div className='relative h-[40vh] justify-center mx-auto align-center'>
                <div className='absolute overflow-hidden  inset-0 '>
                    <b className='top-0'> <TextScrollAnim  displayText={0}/> </b>
                    <Spacer></Spacer>
                    <b className='bottom-0'><TextScrollAnim  displayText={1}/></b> 
                    <Spacer></Spacer>
                </div>      
               <Spacer></Spacer>
               
               <div className='h-[400px]  justify-center align-center mx-auto'>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-2  col-8 gap-4  justify-center align-center mx-auto text-black'>
                        <AnimatedGradientText className='w-full h-full col-8 grid grid-cols-1 bg-transparent'>
                            <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[0].img} /> 
                            <p className='text-large font-bold'> <i>{descItems[0].text}</i>  </p> 
                            <p className='text-small font-bold'> <i>{descItems[0].desc}</i> </p>
                        </AnimatedGradientText>
                        <AnimatedGradientText className='w-full h-full col-8 grid grid-cols-1 bg-transparent'>
                            <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[1].img} /> 
                            <p className='text-large font-bold'> <i>{descItems[1].text}</i>  </p> 

                            <p className='text-small font-bold'> <i>{descItems[1].desc}</i> </p>
                        </AnimatedGradientText>
                        <AnimatedGradientText className='w-full h-full col-8 grid grid-cols-1  bg-transparent'>
                            <img className='border-lg  border-rounded-md radius-sm justify-start float-start flex' style={{'height': '75px', 'width': '75px'}} src={descItems[2].img} /> 
                            <p className='text-large font-bold'> <i>{descItems[2].text}</i>  </p> 
                        </AnimatedGradientText>
                        <AnimatedGradientText className='w-full h-full col-8 grid grid-cols-1 bg-transparent'>
                            
                        </AnimatedGradientText>
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