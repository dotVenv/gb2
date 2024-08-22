"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn, Code } from "@nextui-org/react";
export default function WordRotate({
  words,
  duration = 2500,

  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.20, ease: "easeOut" },
  },

  className
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    (<div className=" overflow-hidden  py-3">
      <AnimatePresence mode="wait">
        <motion.h1 key={words[index]} className={cn(className)} style={{'fontFamily': 'Typewriter'}} {...framerProps}>
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>)
  );
}
