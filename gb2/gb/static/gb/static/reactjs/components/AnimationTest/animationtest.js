import React, { Suspense, useRef } from "react";
import { OrbitControls,Environment } from "@react-three/drei";
import { Card, Spacer } from "@nextui-org/react";
import { MotionConfig, motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";


const AnimationTest = ({children}) => {

    return (
        <>
        
        <div id="canvas-container" className=" mx-auto h-[550px]">
            <div className="  inset-0 z-10">
                {children}
            </div>
            <Spacer></Spacer>
            <div className=' bg-transparent '>
            <MotionConfig transition={{ type: "spring" }}>
                <motion.div  className='w-[550px] h-[450px]  align-center justify-center mx-auto' >
                    <Canvas className='inset-0 z-0'>
                        <ambientLight intensity={0.5} />
                        <OrbitControls />
                    
                    </Canvas>
                </motion.div>
            </MotionConfig>
            </div>
        </div>
        <br></br>
        </>
    );
};

export default AnimationTest;