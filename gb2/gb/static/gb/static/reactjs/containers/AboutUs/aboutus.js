'use client'


import React, {Suspense } from "react";
import { Spacer } from "@nextui-org/react";
import {AboutInfo, Preloader, PromoBanner } from "../../components/index";
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
            <PromoBanner />
                <Experience pagetype={'aboutus'}>
                    <AboutInfo />
                </Experience>
        </Suspense>
        </>
    );
};

export default AboutUs;