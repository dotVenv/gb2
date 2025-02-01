'use client';

import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Chip, Divider, Spacer, } from "@nextui-org/react";
import { TournamentDrawer } from '../../components';
import marvel_r from '../../../imgs/pngs/marvel_r.png';
    
const TournamentCard = () => {

    const [isOpen, setisOpen] = useState(false);
    

    return(
        <>
        <Card  isFooterBlurred className="bg-zinc-800 bg-transparent border-no w-full h-[300px]" radius='lg'>

            <img 
                className="object-cover h-full"
                 src={marvel_r} alt='tournament thumbnail' 
            />
          
          <CardFooter className="p-2 grid grid-cols-1 fixed bottom justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <span className='justify-center align-center mx-auto'> <b className='text-gray-100'>Marvel Rivals 2s</b> <i className='fa-solid fa-computer'></i></span>
            <div className="flex gap-2 justify-center align-items-center mx-auto pb-2 mt-3">
                <Chip radius='lg' size='md' variant='flat' color='default'
                    startContent={<i className="fa-solid fa-money-bills"></i>}>
                    <b>$200</b>
                </Chip>
                <Divider orientation="vertical" />
                <Chip radius='lg' size='md' variant='flat' color='default'
                    startContent={<i className="fa-solid fa-people-group"></i>}>
                    <b>0/75</b>
                </Chip>
            </div>
            <div className="flex justify-center align-center mx-auto">
                <i className="fa-solid fa-star" style={{'color': 'yellow'}}></i>
                <br></br>
                <p className="ms-2 text-sm font-bold text-gray-100">495</p>
                <Spacer></Spacer>
                
            </div>
            <Button onPress={(e) => { setisOpen(!isOpen)}} radius='lg' variant='shadow' color='secondary' size='sm' className='justify-center align-center mx-auto'> View Details </Button>
           
        </CardFooter>
        </Card>


        {isOpen ? <TournamentDrawer isOpen={isOpen} setisOpen={setisOpen} /> : undefined }
      
        </>
    );
};

export default TournamentCard;