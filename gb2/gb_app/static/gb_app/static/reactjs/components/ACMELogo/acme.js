import React from "react";
import { AnimatedGradientText } from '../index';

import gblogo from '../../../imgs/pngs/gb_logo.png';

const ACMELogo = () =>{
    return(
        <>
            <a href='/'>
            <   img src={gblogo}  className='justify-center align-center mx-auto'  style={{'height':'100px', 'width':'100px'}} />
            </a>
        </>
    );
};
export default ACMELogo;