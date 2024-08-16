import React, { Suspense, useEffect, useRef } from "react";

import { OrbitControls, PivotControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { MotionConfig } from "framer-motion";
import { CheModel } from "./che";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "three";


const CheAnim = ({children}) => {
    
    return(
        <>
            <div className=' relative h-[550px]'>
                <div className='absolute z-10 inset-0'>
                    {children}
                </div>
                <Suspense fallback ={null}>
                    <motion.div
                        scale={2}
                        initial={{x:50, y:50}}>
                        <Canvas className='top-0 z-0 inset-0 h-full justify-center opacity-15 align-center mx-auto'>
                            <CheModel />
                            <OrbitControls />
                        </Canvas>
                    </motion.div>
                </Suspense>
            </div>
        </>
    );
};

export default CheAnim;