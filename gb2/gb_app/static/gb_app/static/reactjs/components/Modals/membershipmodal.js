'use client';

import React, { useState } from "react";
import { signal } from "@preact/signals-react";
import { useAtom } from "jotai";
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
  
const getMI = async(cu) => {
    let res = await cu.allMemberships('get');
    if (res){
        return res;
    };
};

const MembershipModal = ({cu, setModal, isModalOpen}) => {

    const [membershipOptions] = useAtom(cu.membershipOptionsAtom);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
        <Modal size='md' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2'>
                        <Card className=''>
                            <CardHeader>
                                <i> <b> Free </b> </i>
                            </CardHeader>
                            <CardBody>
                                <ul>
                                    <li> 1</li>
                                    <li> 2 </li>
                                </ul>
                            </CardBody>
                        </Card>
                        <Card className=''>
                            T2
                        </Card>
                        <Card className=''>
                            T3
                        </Card>
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