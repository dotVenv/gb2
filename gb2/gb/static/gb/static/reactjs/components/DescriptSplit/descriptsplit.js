import React, { useEffect, useState , useRef } from "react";

import { motion, useScroll, frameData, } from "framer-motion";
import { Card, CardBody,CardFooter,Spacer, CardHeader, Image, Button } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import form_team from '../../../imgs/pngs/form_team.png';
import beargif from '../../../imgs/gifs/bear.gif';
import medalgif from '../../../imgs/gifs/medal.gif';
import moneygif from '../../../imgs/gifs/money.gif';
import AnimatedGradientText from "../magicui/animated-gradient-text";
import OrbCirlces from "../OrbitingCircles/orbcircles";
import HyperText from "../magicui/hyper-text";

const descItems = [
    {
        text: "COMPETE HEAD TO HEAD", 
        img: beargif ,
        ref: null,
        
    },
    {
        text: "EARN MONEY FOR COMPETING", 
        img: moneygif,
        ref: null,
    },
    {
        text: "BECOME A BOUNTY HUNTER", 
        img: medalgif,
        ref: null

    },
  
]

const currentIndex = signal(null);



const DescriptionSplit = () => {

    const { scrollYProgress } = useScroll();
    
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
                    <AnimatedGradientText className='w-full h-full justify-center align-center mx-auto col-8 shadow-2xl'>
                        
                        <div className='grid grid-cols-1  gap-1 col-12 gap-4 space-y-4 justify-center align-center mx-auto'>
                            
                            <div className='flex flex-cols gap-2 gap-x-2'>
                            
                            </div>

                            <h3>
                                Hello World
                            </h3>
                            <h3>
                                Hello World
                            </h3>
                        </div>
                    </AnimatedGradientText>
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