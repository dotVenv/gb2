import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { Spacer } from '@nextui-org/react';
// The ParallaxText component does not require a default props object; instead, use destructuring with default values.
const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Use a constant range if needed, instead of wrapping values.
    const x = useTransform(baseX, (v) => `${wrap(-40, 35, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + -moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller " style={{ x }}>
                <span className="text-black  text-medium font-bold " style={{'fontSize': '2.5rem'}}>{children}</span>
            </motion.div>
           
            
        </div>
    );
}

// Renamed TextScrollAnim to App to match the typical component naming convention.
const TextScrollAnim = ({displayText}) => {
    if (displayText == 0){
        return (
                <div className='h-[75%] top-20' style={{ display: 'flex', flexDirection: 'column', opacity:'40%' }}>
                    <ParallaxText baseVelocity={5}>{' '} PLAY AND WIN MONEY. {' '}</ParallaxText>
                    
                    <ParallaxText baseVelocity={-5} >BECOME A BOUNTY HUNTER {' '} </ParallaxText>
                   <br></br>
                </div> )
    };
    if (displayText == 1){
        return(
                <div className='h-[69%] bottom-20' style={{ display: 'flex', flexDirection: 'column',opacity:'40%'}}>

                    <ParallaxText baseVelocity={-8} >SHOW YOUR SKILLS. {' '} </ParallaxText>
                    <br></br>
                    <ParallaxText baseVelocity={8}>{' '} GAIN AN AUDIENCE. {' '}</ParallaxText>
                    <br></br>
                </div>
        );
    };
    
};

export default TextScrollAnim;

