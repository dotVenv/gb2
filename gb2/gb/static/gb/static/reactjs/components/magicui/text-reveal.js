"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@nextui-org/react";
const TextRevealByWord = ({
  text,
  className,
  children
}) =>  {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    (<div ref={targetRef} className={cn(" relative  z-0  h-[103vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto h-[50%] max-w-4xl items-center align-center mx-auto bg-transparent px-[1rem] py-[2rem]"
        }>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-3xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-3xl xl:text-3xl"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              (<Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>)
            );
          })}
        </p>
        <br></br>
      <div className='justify-center align-center mx-auto col-12'>
        {children}
      </div>
      </div>
      
    </div>)
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    (<span className="xl: lg-3  relative justyf-center align-center mx-1 lg: mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
        {children}
      </motion.span>
    </span>)
  );
};

export default TextRevealByWord;
