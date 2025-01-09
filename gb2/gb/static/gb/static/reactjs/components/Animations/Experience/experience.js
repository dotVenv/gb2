import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, ScrollControls, Html, useScroll } from "@react-three/drei";
import { MainSection } from "../../../containers";
import WatcherStatueModel from "../Room/WatcherStatue";
import DotPattern from "../../magicui/dot-pattern";
import { Button, cn, Spacer } from "@nextui-org/react";
const DP = () =>{

    return(
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
        />
    );
};


const Experience = ({children, pagetype}) =>{ 
    
  
    return(
            <> 
                <div className=' bg-white'>
                    <div className='absolute inset-0 z-10 mt-4 justify-center align-center mx-auto'>
                        <section>
                            <DP />
                            { pagetype == 'main' 
                                ? <MainSection /> 
                                : undefined }
                            {children}
                        </section>
                        
                    </div>
                   
                    <div className=' h-[900px] inset-0 z-0 bg-light'  
                        style={{'opacity': '70%', 'border': '4px solid light','borderImageSlice': '1'}}>
                    
                        <Canvas className='bg-white'>
                        
                            <Environment preset='sunset' />
                            <PerspectiveCamera makeDefault fov={75} position={[0,0,10]} />
                            <ambientLight intensity={0.3} />
                            <pointLight position={[-1,3,1]} />
                            
                                <WatcherStatueModel /> 
                                <OrbitControls
                                    maxPolarAngle={0.5}
                                    enableZoom={false}
                                    />
                        </Canvas>
                       
                    </div>
                </div>
               
                
            </>
    );
};

export default Experience;