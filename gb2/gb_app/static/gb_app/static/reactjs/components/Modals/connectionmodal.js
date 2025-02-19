'use client';

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Card,
    CardHeader,
  } from "@nextui-org/react";


const ConnectionModal = ({ cu, isModalOpen,setModal}) => {


    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Modal className='from-zinc-800'
                isDismissable={false} 
                backdrop='blur'  
                size='md' 
                placement='center' 
                isOpen={isModalOpen} 
                onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'>Matchmaking -  Player Found</i></ModalHeader>
                <ModalBody >
                   <div className='grid grid-cols-3 gap-1'>
                    <Card className='p-4'>
                        <span className='text-small'>You <i className="fa-solid fa-location-pin fa-2xs"></i></span>
                        {cu.mm.value}
                    </Card>
                    <p className='text-white font-semibold justify-center align-center mx-auto'> VS </p>
                    <Card className='p-4'>
                        <span className='text-small'>Them <i className="fa-solid fa-location-pin fa-2xs"></i></span>
                        {cu.mm.value}
                    </Card>
                   </div>
                </ModalBody>
                <ModalFooter>
                    <Button startContent={<i className="fa-solid fa-hand-back-fist" style={{'color': 'white'}}></i>} color="success" variant="shadow" size='sm' radius='lg' onPress={(e) => { setModal(false)}}>
                        <i className='text-tiny text-white'>Accept Match</i>
                    </Button>
                    <Button startContent={<i className="fa-solid fa-hand-peace" style={{'color': 'white'}}></i>} color="danger" variant="shadow" size='sm' radius='lg' onPress={(e) => { setModal(false)}}>
                        <i className='text-tiny text-white'>Decline Match</i>
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