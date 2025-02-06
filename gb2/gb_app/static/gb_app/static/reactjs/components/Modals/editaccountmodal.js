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
    InputOtp,
    ButtonGroup
  } from "@nextui-org/react";
  
import { signal } from '@preact/signals-react';
import Countdown from 'react-countdown';

const EditAccountModal = ({ updateAccount, userInfo, setModal, isModalOpen, formholder}) => {

    const [emailChangeSub, setemailChangeSub] = useState(false);
    const [otpInput, setotpInput] = useState();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const renderer = ({ completed }) => {
        if (completed) {
            if (submissionz.value == 0){
                // Render a completed state
                cu.submitSetup('email-submit', 'expired');
                submissionz.value ++;
                isExpired.value = true;
                toastData.value.toastType = 'error';
                toastData.value.toastDesc = 'Verification code expired';
             
                return <CustomToast sev={toastData.value.toastType} desc={toastData.value.toastDesc} />
            }
        } else {
            // Render a countdown
            return <span> </span>;
        }
        };

    return(
        <>

        <Modal backdrop='blur'  size='sm' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'> Edit Account </i></ModalHeader>
                <ModalBody >
                    <div className="flex flex-col px-4">
                        { emailChangeSub ? 
                        <Form onSubmit={(e)=>{ e.preventDefault(); updateAccount(e, 'update_account', null)}}>
                            <p className='text-white text-small'><i> Confirm email change.</i></p>
                            <InputOtp length={4} minLength={4}
                                value={otpInput}
                                name='otp'
                                className='text-white'
                                onValueChange={setotpInput}
                                isRequired 
                                description='Enter the 4 digit code sent to your email address.'
                            />
                            <div className='flex gap-2'>
                                <Button 
                                    variant='flat' 
                                    color='primary' 
                                    type='submit' 
                                    size='sm' radius='lg' startContent={<i className="fa-solid fa-envelope-circle-check"></i>}> Verify Change </Button>
                                <Button 
                                    variant='flat' 
                                    color='secondary' 
                                    size='sm' radius='lg' startContent={<i className="fa-solid fa-rotate-right"></i>}> resend </Button>
                            </div>
                            <Countdown renderer={renderer} className='justify-center align-center mx-auto' date={new Date(formholder.value.time_left).toUTCString()} />
                        </Form>:
                        <Form
                            onSubmit={(e) => {e.preventDefault(); updateAccount(e, 'update_account', setemailChangeSub);}}>
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
                        }
                        
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