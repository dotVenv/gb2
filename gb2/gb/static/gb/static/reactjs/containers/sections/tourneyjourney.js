import React, {Suspense} from "react";

import { 
    BorderBeam,
    EasySteps,} from "../../components";

import { Card } from "@nextui-org/react";

const TourneyJourney = () => {

    return (
        <div className='justify-center align-center mx-auto flex'>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-gray dark:to-slate-900/10">
                <EasySteps />
            </span>
        </div>
       
    );
};
export default TourneyJourney;