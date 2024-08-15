import React, {Suspense} from "react";
import { 
    NaviBar, 
    SimpleSteps, 
    DotPattern,
    TextRevealByWord, 
    BorderBeam,
    AnimatedGradientText, 
    
    OrbCirlces} from "../../components";
import { cn,  Card, CardBody, Spacer } from "@nextui-org/react";
const Indx = () => {

    return (
        <> 
            <div className="pt-4 pb-4"></div>
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                />
            <NaviBar />
            <section>
                <Spacer></Spacer>
               
               <AnimatedGradientText >
                    🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                        <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        )}
                        >
                        Official 2.0 Relaunch 
                    </span>
                    
               </AnimatedGradientText>
               <br></br>
               <div className=' col-8 flex-cols grid lg:grid-cols-2 sm:grid-cols-1 mx-auto justify-center align-center'>
               <Card className='bg-foreground shadow'>
                
               </Card>
                </div>
            </section>
            
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
                />
                <TextRevealByWord className='justify-center align-center mx-auto flex' text="The New Online E-sports, Powered by dotVenv" />
               
             
             <div className="pt-4 pb-4"></div>
        </>
    );
};


export default Indx;