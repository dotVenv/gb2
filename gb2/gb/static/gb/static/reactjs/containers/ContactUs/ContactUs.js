
import React, { Suspense } from "react";

import { Spacer,Form, Input, Button } from "@nextui-org/react";
import { ContactForm, NavvBar, Experience } from "../../components/index";


const ContactUs = () => {
    return(
        <>
            <Suspense fallback={<p>Loading Esports Environment</p>}>
                <NavvBar />
                <Experience pagetype={'contactus'}>
                    <ContactForm />
                </Experience>
            </Suspense>
        </>
    );
};

export default ContactUs;