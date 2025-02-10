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
  
import { signal } from '@preact/signals-react';
import Countdown from 'react-countdown';



const Edit2FAModal = ({showQR, updateAccount, userInfo, setModal, isModalOpen, cu  }) => {


    const [mfaToggle, setmfaToggle] = useState()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [otpValue, setotpValue] = useState();

    const Swap2FA = () => {
        userInfo.mfa.toLowerCase() != 'true' ? userInfo.mfa = 'true' : userInfo.mfa = 'false'; setmfaToggle(userInfo.mfa)
    };

    return(
        <>
        <Modal isDismissable={false} backdrop='blur'  size='md' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1"><i className='text-gray-200'>Update Account 2FA </i></ModalHeader>
                <ModalBody >
                    <div className="flex flex-col px-4">
                        <Chip variant='light' size='sm' radius='lg' color={userInfo.mfa.toLowerCase() == 'true' ? 'success' : 'danger'}
                            startContent={<i className="fa-solid fa-fingerprint"></i>}>
                            {userInfo.mfa.toLowerCase() == 'true' ? 'MFA Active' : 'MFA Inactive' }
                        </Chip>
                        <br></br>

                        {showQR ? <>
                                <Chip variant='light' size='sm' color='danger' radius='lg'>
                                    <i className='text-tiny'>This is your first time turning on mfa. <br></br> Do not refresh/close this page <br></br>without scanning the QR</i>
                                </Chip>
                                <br></br>
                                <img className='justify-center align-center mx-auto' src={cu.QR_uri} alt='mfa_qr' /> 
                                <br></br>
                                <b> On Mobile? </b> <Snippet>{cu.b32}</Snippet>
                                <br></br>


                                <br></br>
                                <Form onSubmit={(e) => {e.preventDefault(); updateAccount(e, 'verify_2fa', null)}}>
                                <InputOtp
                                    name = 'otp_attempt'
                                    label='OTP Authentication Code'
                                    description='Enter OTP Authentication Code'
                                    maxLength={6}
                                    length={6}
                                    value={otpValue}
                                    onValueChange={setotpValue}
                                    />
                                      <Button color='primary' variant='flat' type='submit' size='sm' radius='lg'>
                                            Verify 2FA
                                        </Button>
                                    </Form>
                                
                                </>
                                
                                : undefined }
                        { !showQR ? <Switch
                            defaultSelected={userInfo.mfa.toLowerCase() == 'true' ? true : false }
                            color="success"
                            endContent={<i className="fa-solid fa-lock"></i>}
                            size="sm"
                            onValueChange={(e) => {updateAccount(e, 'change_2fa', Swap2FA)}}
                            startContent={<i className="fa-solid fa-lock-open"></i>}
                            >
                            Toggle 2FA
                            </Switch>
                            : undefined }
                        <br></br>                             
                        
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
        </>);
};

export default Edit2FAModal;