'use client';

import React, { useState, useMemo } from "react";
import { Spacer,Chip, ScrollShadow } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Tabs, Tab,
  } from "@nextui-org/react";
  

const MembershipModal = ({cu, setModal, isModalOpen }) => {

    const memInfo = useMemo(() => cu.membershipOptionsAtom, [cu.membershipOptionsAtom]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
        <Modal backdrop='blur' size='md' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'> Choose your memberhsip  <span className='text-tiny text-white'> Powered by <i className="fa-brands fa-cc-stripe fa-md"></i></span></i></ModalHeader>
                
                    <div className="flex flex-col px-4 p-4">
                    <Tabs variant='flat' className='text-black' color='primary' aria-label="Membership Options" >
                        { memInfo.map((key, index) => {
                            return(
                                    <Tab className='text-white' key={index} title={key.name.toLowerCase() == 'free' 
                                                    ? 'Free '
                                                    : key.name.toLowerCase() == '7day' 
                                                        ? 'Trial '
                                                        : key.name.toLowerCase() == 'monthly'
                                                            ? 'Official '
                                                            : undefined
                                                }>
                                      
                                            <p className='text-semibold'>{key.name.toLowerCase() == 'free' 
                                                    ? <span><b style={{'color': 'blue'}}>Free</b> Membership <i className='text-green-500'>${key.price}</i></span>
                                                    : key.name.toLowerCase() == '7day' 
                                                        ? <span><b style={{'color': 'blue'}}>Trial</b>  Membership <i  className='text-green-500'>${key.price}</i></span>
                                                        : key.name.toLowerCase() == 'monthly'
                                                            ? <span><b style={{'color': 'blue'}}>Official</b>  Membership <i  className='text-green-500'>${key.price}/month</i></span>
                                                            : undefined}</p>
                                                            
                                            {key.name.toLowerCase() == '7day' ? <><Chip className=' text-tiny p-3' size='sm' variant='flat' color='warning'><i>$14.99 after 7 days</i></Chip><Spacer></Spacer></> : undefined }
                                            <p className='text-small'> Details: {'   '} {key.name.toLowerCase() == 'free' 
                                                    ? <span><b>Free Membership</b> <i  className='text-green-500'>${key.price}</i></span>
                                                    : key.name.toLowerCase() == '7day' 
                                                        ? <span><b>Trial Membership</b> <i className='text-green-500'>${key.price}</i></span>
                                                        : key.name.toLowerCase() == 'monthly'
                                                            ? <span><b>Official Membership</b> 
                                                                <i  className='text-green-500'>${key.price}/month</i> <del className='text-red-500'> $19.99 </del><i className='text-tiny font-bold'> Limited time only</i></span>
                                                            : undefined}</p>
                                            
                                                <ul className='space-y-2'>
                                                { key.details.map((ket, vet) => {
                                                        return(<li key={vet} className='text-tiny'> <i className="fa-solid fa-circle-check"></i> { ket} </li>)
                                                    })}
                                                </ul>
                                            
                                          
                                                <Button variant='flat' color='secondary' isDisabled={key.name.toLowerCase() =='free' ? true : false } startContent={<i className="fa-solid fa-cart-plus"></i>}>
                                                    { key.name.toLowerCase() == 'free' ? undefined : 'Subscribe'}
                                                </Button>
                                          
                                        </Tab>
                                       )
                                    })}
                    </Tabs>
                  </div>
                <ModalFooter>
                    <Button color="danger" variant="shadow" onPress={(e) => { setModal(false)}}>
                        Close
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        
        </>
    );
};

export default MembershipModal;


{/*<Card  className='bg-gradient-to-tr from-gray-800 to-zinc-800 overflow-y-hidden h-[35vh]' key={index} >
    <CardHeader>
        <i className='text-small '> <b> 
            {key.name.toLowerCase() == 'free' 
                ? 'Free' 
                : key.name.toLowerCase() == '7day' 
                    ? 'Trial Competitor'
                    : key.name.toLowerCase() == 'monthly'
                        ? 'Official Competitor'
                        : undefined
        } </b> {key.name.toLowerCase() == '7day' ? <span className='text-tiny'>7-day(s)</span>: undefined } <br></br>${key.price} </i>
    </CardHeader>

    <CardBody>
        {key.name.toLowerCase() == '7day' ? <><Chip className=' text-tiny p-3' size='sm' variant='flat' color='warning'><i>$14.99 after 7 days</i></Chip><Spacer></Spacer></> : undefined }
        <p className='text-small'> Details: </p>
        
            <ul>
            { key.details.map((ket, vet) => {
                    return(<li key={vet} className='text-tiny'> <i className="fa-solid fa-circle-check"></i> { ket} </li>)
                })}
            </ul>
    </CardBody>

</Card> */}