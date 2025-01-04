'use client'


import React, {Suspense } from "react";
import { Spacer } from "@nextui-org/react";
import { 
    Experience,
    Footer,
    NavvBar
    } from "../../components";



const AboutUs = () => {

    return (
        <>
        <Suspense fallback={<p>Loading Esports Environment</p>}>
            <NavvBar />
                <Experience pagetype={'aboutus'}>
              
                </Experience>
        </Suspense>
        </>
    );
};

export default AboutUs;