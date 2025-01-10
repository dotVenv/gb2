'use client'


import React, {Suspense } from "react";
import { Spacer } from "@nextui-org/react";
import {FAQ, Preloader, PromoBanner } from "../../components/index";
import { 
    Experience,
    Footer,
    NavvBar
    } from "../../components";


const FreqAsked = () => {

    return(
        <>
            <Suspense fallback={<Preloader />}>
                <NavvBar />
                <PromoBanner />
                    <Experience pagetype={'faq'}>
                        <FAQ />
                    </Experience>
            </Suspense>
        </>
    );
};

export default FreqAsked;