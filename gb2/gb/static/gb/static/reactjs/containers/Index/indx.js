import React, {Suspense} from "react";
import { 
    NaviBar, 
    DotPattern,
    TextRevealByWord, 
    BorderBeam,
    EasySteps,
    SponsorCards,
    WordRotate} from "../../components";

import gblogo from '../../../imgs/pngs/gb_logo.png';
import { cn,  Card, CardBody, Spacer, CardHeader } from "@nextui-org/react";
const Indx = () => {

    return (
        <> 
            <div className="pt-4 pb-4"></div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
                />
            <NaviBar />
            <section>
                <Spacer></Spacer>
               
               <SponsorCards />
               <br></br>
               <Spacer></Spacer>
               <WordRotate  
                    className="text-6xl  align-center  text-center justify-center font-bold text-black bg-transparent dark:text-white flex"
                    words={["REGISTER", "PLAY", "WIN MONEY"]}/>
                    <Spacer></Spacer>
              
            </section>
            
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
                />
                <TextRevealByWord className='justify-center align-center mx-auto flex' text="The New Online E-sports, Powered by dotVenv" />
               
             <section>
                <div className=' col-5 flex-cols mx-auto justify-center align-center'>
                <Card className='bg-background shadow'>
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-foreground md:shadow-xl">

                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-gray dark:to-slate-900/10">
                            <EasySteps />
                    </span>
                    <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </Card>
                </div>
             </section>
             <div className="pt-4 pb-4"></div>
        </>
    );
};


export default Indx;