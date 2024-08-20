import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Card, CardBody,Spacer } from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import ReloadAnim from '../Animations/Player/Reload_anim';
import { motion } from "framer-motion";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
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
           <>
            <div className='relative grid grid-cols-2'>
                <TextScrollAnim />  
                <div className='relative z-10 inset-0   justify-end'>
                
                    <Spacer></Spacer>
                        
                        <Canvas>
                            <Environment preset='sunset' />
                            <ambientLight intensity={0.3} />
                            <pointLight position={[-1,3,1]}/>
                            <PerspectiveCamera makeDefault fov={4} position={[1 ,1, 0.05]} />
                           
                           <OrbitControls enableZoom={false} enableRotate={false} />
                           <ReloadAnim />  
                        </Canvas>
                </div> 
                
                    
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