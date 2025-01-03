import React from "react";
import { Chip, Spacer } from "@nextui-org/react";
const Footer = () => {

    return (
        <>
        <Spacer></Spacer>
        <Chip className="bg-transparent radius-lg align-center justify-center mx-auto shadow flex  " variant='shadow' >
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://gamers-bounty.com/" className="hover:underline">Gamers-Bounty</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Affiliates</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">API</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Terms And Conditions</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
            </div>
        </Chip>


        </>
    );
};

export default Footer;