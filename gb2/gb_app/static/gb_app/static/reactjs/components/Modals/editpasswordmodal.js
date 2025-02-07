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
  } from "@nextui-org/react";
  
import { signal } from '@preact/signals-react';
import Countdown from 'react-countdown';



const EditPasswordModal = ({ updateAccount, userInfo, setModal, isModalOpen, formholder}) => {
    
    const [pwdValue, setpwdValue] = useState('');
    const [newPwdValue, setnewpwdValue] = useState('');
    const [rnewPwdValue, setrnewpwdValue] = useState('');

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
            <Modal backdrop='blur'  size='sm' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'>Change Password </i></ModalHeader>
                <ModalBody >
                    <div className="flex flex-col px-4">
                        <Form 
                            validationBehavior="native"
                            onSubmit={(e) => { e.preventDefault(); updateAccount(e, 'change_password', null)}}>
                            <Input name='current-password' 
                                label='Current password' 
                                placeholder='Enter current password' 
                                type='password' 
                                autocomplete='current_password'
                                isRequired
                                className='text-white'
                                variant="bordered"
                                value={pwdValue}
                                onValueChange={setpwdValue}
                                endContent={
                                    <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                                } />
                            <Input 
                                name='new-password' 
                                label='New password' 
                                placeholder='Enter new passowrd' 
                                type='password' 
                                autocomplete='off' 
                                isRequired
                                className='text-white'
                                variant="bordered"
                                value={newPwdValue}
                                onValueChange={setnewpwdValue}
                                endContent={
                                    <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                                } />
                            <Input 
                                name='rnew-password' 
                                label='Repear password' 
                                placeholder='Repeat new passowrd' 
                                type='password' 
                                autocomplete='off' 
                                isRequired
                                className='text-white'
                                variant="bordered"
                                value={rnewPwdValue}
                                onValueChange={setrnewpwdValue}
                                validate={(value) => { 
                                if (value !== newPwdValue || value ==  ''){
                                    return 'Passwords must match.';
                                }else{
                                    return null;
                                }}}
                                endContent={
                                    <i className="fa-solid fa-lock mb-1 pb-1"></i>
                                
                                } />

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

export default EditPasswordModal;