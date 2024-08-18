import React, {Suspense} from "react";
import { 
    BorderBeam,
    EasySteps,} from "../../components";

import { Card } from "@nextui-org/react";

const TourneyJourney = () => {

    return (
       
        <section className='w-50 mx-auto bg-transparent justify-center align-center'>
              
              <div className='bg-transparent '>
              <Card className='bg-transparent shadow'>
              <div className="relative flex h-[450px]  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-foreground md:shadow-xl">

                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-gray dark:to-slate-900/10">
                          <EasySteps />
                  </span>
                  <BorderBeam size={250} duration={12} delay={9} />
                  </div>
              </Card>
              </div>
           </section>
       
    );
};
export default TourneyJourney;