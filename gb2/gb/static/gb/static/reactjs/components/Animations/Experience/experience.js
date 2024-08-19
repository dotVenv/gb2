import React, { useRef } from "react";

import DescriptionSplit from "../../DescriptSplit/descriptsplit";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, ScrollControls, Html, useScroll } from "@react-three/drei";
import SponsorCards from "../../SponsorCards/sponsorcards";
import WatcherStatueModel from "../Room/WatcherStatue";
import DotPattern from "../../magicui/dot-pattern";
import { cn } from "@nextui-org/react";


const DP = () =>{

    return(
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
        />
    );
};


const Experience = ({children}) =>{ 
    
  
    return(
            <> 
                <div className='relative'>
                    <div className='absolute inset-0 z-10 mt-4 '>
                        <SponsorCards />
                        
                    </div>
                    
                    <div className=' h-[900px] inset-0 z-0' 
                    style={{'opacity': '70%', 'border': '4px solid light','borderImageSlice': '1'}}>
                    
                        <Canvas>
                        
                            <Environment preset='sunset' />
                            <PerspectiveCamera makeDefault fov={75} position={[0,0,10]} />
                            <ambientLight intensity={0.3} />
                            <pointLight position={[-1,3,1]} />
                            <ScrollControls damping={0.3} pages={2}>
                                    <WatcherStatueModel /> 
                                    <OrbitControls
                                        maxPolarAngle={0.5}
                                        enableZoom={false}
                                        />
                            </ScrollControls>
                            
                        </Canvas>
                    </div>
                </div>
                {children}
            </>
    );
};

export default Experience;