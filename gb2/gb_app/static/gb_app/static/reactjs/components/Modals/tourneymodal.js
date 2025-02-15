'use client';


import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    Input,
    useDisclosure,
    Chip,
    Switch,
    Snippet,
    InputOtp,
  } from "@nextui-org/react";


const TourneyModal = ({isModalOpen, setModal}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
        <Modal isDismissable={true} backdrop='blur'  size='full' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-100'> Tournament </i></ModalHeader>
                <ModalBody >
                    <p> Build tournament here </p>
                </ModalBody>
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

export default TourneyModal;