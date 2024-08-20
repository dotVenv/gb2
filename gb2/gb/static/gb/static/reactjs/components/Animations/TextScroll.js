import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

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
    const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div className="scroller " style={{ x }}>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
            </motion.div>
            <motion.div className="scroller " style={{ x }}>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
                <span className="text-black text-large font-bold">{children}</span>
            </motion.div>
        </div>
    );
}

// Renamed TextScrollAnim to App to match the typical component naming convention.
const TextScrollAnim = () => {
    return (
        <section> 
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
                <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
            </div>
        </section>
    );
}

export default TextScrollAnim;

