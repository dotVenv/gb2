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
    Avatar,
    Spacer,
  } from "@nextui-org/react";
import { CompCard } from '../../components';

const ConnectionModal = ({ userInfo, isModalOpen,setModal, opponent}) => {


    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    console.log(opponent);

    return(
        <>
            <Modal className='from-zinc-800'
                isDismissable={false} 
                backdrop='blur'  
                size='xl' 
                placement='center' 
                isOpen={isOpen} 
                onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'>Matchmaking -  Player Found</i></ModalHeader>
                <ModalBody >
                   <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-0 space-x-0 w-full'>
                        <CompCard userInfo={userInfo}  />
                        <span className='text-white text-4xl font-semibold justify-center align-center mx-auto'> VS <br></br><i className="fa-solid fa-hand-fist"></i> </span>
                        <CompCard opponent={opponent}  />
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