'use client';

import React, { useState, useMemo } from "react";
import { Spacer,Chip } from "@nextui-org/react";
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
  } from "@nextui-org/react";
  

const MembershipModal = ({cu, setModal, isModalOpen }) => {

    const memInfo = useMemo(() => cu.membershipOptionsAtom, [cu.membershipOptionsAtom]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  
    return(
        <>
        <Modal size='3xl' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'> Choose your memberhsip  <span className='text-tiny text-white'> Powered by <i className="fa-brands fa-cc-stripe fa-md"></i></span></i></ModalHeader>
                <ModalBody>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2'>
                        { memInfo.map((key, index) => {
                            return(<Card isPressable className='bg-gradient-to-tr from-[#FFB457] to-[#FF705B]' key={index} >
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
                                    {key.name.toLowerCase() == '7day' ? <><Chip className=' text-tiny p-3' size='sm' variant='flat' color='warning'>$14.99 after 7 days</Chip><Spacer></Spacer></> : undefined }
                                    <p className='text-small'> Details: </p>
                                    <ul>
                                       { key.details.map((ket, vet) => {
                                            return(<li key={vet} className='text-tiny'> <i className="fa-solid fa-circle-check"></i> { ket} </li>)
                                        })}
                                    </ul>
                                </CardBody>
                            </Card>)
                            
                        })}
                       
                  </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={(e) => { setModal(false)}}>
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