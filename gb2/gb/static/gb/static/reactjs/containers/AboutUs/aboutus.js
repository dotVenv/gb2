'use client'


import React, {Suspense, useContext } from "react";
import { Spacer } from "@nextui-org/react";
import {AboutInfo, Preloader, PromoBanner } from "../../components/index";
import { 
    Experience,
    Footer,
    NavvBar
    } from "../../components";
import { UserContext } from "../../connector";



const AboutUs = () => {

    const usrcontext = useContext(UserContext);

    return (
        <>
        <Suspense fallback={<Preloader />}>
            <NavvBar cpage='about-us' usrcontext={usrcontext} />
            <PromoBanner />
                <Experience pagetype={'aboutus'}>
                    <AboutInfo />
                </Experience>
        </Suspense>
        </>
    );
};

export default AboutUs;