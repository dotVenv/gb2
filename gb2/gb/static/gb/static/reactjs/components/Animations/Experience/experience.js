import React from "react";

import { Canvas } from "@react-three/fiber";
import { Capsule, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from "@react-three/drei";

const Experience = () =>{ 
    const Scroll = useScroll();
    return(
        <>
            <Canvas 
                camera={<PerspectiveCamera  position={[1,1,1]}/>}
                fallback={<div>Sorry no WebGL supported!</div>}>
                <mesh scale={1}>
                    <boxGeometry />
                    <OrbitControls />
                </mesh>
            </Canvas>
        </>
    );
};

export default Experience;