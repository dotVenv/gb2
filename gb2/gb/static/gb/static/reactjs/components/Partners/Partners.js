import React from "react";
import { Spacer } from "@nextui-org/react";

import cdkeys_logo from '../../../imgs/pngs/partners/cdkeys_logoo.png';
import razor_logo from '../../../imgs/pngs/partners/razor_logo.png';
import rogueenegry_logo from '../../../imgs/pngs/partners/rogueenegry_logo.png';
import vertagear_logo from '../../../imgs/pngs/partners/vertagear_logo.png';
import phantom_logo  from '../../../imgs/pngs/partners/phantom_logo.png';
import { Chip } from "@nextui-org/react";

const PartnerList = [
    {partner: 'cdkeys ', img: cdkeys_logo, style:{'height': '80px','width': '100px'}},
    {partner: 'razer ', img: razor_logo, style:{'height': '80px','width': '80px'}},
    {partner: 'rogue energy ', img: rogueenegry_logo, style:{'height': '80px','width': '100px'}},
    {partner: 'vertagear ', img: vertagear_logo, style:{'height': '80px','width': '80px'}},
    {partner: 'phantom wallet ', img: phantom_logo, style:{'height': '80px','width': '80px'}},
    

];
const OurPartners = () => {

    return (
        <>
        
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto ">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                   Partnered with top gaming and Esports companies:
                </h2>
                <div className="grid sm:grid-cols-1 lg:grid-cols-5 mx-auto mt-10 max-w-7xl justify-center items-center text-center align-center  lg:gap-x-12 sm:gap-y-4 ">
                    {PartnerList.map((prtner) => (
                        <div key={prtner.partner} className='lg:grid-cols-1 sm:grid-cols-1 mx-auto align-center justify-center '>
                            <div>   
                                <img   className='justify-center align-center mx-auto' src={prtner.img} style={prtner.style}/>
                            </div>
                            <br></br>
                            <Chip className='justify-center align-center mx-auto text-center' variant='light' color='secondary' size='sm' radius='md'> <i className='font-bold text-small'>{prtner.partner}</i></Chip>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default OurPartners;