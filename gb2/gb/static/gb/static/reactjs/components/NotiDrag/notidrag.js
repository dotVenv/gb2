import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
const NotiDrag = () => {

    return(
        <>
            
                <Button 
                    variant='ghost'
                    isIconOnly
                    size='md'

                    className="justify-center align-center mx-auto flex mt-2  col-2">
                    <i className="fa-solid fa-angle-down fa-2xl"></i>
                </Button>
                <br></br>
                <div className='grid grid-cols-3 bg-transparent'>
                    <Card className='bg-transparent'>
                        <CardBody>
                            c1
                        </CardBody>
                    </Card>
                    <Card className='bg-transparent'>
                        <CardBody>    
                            c2                       
                        </CardBody>
                    </Card>
                    <Card className='bg-transparent'>
                        <CardBody>
                            c3
                        </CardBody>
                    </Card>
                </div>
            
        </>
    );    
};

export default NotiDrag;