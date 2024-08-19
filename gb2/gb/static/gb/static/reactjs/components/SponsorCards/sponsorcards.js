import React from "react";
import { AnimatedGradientText } from '../index';

import gblogo from '../../../imgs/pngs/gb_logo.png';

const SponsorCards = () =>{
    return(
        <>
          
            <AnimatedGradientText className='w-[350px]'>
                <img src={gblogo} style={{'height':'250px', 'width':'250px'}} />
            </AnimatedGradientText>
            
        </>
    );
};
export default SponsorCards;