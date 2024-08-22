import React, { Suspense } from "react";
import { 
    ACMELogo,
    WordRotate,
   } from "../../components";
import { motion } from "framer-motion";
import { Spacer, Button } from "@nextui-org/react";


const MainSection = () => {

    return(
        <>
            <div className='mt-4'>
                <Spacer></Spacer>
                <ACMELogo />
                <br></br>
                <Spacer></Spacer>
                <WordRotate  
                    className="text-3xl  align-center  text-center justify-center font-bold text-black bg-transparent dark:text-white flex"
                    words={["GAMERS-BOUNTY", "PLAY GAMES", "WIN MONEY"]}/>
                <Spacer></Spacer>    
            </div>
            

        </>
    );

};
export default MainSection;