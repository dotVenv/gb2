'use client'


import React, { Suspense, useContext } from "react";
import { Spacer } from "@nextui-org/react";
import {FAQ, Preloader, PromoBanner } from "../../components";

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