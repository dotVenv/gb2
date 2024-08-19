import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { Capsule, OrbitControls, PerspectiveCamera, Html, useScroll, Environment, PresentationControls, PivotControls, ScrollControls } from "@react-three/drei";
import WatcherModel from "../Room/Watcher";
import DescriptionSplit from "../../DescriptSplit/descriptsplit";
import { MotionCanvas } from "framer-motion-3d";
import { motion } from "framer-motion";

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
                            <Canvas>           
                                <Environment preset="sunset" />
                                <PerspectiveCamera makeDefault fov={4} position={[0, 0, 50]} />
                                
                                <mesh castShadow>
                                    <ambientLight intensity={2} />
                                    <pointLight position={[0, 0, 1.949]} />
                                   
                                     <WatcherModel />
                                    
                                    <OrbitControls 
                                        enableZoom={false}
                                        maxPolarAngle={5}
                                        maxAzimuthAngle={0.5}
                                    />
                                </mesh>
                            </Canvas>
                        </motion.div>
                     
                    
                    </div>
                </div>
            </>
    );
};

export default Experience;