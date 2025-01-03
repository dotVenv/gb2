import React from "react";


const PartnerList = [
    {partner: null, img: null},
    {partner: null, img: null},
    {partner: null, img: null},
    {partner: null, img: null},
    

]
const OurPartners = () => {

    return (
        <>
        
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                    Trusted and Partnered with top gaming and Esports companies:
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {PartnerList.map((key, indx) => (
                        <img key={key} src={indx.img} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default OurPartners;