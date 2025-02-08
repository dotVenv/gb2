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
  } from "@nextui-org/react";
  
import { signal } from '@preact/signals-react';
import Countdown from 'react-countdown';



const Edit2FAModal = ({showQR, updateAccount, userInfo, setModal, isModalOpen }) => {


    const [mfaToggle, setmfaToggle] = useState()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const Swap2FA = () => {
        userInfo.mfa.toLowerCase() != 'true' ? userInfo.mfa = 'true' : userInfo.mfa = 'false'; setmfaToggle(userInfo.mfa)
    };

    return(
        <>
        <Modal backdrop='blur'  size='sm' placement='center' isOpen={isModalOpen} onOpenChange={(e) => {onOpenChange(); setModal(isOpen)}} >
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
                                <Chip variant='light' size='sm' color='danger' radius='lg'> Do not close this page without scanning the QR, as it is unretreivable.</Chip>
                                <Image src={cu.QR_uri} alt='mfa_qr' /> 
                                </>
                                
                                : undefined }
                        <Switch
                            defaultSelected={userInfo.mfa.toLowerCase() == 'true' ? true : false }
                            color="success"
                            endContent={<i className="fa-solid fa-lock"></i>}
                            size="sm"
                            onValueChange={(e) => {updateAccount(e, 'change_2fa', Swap2FA)}}
                            startContent={<i className="fa-solid fa-lock-open"></i>}
                            >
                            Toggle 2FA
                            </Switch>
                        <br></br>                             
                        <Button color='primary' variant='flat' type='submit' size='sm' radius='lg'>
                            Save Changes
                        </Button>
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