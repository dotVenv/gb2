import React, { useRef } from "react";

import DescriptionSplit from "../../DescriptSplit/descriptsplit";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
const Experience = ({children}) =>{ 
    return(
            <> 
                <div className='relative'>
                <div className='absolute inset-0 z-0'>
                    { children }
                    <DescriptionSplit />
                </div>
                    
                    <div className=' h-[900px] inset-0 z-10'>
                        <motion.div
                            animate={{x:360}}
                        >
                            
                        </motion.div>
                     
                    
                    </div>
                </div>
            </>
    );
};

export default Experience;