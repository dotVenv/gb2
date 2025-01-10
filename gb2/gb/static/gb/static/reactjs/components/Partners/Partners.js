import React from "react";


import cdkeys_logo from '../../../imgs/pngs/partners/cdkeys_logoo.png';
import razor_logo from '../../../imgs/pngs/partners/razor_logo.png';
import rogueenegry_logo from '../../../imgs/pngs/partners/rogueenegry_logo.png';
import vertagear_logo from '../../../imgs/pngs/partners/vertagear_logo.png';
import phantom_logo  from '../../../imgs/pngs/partners/phantom_logo.png';
import { CardBody,Card, CardFooter, Chip } from "@nextui-org/react";

const PartnerList = [
    {partner: 'cdkeys', img: cdkeys_logo, style:{'height': '50px','width': '120px'}},
    {partner: 'razor', img: razor_logo, style:{'height': '70px','width': '80px'}},
    {partner: 'rogue energy', img: rogueenegry_logo, style:{'height': '50px','width': '100px'}},
    {partner: 'vertagear', img: vertagear_logo, style:{'height': '80px','width': '80px'}},
    {partner: 'phantom wallet', img: phantom_logo, style:{'height': '80px','width': '80px'}},
    

];
const OurPartners = () => {

    return (
        <>
        
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                   Partnered with top gaming and Esports companies:
                </h2>
                <div className="lg:flex sm:grid sm:grid-cols-1 mx-auto mt-10 grid max-w-lg grid-cols-4 items-center align-center mx-auto gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {PartnerList.map((prtner) => (
                        <div key={prtner.partner} className='lg:grid-cols-1 sm:grid-cols-1 mx-auto align-center justify-center'>
                            <Chip variant='light' color='secondary' size='sm' radius='md'> <i className='font-bold text-small'>{prtner.partner}</i></Chip>
                            <br></br>
                            <img   src={prtner.img} style={prtner.style}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default OurPartners;