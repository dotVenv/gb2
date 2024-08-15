import React from "react";
import { AnimatedGradientText } from '../index';

import gblogo from '../../../imgs/pngs/gb_logo.png';

const SponsorCards = () =>{
    return(
        <>
        <AnimatedGradientText >
                    <img src={gblogo} style={{'height':'175px', 'width':'175px'}} />
               </AnimatedGradientText>
        </>
    );
};
export default SponsorCards;