'use client';

import React from "react";
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


const ConnectionModal = ({ cu, isModalOpen,setModal}) => {


    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Modal className='bg-gadient-to-r from-zinc-800 to-green-700'
                isDismissable={false} 
                backdrop='blur'  
                size='md' 
                placement='center' 
                isOpen={isModalOpen} 
                onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'>Update Account 2FA </i></ModalHeader>
                <ModalBody >
                   
                </ModalBody>
                <ModalFooter>
                    <Button startContent={<i className="fa-solid fa-hand-back-fist"></i>} color="success" variant="shadow" size='sm' radius='lg' onPress={(e) => { setModal(false)}}>
                        Acccept Match
                    </Button>
                    <Button startContent={<i className="fa-solid fa-hand-peace"></i>} color="danger" variant="shadow" size='sm' radius='lg' onPress={(e) => { setModal(false)}}>
                        Decline Match
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>  
        </>
    );
};


export default ConnectionModal;