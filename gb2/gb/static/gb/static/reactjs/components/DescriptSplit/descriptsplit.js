import React, { useEffect, useState , useRef } from "react";

import { motion, useScroll, frameData, } from "framer-motion";
import { Card, CardBody,CardFooter,Spacer, CardHeader, Image, Button } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import form_team from '../../../imgs/pngs/form_team.png';
import beargif from '../../../imgs/gifs/bear.gif';
import medalgif from '../../../imgs/gifs/medal.gif';
import moneygif from '../../../imgs/gifs/money.gif';

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
    const handleHover = (index) =>{
        currentIndex.value = index;
        return ({scale:1.2,rotateY:360})
    };


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
               
               <div className='h-[400px] grid sm:grid-cols-1 lg:grid-cols-3 justify-center align-center flex-col'>
                { descItems.map((key, index) => {
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
                })}
               
               
                </div>
                <br></br>
               
            </div>   
            </>
           
   );

};
export default DescriptionSplit;


{/* items.map((key, index) => {
    return(
       
       <div className=" grid lg:grid-cols-2  sm:grid-grid-cols-1 space-x-0 gap-x-0 justify-center align-center mx-auto" key={index}>
           <h1 className='text-black  flex font-bold text-large'>{key.text}</h1>
           <Card  
               isBlurred 
               className=' w-full col-12 items-center bg-transparent'
               style={{'borderRadius': '20px'}}>
               <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
               
               </div>
               
           </Card> 
           <br></br>  
           <Spacer></Spacer>
       </div>
       
       )
}) 
       
 { descItems.map((key, index) =>{
                    return(
                        <motion.div
                            initial={{x:0,y:0, opacity:0}}
                            whileInView={{ opacity: 1 }}
                            whileHover={{scale:1.2,rotateY:360}}
                            key={index} 
                            
                        >

                            <Card 
                                
                                ref={key.ref}
                                className='bg-gray/10 '
                                radius='lg' 
                                isHoverable 
                                isBlurred>
                                
                                    <img className=" w-[250px] h-[250px]" src={key.img}  />
                                
                               {currentIndex.value == index 
                                    ? <CardFooter> Hello Gamer </CardFooter>
                                    
                                    : undefined 
                                }
                            </Card>
                            
                        </motion.div>
                    )
                })}
                    
                */}