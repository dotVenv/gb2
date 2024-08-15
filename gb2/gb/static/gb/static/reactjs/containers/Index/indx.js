import React, {Suspense} from "react";
import { NaviBar, SimpleSteps, DotPattern } from "../../components";
import { cn } from "@nextui-org/react";
const Indx = () => {

    return (
        <> 
            <div className="pt-4 pb-4"></div>
            
            <NaviBar />
            <section>
            <div className='col-4 flex'>
                <Suspense fallback={<p> Loading...</p>}>
                    <SimpleSteps />
                </Suspense>
            </div>
                <DotPattern
                    className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </section>
            <div className="pt-4 pb-4"></div>
        
        </>
    );
};


export default Indx;