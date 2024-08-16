import React, { Suspense, useEffect, useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { MotionConfig } from "framer-motion";
import { CheModel } from "./che";
import { Canvas } from "@react-three/fiber";



const CheAnim = ({children}) => {

    return(
        <>
            <div className=' relative'>
                <div className='absolute z-10 inset-0'>
                    {children}
                </div>
                <Suspense fallback ={null}>
                    <Canvas 
                        className='top-0 z-0 inset-0 h-[550px] justify-center opacity-15 align-center mx-auto'>
                        <CheModel />
                        <OrbitControls  enableZoom={false} />
                    </Canvas>
                </Suspense>
            </div>
        </>
    );
};

export default CheAnim;