import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Environment } from "@react-three/drei";
import  {IsoRoomModel}  from "../index";
import { Card } from "@nextui-org/react";


const AnimationTest = ({children}) => {

    return (
        <>
        
        <div id="canvas-container" className=" mx-auto h-[550px]">
            <div className="  inset-0 z-10">
                {children}
            </div>
            <div className='w-[550px] h-[450px]  bg-transparent align-center justify-center mx-auto'>
            <Canvas className=' inset-0 z-0'>
                <ambientLight intensity={0.5} />
                <OrbitControls />
                <IsoRoomModel />
            </Canvas>
            </div>
        </div>
        <br></br>
        </>
    );
};

export default AnimationTest;