import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Card, CardBody,CardFooter,Spacer, CardHeader, Image, Button } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import form_team from '../../../imgs/pngs/form_team.png';

const descItems = [
    {
        text: "COMPETE HEAD TO HEAD", 
        img: form_team ,
        
    },
    {
        text: "EARN MONEY FOR COMPETING", 
        img: null,
    },
    {
        text: "BECOME A BOUNTY HUNTER", 
        img:null,

    },
  
]

const currentIndex = signal(null);



const DescriptionSplit = () => {

    const handleHover = (index) =>{
        currentIndex.value = index;
        return ({scale:1.2,rotateY:360})
    };

    useEffect(() => {
        console.log('CI updated to ' + currentIndex.value);
    }, [currentIndex.value])
    
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
               
               <div className='relative  top-20 bottom-50 h-[400px] gap-2 space-x-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 '>
                { descItems.map((key, index) =>{
                    return(
                        <motion.div
                            initial={{x:0,y:0}}
                            whileHover={{scale:1.2,rotateY:360}}
                            key={index} 
                        >

                            <Card 
                                className='bg-gray-50 '
                                radius='lg' 
                                isHoverable 
                                isBlurred
                                >
                                
                                <img className="container-fluid image-container w-[250px] h-[250px]" src={key.img}  />
                                
                               {currentIndex.value == index 
                                    ? <CardFooter> Hello Gamer </CardFooter>
                                    
                                    : undefined }
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
}) */}