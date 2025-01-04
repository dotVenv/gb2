import React from "react";

import { Card, Spacer } from "@nextui-org/react";
import AboutStaff from "./AboutStaff";
import ACMELogo from "../ACMELogo/acme";
import Footer from "../Footer/Footer";
import { BorderBeam } from "../magicui/border-beam";

const AboutInfo = () => {

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
                    <h2 className='text-black font-bold'> About Us </h2>
                </div>

                    <Card className='flex justify-center align-center mx-auto col-8 bg-transparent '>
                    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div class="mx-auto max-w-5xl">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product description</h2>
                        <div class="my-8 xl:mb-16 xl:mt-12">
                            <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase.svg" alt="" />
                            <img class="hidden w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg" alt="" />
                        </div>
                        <div class="mx-auto max-w-2xl space-y-6">
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.</p>

                            <p class="text-base font-semibold text-gray-900 dark:text-white">Key Features and Benefits:</p>
                            <ul class="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <li>
                                <span class="font-semibold text-gray-900 dark:text-white"> Brilliant 4.5K Retina display: </span>
                                see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display. The P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness. Industry-leading anti-reflective coating delivers greater comfort and readability. And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your
                                environment, for a more natural viewing experience. So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.
                            </li>
                         
                            </ul>
                        </div>

                        <div class="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C connector), a 3.5 mm headphone jack conveniently mounted on the left edge of the display, Wi-Fi 6 (802.11ax), and Bluetooth 5.0.</p>

                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">A-Grade/CR: iMacs are in 9/10 Cosmetic Condition and are 100% Fully Functional. iMacs will be shipped in generic packaging and will contain generic accessories. 90 Days Seller Warranty Included. iMacs may show signs of wear like scratches, scuffs and minor dents.</p>
                        </div>
                       
                        </div>
                    </div>
                    <BorderBeam />
                </Card>
                <div className='flex justify-center align-center mx-auto'>
                    <AboutStaff />
                </div>
            </section>
            <Footer></Footer>
            <br></br>
            
        </>
    );
};

export default AboutInfo;