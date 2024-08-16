import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Card, Spacer, Code } from "@nextui-org/react";
import { GuyGamerModel } from "./guy_gamer";
import { MotionConfig, motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";
import HyperText from "../magicui/hyper-text";

const AnimationTest = ({children}) => {

    return (
        <>
        
        <div id="canvas-container" className=" mx-auto h-[550px]">
            <div className="  inset-0 z-10">
                {children}
            </div>
            <Spacer></Spacer>
            <br></br>
            <div className='pt-4 pb-4'></div>
            <div className='absolute bg-transparent  mt-4'>
            <MotionConfig transition={{ type: "spring" }}>
                <motion.div  className='w-[550px] h-[450px] grid grid-cols-2 align-center justify-center mx-auto' >
                    <HyperText 
                        className="text-4xl  font-bold text-black dark:text-white"
                        text="Lorem Ipsum"
                        />
                    <motion.div>
                        <Canvas className='absolute inset-0 z-0'>
                            
                            <OrbitControls />
                            <GuyGamerModel />
                        </Canvas>
                    </motion.div>
                </motion.div>
            </MotionConfig>
            </div>
        </div>
        <br></br>
        </>
    );
};

export default AnimationTest;