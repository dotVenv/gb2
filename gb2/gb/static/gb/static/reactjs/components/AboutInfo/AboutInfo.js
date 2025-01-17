import React, { useState, useContext } from "react";

import { Card, Spacer } from "@nextui-org/react";
import AboutStaff from "./AboutStaff";
import ACMELogo from "../ACMELogo/acme";
import Footer from "../Footer/Footer";
import { BorderBeam } from "../magicui/border-beam";
import gb_banner from '../../../imgs/pngs/gb_ab.png';
import { UserContext } from "../../connector";
import CookieConsent from "../Modals/CookieModal";

const AboutInfo = () => {


     /* cookie consent */
     const usrcontext = useContext(UserContext);
     const [updateCookie, setupdateCookie] = useState(usrcontext.cookie_consent.value);
 
     const showCookieConsent = (userResponse) =>{
         if (userResponse == 'accepted'){
             usrcontext.cookie_consent.value == 'accepted'
             ? updateCookie  == 'accepted'
                 ?  undefined 
                 : setupdateCookie(usrcontext.cookie_consent.value) 
             : usrcontext.setCookie('accepted') 
                 ? setupdateCookie(usrcontext.cookie_consent.value) 
                 : undefined 
 
         }else if (userResponse == 'rejected'){
             usrcontext.setCookie('rejected');
             setupdateCookie(usrcontext.cookie_consent.value);
         };
         
     };
 
         /* cookie consent */
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
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div className="mx-auto max-w-5xl">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product description</h2>
                        <div className="my-8 xl:mb-16 xl:mt-12">
                            <img className="w-full dark:hidden" src={gb_banner} alt="" />
                            <img className="hidden w-full dark:block" src={gb_banner} alt="" />
                        </div>
                        <div className="mx-auto max-w-2xl ">
                           
                                <p className='text-gray-600'>
                                Gamers-Bounty, originally established in 2019 during the intial rise of the pandemic, 
                                Greg thought of a way to bring compeitive gamers around the world a way to compete from home.
                                </p>
                        

                            <p className="text-base font-semibold text-black">Key Features and Benefits:</p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                <i className="fa-solid fa-caret-right"></i>
                                <span>
                                    <strong className="font-semibold text-gray-900">For Gamers by Gamers.</strong> Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <i className="fa-solid fa-caret-right"></i>
                                <span>
                                    <strong className="font-semibold text-gray-900">Constant Updates</strong> Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <i className="fa-solid fa-caret-right"></i>
                                <span>
                                    <strong className="font-semibold text-gray-900">24/7 Customer Support</strong> Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <i className="fa-solid fa-caret-right"></i>
                                <span>
                                    <strong className="font-semibold text-gray-900">Powered by dotVenv</strong> Lorem ipsum, dolor sit amet
                                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </span>
                                </li>

                            </ul>
                           
                            <span className="font-semibold text-black"> The vision of GB: </span>
                            <p className='text-base text-gray-600'>                            With majority of E-sports viewers being either casual or compeitive spectators in the competitions they're watching, it feels pretty limited on who's actually able to compete.
                            Seeing multi-million dollar tournaments with the same teams competing not only struck an idea but provided a solution to a problem on how allow all gamers alike to compete for if they feel they can.
                            A billion-dollar industry  shouldn't stop just at  events and such for gamers at a very limited capacity. If the a gamer has a skill, no need to fly out or grind a stream to get noticed. Now you can climb 
                            the ranks in your favorite game and get noticed by top players and teams while earning money on the way.</p>


                        
                        </div>

                        <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
                            <p className="text-base font-normal text-gray-600">For those gamers who find themselves competing daily, we want them to be able to possibly have a side or main hustle/income rather than playing ranked matches for fun. So we've relaunched with more powerful features, better performance, and security to ensure GB is the place for gamers to come.</p>

                            <p className="text-base font-normal text-gray-600">Have the option to go at it alone, or create/join a team compete with your org the choice is yours. WE here at Gamers-Bounty want to allow you to start where you want.</p>
                        </div>
                       
                        </div>
                    </div>
                    <BorderBeam />
                </Card>
                <div className='flex justify-center align-center mx-auto'>
                    <AboutStaff />
                </div>
            </section>

            { updateCookie != null ? undefined : <CookieConsent showCookieConsent={showCookieConsent} /> }
            <Footer></Footer>
            <br></br>
            
        </>
    );
};

export default AboutInfo;