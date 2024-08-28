import React, {Suspense} from "react";
import { 
    BorderBeam,
    EasySteps,} from "../../components";

import { Card } from "@nextui-org/react";

const TourneyJourney = () => {

    return (
       
   
            <div className="relative flex h-[450px]  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-foreground md:shadow-xl">

                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-gray dark:to-slate-900/10">
                        <EasySteps />
                </span>
            </div>
            
       
    );
};
export default TourneyJourney;