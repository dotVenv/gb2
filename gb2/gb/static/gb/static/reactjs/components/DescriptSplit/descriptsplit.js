import React, { useState } from "react";

import { Card, CardBody,Spacer } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import ReloadAnim from '../Animations/Player/Reload_anim';
const items = [
    {
        text: "SHOWCASE YOUR SKILLS", 
        initial: {x:-250,y:0},
        animate: {
            x:[-175, -230, 0],
            y:[-260,-200,-140,-80,-20,0],
           
            bounce: 0.4,
            },
        textanimate: {
            x:[-175, -100, -40, -25, 0],
            y:[-260,-200,-150]}
    },
    {
        text: "EARN MONEY FOR COMPETING", 
        initial: {x:-250,y:0},
        animate: {
            x:[-175, -130, -100, -75, -40, 0, 100, 0], 
            y:[-260,-200,-140,-80,-20,0],
           
            bounce: 0.4,
            },
        textanimate: {
            x:[-175, -140,-175],
            y:[-260,-200,-140,-80, -20, 0, 175]}
    },
    {
        text: "BECOME A BOUNTY HUNTER", 
        initial: {x:-250,y:0},
        animate: {
            x:[-175, -230,0], 
            y:[-260,-200,-140,-80,],
           
            bounce: 0.4,
            },
        textanimate: {
            x:[-175, -100, -40, -25, 150],
            y:[-260,-200,-140,-80,-20,0, 175]}

    },
  
]

const DescriptionSplit = () => {

    return(
            <TextScrollAnim >
                <div className="pt-4 pb-4"></div>
                <Spacer></Spacer>
                <Card isBlurred>
                    <CardBody>
                        <ReloadAnim />
                    </CardBody>
                </Card>
        
            </TextScrollAnim>
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