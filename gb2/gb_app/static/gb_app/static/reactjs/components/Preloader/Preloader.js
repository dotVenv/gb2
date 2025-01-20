import React from "react";
import { Spacer } from "@nextui-org/react";
import preload_gif from '../../../imgs/gifs/preload.gif';
import ACMELogo from "../ACMELogo/acme";

const Preloader = () => {

    return (
        <>
            <section className='w-full h-full bg-white'>
                <br></br>
                <Spacer></Spacer>
                <ACMELogo />
                <div className='flex mt-4 px-4 justify-center align-center mx-auto'>
                    <br></br>
                    <Spacer></Spacer>
                </div>
                <h5 className='font-bold  text-center text-black'><i> Loading E-sports Environment...</i></h5>
                <Spacer></Spacer>
                <div className='flex justify-center align-center mx-auto w-full h-full bg-transparent'>
                    <img src={preload_gif} style={{'height': '150px', 'width': '150px'}} className='bg-transparent' />
                </div>
            </section>
        </>
    );

};

export default Preloader;