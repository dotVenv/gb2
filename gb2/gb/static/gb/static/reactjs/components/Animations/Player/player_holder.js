import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { PlayerSittingAnim } from "./Sitting_anim";
import VoxelPlayerModel from "./VoxelPlayer";
import { motion } from "framer-motion";
import { signal } from "@preact/signals-react";

const currentAnim = signal('sitting');
const hasJumped = signal(false);
const PlayerModelHolder = ({children}) => {

    
    const AllAnims = ['sitting', 'fall_start', 'falling', 'fall_getup'];

    const [animPlaying, setAnimPlaying ] = useState(currentAnim);
    useEffect(() => {
        const handleScroll = () => {
            // Example logic for switching animations based on scroll position

            const scrollPosition = window.scrollY;
            if (scrollPosition >= 300){
                hasJumped.value = false;
            }
            if (scrollPosition < 300) {
                setAnimPlaying('boxing');
                hasJumped.value = true;
            } else if (scrollPosition < 380) {
                setAnimPlaying('jump_down');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {children}
            
            <motion.div
                initial={{ x: -100, y: -415 }}
                className='h-[450px]'
                animate={animPlaying ==  'fall_getup' ? {y:[-170, -75,-70,-55,-30, -20, 0, 200,]}: undefined}

            >
                <Canvas
                    camera={{ position: [1, 1, 11] }} 
                    className='h-[450px]'
                >
                   
                   <ambientLight intensity={1} />
                    <VoxelPlayerModel animPlaying={animPlaying}  />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        
                    />
                </Canvas>
            </motion.div>
        </>
    );
};

export default PlayerModelHolder;