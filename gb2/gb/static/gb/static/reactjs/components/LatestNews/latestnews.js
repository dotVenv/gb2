import React from "react";
import { Chip, Button, ButtonGroup } from "@nextui-org/react";


const LatestNews = () => {
   return (
    <>  
        <ButtonGroup 
            className='gap-0 align-center justify-center flex flex-cols mx-auto pt-4 pb-4'>
            <Chip  size='sm' radius='md' variant='shadow' color='danger'><strong>Latest news!</strong></Chip>
            <Chip size='sm' radius='md' variant='shadow' color='default'>
                <span className="text-tiny text-bold">
                    <i>Gamers-Bounty 2.0 Relaunch is now Live and here to stay!</i>
                </span>
            </Chip>
        </ButtonGroup>
    </>

   );
};

export default LatestNews;