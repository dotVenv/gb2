'use client'


import React, {Suspense } from "react";
import { Spacer } from "@nextui-org/react";
import {AboutInfo, Preloader} from "../../components/index";
import { 
    Experience,
    Footer,
    NavvBar
    } from "../../components";



const AboutUs = () => {

    return (
        <>
        <Suspense fallback={<Preloader />}>
            <NavvBar />
                <Experience pagetype={'aboutus'}>
                    <AboutInfo />
                </Experience>
        </Suspense>
        </>
    );
};

export default AboutUs;