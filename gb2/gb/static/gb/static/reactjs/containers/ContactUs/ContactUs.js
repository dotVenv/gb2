
import React, { Suspense } from "react";

import { Spacer,Form, Input, Button } from "@nextui-org/react";
import { ContactForm, NavvBar, Experience, Preloader } from "../../components/index";


const ContactUs = () => {
    return(
        <>
            <Suspense fallback={<Preloader />}>
                <NavvBar />
                <Experience pagetype={'contactus'}>
                    <ContactForm />
                </Experience>
            </Suspense>
        </>
    );
};

export default ContactUs;