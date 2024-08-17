import React, {Suspense} from "react";
import { 
    DotPattern,
    TextRevealByWord, 
    BorderBeam,
    EasySteps,
    SponsorCards,
    WordRotate,
    HyperText,
    CheAnim,
    DescriptionSplit,
    PlayerModelHolder} from "../../components";

import gblogo from '../../../imgs/pngs/gb_logo.png';
import { cn,  Card, CardBody, Spacer } from "@nextui-org/react";

const Indx = () => {

    return (
        <> 
            <div className="pt-4 pb-4"></div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
                />
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
            <Spacer></Spacer>
            <section>
                <div className="pt-4 pb-4"></div>
                <Spacer></Spacer>
                <PlayerModelHolder>
                    <DescriptionSplit /> 
                </PlayerModelHolder>
                    
            </section>
           <Spacer></Spacer>
           <br></br>
           <div className="pt-4 pb-4"></div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
                />
            <div>
                <TextRevealByWord className='justify-center align-center mx-auto flex text-align' text="The New Online E-sports, Powered by dotVenv" />
            </div>
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
             <div className="pt-4 pb-4"></div>
        </>
    );
};


export default Indx;