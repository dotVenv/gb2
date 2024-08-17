import React, { useState } from "react";

import { Card, CardBody,Spacer } from "@nextui-org/react";
import { animate, motion } from "framer-motion";
import { signal } from "@preact/signals-react";
import HyperText from "../magicui/hyper-text";
import {PlayerModelHolder} from '../index';
const items = [
    {
        text: "Unlock your full potential", 
        initial: {x:-175, y:-260},
        animate: {
                    x:[-175, -130, -100, -75, -40, 0], 
                    y:[-260,-200,-140,-80,-20,0]}
    },
    {
        text: "Gain your own Audience", 
        initial: {x:-175, y:-260},
        animate: {
                    x:[-175, -130, -100, -75, -40, 0], 
                    y:[-260,-200,-140,-80,-20,0]}
    },
    {
        text: "Earn Money while playing.", 
        animate: {
            x:[-175, -130, -100, -75, -40, 0], 
            y:[-260,-200,-140,-80,-20,0]}
    },
    {
        text: "Become a Bounty Hunter.", 
        animate: {
            x:[-175, -130, -100, -75, -40, 0], 
            y:[-260,-200,-140,-80,-20,0]}
    }
]

const DescriptionSplit = () => {

    return(
        <>
        { items.map((key, index) => {
             return(
                
                <div className=" grid grid-cols-2 space-x-0 gap-x-0 justify-center align-center mx-auto" key={index}>
                    <motion.div
                        initial={{x:250,y:0}}
                        whileInView={{x:0, y:0 }}>
                        <p className='font-mono justify-center align-center text-center mx-auto text-small font-bold text-black'><i>{key.text}</i></p>
                    </motion.div>
                    <motion.div
                        initial={key.initial} 
                        whileInView={key.animate}
                        scale={1}
                    
                    >
                        <Card isHoverable className='col-9 items-center' isBlurred>
                            <CardBody className='justify-center align-center mx-auto'>
                                
                            </CardBody>
                        </Card> 
                    </motion.div>
                    <br></br>  
                    <Spacer></Spacer>
                    
                </div>
                
                )
        })}
        </>
   );

};
export default DescriptionSplit;