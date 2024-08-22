import React from "react";
import { AnimatedGradientText } from '../index';

import gblogo from '../../../imgs/pngs/gb_logo.png';

const ACMELogo = () =>{
    return(
        <>
            <img src={gblogo}  className='justify-center align-center mx-auto'  style={{'height':'250px', 'width':'250px'}} />
            
        </>
    );
};
export default ACMELogo;