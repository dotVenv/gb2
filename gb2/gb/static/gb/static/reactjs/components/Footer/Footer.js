import React from "react";
import { Chip, Spacer } from "@nextui-org/react";
import ACMELogo from "../ACMELogo/acme";

const Footer = () => {

    return (
        <>
        <Spacer></Spacer>
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div class="mx-auto  text-center align-center">
                <ACMELogo />
                <p class="my-6 text-gray-500 dark:text-gray-400">The #1 Online Esports Company.</p>
                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Tournaments</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                    <span class="my-6  text-gray-500 dark:text-gray-400">© 2021-2024 <a href="#" class="hover:underline">Gamers-Bounty Inc</a>. All Rights Reserved.</span>
                    <p class="my-6 text-gray-500 dark:text-gray-400 text-small">
                        Gamers-Bounty or any child company of GB, are in no way endorsed by or affiliated with any company or parent company that events are played on. Any logos, or copyrighted information of these companies are soley their property.           
                    </p>
            </div>
        </footer>


        </>
    );
};

export default Footer;