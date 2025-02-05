'use client';

import React, { useContext, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Form,
    Spacer,
    Input,
  } from "@nextui-org/react";
  
import { signal } from '@preact/signals-react';

const EditAccountModal = ({ updateAccount, userInfo, setModal, isModalOpen}) => {



    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>

        <Modal backdrop='blur'  size='sm' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'> Edit Account </i></ModalHeader>
                <ModalBody >
                    <div className="flex flex-col px-4">
                        <Form
                            onSubmit={(e) => {e.preventDefault(); updateAccount(e);}}>
                            <div className='flex'>
                                <Input
                                    name="fname"
                                    label="First Name"
                                    placeholder={userInfo.fname}
                                    />
                                    <Spacer></Spacer>
                                <Input
                                    name="lname"
                                    label="Last Name"
                                    placeholder={userInfo.lname}
                                    type='text'

                                    />
                            </div>
                            <Input
                                name="email"
                                type='email'
                                label='Email'
                                placeholder={userInfo.email}
                                />
                            <Spacer></Spacer>
                            <Input
                                name="username"
                                label='Username'
                                description={<span>Open a ticket to change.</span>}
                                isDisabled
                                placeholder={userInfo.username}
                                type='text'
                                endContent={<Button isIconOnly><i className="fa-solid fa-lock"></i></Button>}
                                />
                                <Button color='secondary' variant='ghost' type='submit'>
                                    Request Username Change
                                </Button>
                            <Spacer></Spacer>
                            <Input
                                type='file'
                                name="profile_pic"
                                label="Profile pic"
                                placeholder="Update profile pic"
                            
                                />

                            <Spacer></Spacer>
                            
                                <Button color='primary' variant='flat' type='submit' size='sm' radius='lg'>
                                    Save Changes
                                </Button>
                        </Form>
                        
                  </div>
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

export default EditAccountModal;