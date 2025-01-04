import React from "react";

import { Card, Spacer } from "@nextui-org/react";
import ACMELogo from "../ACMELogo/acme";
import Footer from "../Footer/Footer";


const FAQ = () =>{

    return (
        <>
        

        <Spacer></Spacer>
            <section className='mt-4 pt-4'>
                <br></br>
                <Spacer></Spacer>
                <ACMELogo />
                <div className='flex mt-4 px-4 justify-center align-center mx-auto'>
                    <br></br>
                    <Spacer></Spacer>
                    <h2 className='text-black font-bold'> Frequently Asked Questions </h2>
                </div>

                
            </section>

        </>
    );

};
export default FAQ;