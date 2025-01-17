
import React, { Suspense, useContext } from "react";

import { Spacer,Form, Input, Button } from "@nextui-org/react";
import { ContactForm, NavvBar, Experience, Preloader, PromoBanner } from "../../components/index";
import { UserContext } from "../../connector";


const ContactUs = () => {
    
    const usrcontext = useContext(UserContext);

    return(
        <>
            <Suspense fallback={<Preloader />}>
                <NavvBar cpage='contact-us' usrcontext={usrcontext} />
                <PromoBanner />
                <Experience pagetype={'contactus'}>
                    <ContactForm />
                </Experience>
            </Suspense>
        </>
    );
};

export default ContactUs;