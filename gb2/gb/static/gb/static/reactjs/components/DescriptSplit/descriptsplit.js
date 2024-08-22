import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";

import { Card, CardBody,CardFooter,Spacer, CardHeader, Image, Button } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';

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

const DescriptionSplit = () => {

    return(
           <>
            <div className='relative h-[40vh]'>
                <div className='absolute overflow-hidden  inset-0 justify-center mx-auto'>
                        <b className='top-0'> <TextScrollAnim  displayText={0}/> </b>
                        <Spacer></Spacer>
                        <b className='bottom-0'><TextScrollAnim  displayText={1}/></b> 
                        <Spacer></Spacer>
                </div>      
               <Spacer></Spacer>
               
               <div className='relative  top-20 bottom-50 h-[400px] max-w-[900px] justify-between mx-auto gap-2 grid grid-cols-3 grid-rows-2 col-8'>
                { descItems.map((key, index) =>{
                    return(
                        <Card className='bg-gray-50 ' key={index}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                            </CardHeader>
                            <img src={key.img} />
                            
                        </Card>
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