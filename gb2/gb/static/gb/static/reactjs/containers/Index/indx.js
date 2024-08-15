import React, {Suspense} from "react";
import { NaviBar, SimpleSteps, DotPattern } from "../../components";
import { cn } from "@nextui-org/react";
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
           
               <div className='col-4 grid grid-cols-2 mx-auto justify-center align-center'>
                    <SimpleSteps />
                </div>
           

            </section>
            <section>
                <div>
                    <hr></hr>
                   
                </div>
             </section>
             <div className="pt-4 pb-4"></div>
        </>
    );
};


export default Indx;