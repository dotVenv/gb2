import React from "react";
import { Chip, Spacer } from "@nextui-org/react";
import ACMELogo from "../ACMELogo/acme";
import SSLBadge from '../../../imgs/pngs/ssl.png';
import Stripe from '../../../imgs/pngs/stripe.png';
const Footer = () => {

    return (
        <>
        <Spacer></Spacer>
        
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto  text-center align-center">
                <ACMELogo />
                <p className="my-6 text-gray-500 dark:text-gray-400">The #1 Online Esports Company.</p>
                <div className='flex align-center justify-center mx-auto'>
                    <img src={SSLBadge} style={{'height':'50px','width': '100px'}} />
                    <img src={Stripe} style={{'height':'50px','width': '100px'}} />
                </div>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="about-us" className="mr-4 hover:underline md:mr-6 ">About Us</a>
                    </li>
                    <li>
                        <a href="/contact-us" className="mr-4 hover:underline md:mr-6">Contact Us</a>
                    </li>
                    <li>
                        <a href="https://venv.pro" className="mr-4 hover:underline md:mr-6 ">dotVenv</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="/FAQ" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                   
                </ul>
                    <span className="my-6  text-gray-500 dark:text-gray-400">© 2021-2025 <a href="#" className="hover:underline">Gamers-Bounty Inc</a>. All Rights Reserved.</span>
                    <p className="my-6 text-gray-500 dark:text-gray-400 text-small">
                        Gamers-Bounty or any child company of GB, are in no way endorsed by or affiliated with any company or parent company that events are played on. Any logos, or copyrighted information of these companies are soley their property.           
                    </p>
            </div>
        </footer>


        </>
    );
};

export default Footer;