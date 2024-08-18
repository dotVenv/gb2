import React, {Suspense} from "react";
import MainSection from "../sections/mainsection";
import TourneyJourney from "../sections/tourneyjourney";

import { 
    DotPattern,
    TextRevealByWord, 
    DescriptionSplit,
    Experience
    } from "../../components";

import { cn,  Card, CardBody, Spacer, Button } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";


const CustomButton = ({children}) => {

    return (

    <>
    <div className='row flex col-4'>
        {children}
        <Button size='sm' className='col-4'> This is our badge</Button>
        </div>
    </>)
};

const DP = () =>{

    return(
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            )}
        />
    );
};
const Indx = () => {

    return (
        <> 
            <Experience />
        </>
    );
};


export default Indx;



{/* 
    
    <div className="pt-4 pb-4"></div>
    <DP />
    <MainSection />
    <Spacer></Spacer>
    <DescriptionSplit /> 
    <Spacer></Spacer>
    <br></br>
    <div className="pt-4 pb-4"></div>
        
    <DP />
    <div>
        <TextRevealByWord className='justify-center align-center mx-auto flex text-align' text="The New Online E-sports, Powered by dotVenv" />
    </div>
    <TourneyJourney />
    <div className="pt-4 pb-4"></div>


    
    */}