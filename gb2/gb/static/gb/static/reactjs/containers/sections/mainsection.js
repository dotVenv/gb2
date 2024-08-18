import React, { Suspense } from "react";
import { 
    SponsorCards,
    WordRotate,
   } from "../../components";

import { Spacer } from "@nextui-org/react";


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
                        words={["REGISTER", "PLAY", "WIN MONEY"]}/>
                        <Spacer></Spacer>
               
                    <div>
                </div>
            </section>
        </>
    );

};
export default MainSection;