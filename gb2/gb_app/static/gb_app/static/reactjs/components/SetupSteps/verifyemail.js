
import React, { useContext, useState} from "react";
import { Button, Alert, InputOtp } from "@nextui-org/react";

const VerifyEmailAlert = ({cu, verificationInfo}) => {

    const [otpInput, setotpInput] = useState();


    console.log(otpInput);
    console.log(verificationInfo.time_left, verificationInfo.created_at);

    const verifyCode = async() => {

        let res = await cu.submitSetup('email-submit', otpInput);
        if (res){
            console.log(res);
        }else{
            console.log('unable to submit data');
        };

    }

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
                        <Button variant="shadow" color='secondary' size='sm' onPress={verifyCode}> Verify Code </Button>
            
                </>}
            endContent={
            <Button color="warning" size="sm" variant="flat">
                Resend
            </Button>
            }
            title="Verify your email."
            variant="faded"
        />
        </>
    );
};

export default VerifyEmailAlert;