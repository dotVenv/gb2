import React from "react";

import { Card, CardBody,Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import HyperText from "../magicui/hyper-text";

const items = [
    {
        text: "Unlock your full potential", 
        config: '',
    },
    {
        text: "Gain your own Audience", 
        config: '',
    },
    {
        text: "Earn Money while playing.", 
        config: '',
    },
    {
        text: "Become a Bounty Hunter.", 
        config: '',
    }
]
const DescriptionSplit = () => {
   return(
        <>
        { items.map((key, index) => {
             return(
                <div className=" grid grid-cols-2 space-x-0 gap-x-0 justify-center align-center mx-auto" key={index}>
                    <p className='font-mono justify-center align-center text-center mx-auto text-small font-bold text-black'><i>{key.text}</i></p>
                    <Card className='col-9 items-center' isBlurred>
                        <CardBody className='justify-center align-center mx-auto'>
                            
                        </CardBody>
                    </Card> 
                    <br></br>  
                    <Spacer></Spacer>
                </div>
                
                )
        })}
        </>
   );

};
export default DescriptionSplit;