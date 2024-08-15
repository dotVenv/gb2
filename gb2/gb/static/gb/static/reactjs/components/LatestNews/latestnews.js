import React from "react";
import { Chip, Button, ButtonGroup } from "@nextui-org/react";


const LatestNews = () => {
   return (
    <>
        <ButtonGroup 
            className='gap-0 align-center justify-center flex mx-auto pt-4 pb-4'>
            <Chip  size='sm' radius='md' variant='shadow' color='danger'>Latest news</Chip>
            <Chip size='sm' radius='md' variant='shadow'></Chip>
        </ButtonGroup>
    </>

   );
};

export default LatestNews;