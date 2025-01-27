'use client';

import React from "react";
import { Card, CardBody, CardFooter, Chip, Divider, Spacer } from "@nextui-org/react";



const TournamentCard = () => {

    return(
        <>
        <Card  
                isFooterBlurred className=" p-4 justify-center align-center mx-auto bg-gradient-to-r from-gray-800 to-zinc-900"
                isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                <CardBody >
                    <img
                    alt="Card background"
                    className="object-cover justify-center align-center mx-auto"
                    radius='lg'
                    shadow='sm'
                    src='#'
                    width='100%'
                    height={250}
                    />
                </CardBody>
                <CardFooter className=' grid grid-cols-1 text-small  gap-0 space-x-1'> 
                    <b className="text-small font-bold"><i>Marvel Rivals</i> </b>
                    <b className="text-tiny font-bold"><i>6v6 2s Tournament</i> </b>
                    <br></br>
                    <div className="flex gap-2 justify-center align-items-center mx-auto pb-2">
                        <Chip radius='lg' size='sm' color='secondary'
                            startContent={<i className="fa-solid fa-money-bills"></i>}>
                            <b>$200</b>
                        </Chip>
                        <Divider orientation="vertical" />
                        <Chip radius='lg' size='sm' color='secondary'
                            startContent={<i className="fa-solid fa-people-group"></i>}>
                            <b>0/75</b>
                        </Chip>
                    </div>
                    <Spacer></Spacer>
                    <p className='text-tiny text-gray-400'> <i>Click to view details </i> </p>
                </CardFooter>
            </Card>
        
        </>
    );
};

export default TournamentCard;