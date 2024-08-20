import React, { Suspense } from "react";
import { 
    SponsorCards,
    WordRotate,
   } from "../../components";
import { motion } from "framer-motion";
import { Spacer, Button } from "@nextui-org/react";


const MainSection = () => {

    return(
        <>
        <section>
                <Spacer></Spacer>
                <SponsorCards />
                
                <br></br>
                <Spacer></Spacer>
                <WordRotate  
                        className="text-3xl  align-center  text-center justify-center font-bold text-black bg-transparent dark:text-white flex"
                        words={["REGISTER TODAY", "PLAY GAMES", "WIN MONEY"]}/>
                        <Spacer></Spacer>
                       
               
            </section>
        </>
    );

};
export default MainSection;