'use client';

import React, { useMemo, useState} from "react";
import { Button, Alert, InputOtp } from "@nextui-org/react";
import Countdown from 'react-countdown';
import { signal } from "@preact/signals-react";
import { CustomToast } from  '../index';
import { useAtom } from 'jotai';

const isExpired = signal(false);
const submissionz = signal(0);
const toastData = signal({
    toastType: '',
    toastDesc: ''
});

const VerifyEmailAlert = ({cu}) => {

   
    const [otpInput, setotpInput] = useState();
    const [toastAlert, settoastAlert] = useState(null);
    const [verificationInfo] = useAtom(cu.setupStepsAtom);

    const verifyCode = async() => {

        if (isExpired.value == true){

            toastData.value.toastType = 'error';
            toastData.value.toastDesc = 'Verification code expired';
            submissionz.value = 0;
            settoastAlert(isExpired.value);
            
            

        }else{
            let res = await cu.submitSetup('email-submit', otpInput);
            if (res){
                if (res.status == 'successful'){
                    toastData.value.toastType = 'successful';
                    toastData.value.toastDesc = 'Email verified';

                    settoastAlert(toastData.value.toastDesc);
                }else{
                toastData.value.toastType = 'error';
                toastData.value.toastDesc = 'Invalid verification code';
                settoastAlert(toastData.value.toastDesc);
                }  ;
                
            }else{
                toastData.value.toastType = 'error';
                toastData.value.toastDesc = 'Unable to complete request, please try again.';

                settoastAlert(toastData.value.toastDesc);
            };
        };

    };


    const requestNewCode = async() => {

        let res = await cu.submitSetup('email-revalidate', null);
        if (res){
            toastData.value.toastType = 'success';
            toastData.value.toastDesc = 'Verification resent to your email';
            settoastAlert(toastData.value.toastDesc);

        }else{
            toastData.value.toastType = 'error';
            toastData.value.toastDesc = 'Unable to complete request, please try again';
            submit
            settoastAlert(toastData.value.toastDesc);
        }
    };

    // Renderer callback with condition
   
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
        
        <Alert
            color="warning"
            size='sm'
            description={
                <>
                    An email was sent to your email address.
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <InputOtp
                            classNames={{
                            segmentWrapper: "gap-x-0",
                            segment: [
                                "relative",
                                "h-10",
                                "w-10",
                                "border-y",
                                "border-r",
                                "first:rounded-l-md",
                                "first:border-l",
                                "last:rounded-r-md",
                                "border-default-200",
                                "data-[active=true]:border",
                                "data-[active=true]:z-20",
                                "data-[active=true]:ring-2",
                                "data-[active=true]:ring-offset-2",
                                "data-[active=true]:ring-offset-background",
                                "data-[active=true]:ring-foreground",
                            ],
                            }}
                            description={<p className='text-white'>Enter the 4 digit code sent to your email</p>}
                            length={4}
                            minLength={4}
                            radius="none"
                            value={otpInput}
                            onValueChange={setotpInput}
                           
                        />
                        </div>
                        <Button variant="shadow" color='secondary' size='sm' onPress={(e) => {verifyCode()}}> Verify Code </Button>
                        <br></br>
                        <Countdown renderer={renderer} className='justify-center align-center mx-auto' date={new Date(verificationInfo.time_left).toUTCString()} />
            
                </>}
            endContent={
            <Button color="warning" size="sm" variant="flat" onPress={(e) => {requestNewCode();}}>
                Resend
            </Button>
            }
            title="Verify your email."
            variant="faded"
        />
        {toastAlert !== null ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.toastDesc} /> : undefined}
        </>
    );
};

export default VerifyEmailAlert;