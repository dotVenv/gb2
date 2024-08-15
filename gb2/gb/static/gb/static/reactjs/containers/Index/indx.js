import React from "react";
import { NaviBar, BorderBeam } from "../../components";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
const Indx = () => {

    return (
        <> 
            <div className="pt-4 pb-4"></div>
            <NaviBar />
            <div className='col-4 '>
                <Card 
                    isFooterBlurred
                    className="ml-4 h-[200px] w-[350px] rounded-xl">
                        <CardBody>
                            
                        </CardBody>
                        <CardFooter
                         className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className='text-tiny font-bold'> Register To Compete </p>
                        </CardFooter>
                        <BorderBeam  />
                </Card>
                
            </div>
        
        </>
    );
};


export default Indx;