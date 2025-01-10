
import React, { Suspense } from "react";

import { Spacer,Form, Input, Button } from "@nextui-org/react";
import { ContactForm, NavvBar, Experience, Preloader, PromoBanner } from "../../components/index";


const ContactUs = () => {
    return(
        <>
            <Suspense fallback={<Preloader />}>
                <NavvBar />
                <PromoBanner />
                <Experience pagetype={'contactus'}>
                    <ContactForm />
                </Experience>
            </Suspense>
        </>
    );
};

export default ContactUs;