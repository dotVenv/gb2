import React from "react";


import cdkeys_logo from '../../../imgs/pngs/partners/cdkeys_logo.png';
import razor_logo from '../../../imgs/pngs/partners/razor_logo.png';
import rogueenegry_logo from '../../../imgs/pngs/partners/rogueenegry_logo.png';
import vertagear_logo from '../../../imgs/pngs/partners/vertagear_logo.png';
import { CardBody,Card, CardFooter } from "@nextui-org/react";

const PartnerList = [
    {partner: 'cdkeys', img: cdkeys_logo},
    {partner: 'razor', img: razor_logo},
    {partner: 'rogue energy', img: rogueenegry_logo},
    {partner: 'vertagear', img: vertagear_logo},
    

];
const OurPartners = () => {

    return (
        <>
        
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                   Partnered with top gaming and Esports companies:
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {PartnerList.map((prtner) => (
                      
                        <img  key={prtner.partner} src={prtner.img} style={{'height': '50px', 'width': '50px'}}/>
                           
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default OurPartners;