'use client'


import React, { Suspense, useContext } from "react";
import { Spacer } from "@nextui-org/react";
import {FAQ, Preloader, PromoBanner } from "../../components";

import { 
    Experience,
    Footer,
    NavvBar
    } from "../../components";
import { UserContext } from "../../connector";


const FreqAsked = () => {

    const usrcontext = useContext(UserContext);

    return(
        <>
            <Suspense fallback={<Preloader />}>
                <NavvBar cpage='FAQ' usrcontext={usrcontext} />
                <PromoBanner />
                    <Experience pagetype={'faq'}>
                        <FAQ />
                    </Experience>
            </Suspense>
        </>
    );
};

export default FreqAsked;