'use client';

import React, { useMemo, useState} from "react";
import { Button, Alert, InputOtp } from "@nextui-org/react";
import Countdown from 'react-countdown';
import { signal } from "@preact/signals-react";
import { CustomToast } from  '../index';
import { useAtom } from 'jotai';

const isExpired = signal(false);
const submissionz = signal(0);

const VerifyEmailAlert = ({cu}) => {

   
    const [otpInput, setotpInput] = useState();
    const [expiredToast, setExpiredToast] = useState(isExpired.value);
    const [verificationInfo] = useAtom(cu.setupStepsAtom);

    const verifyCode = async() => {

        if (isExpired.value == true){

            setExpiredToast(isExpired.value);
            submissionz.value = 0;
            console.log(submissionz.value);
            

        }else{
            let res = await cu.submitSetup('email-submit', otpInput);
            if (res){
                console.log(res);
            }else{
                console.log('unable to submit data');
            };
        };

    };


    const requestNewCode = async() => {

        let res = await cu.submitSetup('email-revalidate', null);
        if (res){
            console.log(res);
        }else{
            console.log('unable to get new code');
        }
    };

    // Renderer callback with condition
   
    const renderer = ({ completed }) => {
    if (completed) {
        if (submissionz.value == 0){
            // Render a completed state
            console.log('submitting expired');
            cu.submitSetup('email-submit', 'expired');
            submissionz.value == 1;
            isExpired.value = true;
            return <CustomToast sev='error' desc='Verification Code Expired.' />
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
        {expiredToast ? <CustomToast sev='error' desc='Verification Code Expired' /> : undefined}
        </>
    );
};

export default VerifyEmailAlert;