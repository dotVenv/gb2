'use client';

import React from "react";

import { VerifyEmailAlert, CompleteProfileAlert, PreferencesAlert } from "../../components";
import { Spacer, Card, CardBody, Progress} from "@nextui-org/react";
import { useAtom } from 'jotai';


const AccountSetup = ({accountProgress, cu }) =>{

    

    const [ stepsInfo ] = useAtom(cu.setupStepsAtom);   


    return (
        <>
        
        <Card  className="mx-auto max-w-7xl justify-center align-center  col-9 sm:px-4 lg:px-3 mt-4 py-4 bg-gray-300">
    
                <div className='lg:flex lg:gap-x-4 sm:grid sm:grid-cols-1 '>

                <Progress
                        classNames={{
                            base: "max-w-md col-8 justify-center mx-auto",
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-black text-small" ,
                            value: "text-black text-tiny",
                        

                        }}
                        label={"Account Setup Progress " + "["+accountProgress+"/4]" }
                        radius="full"
                        showValueLabel={true}
                        size="md"
                        value={accountProgress / 4 * 100}
                        />
                        <Spacer></Spacer>
                        
                        <div className="flex items-center justify-center lg:w-full sm:w-[25vh]">
                            { accountProgress == 1 
                                ? <VerifyEmailAlert verificationInfo={stepsInfo} /> 
                                : undefined
                            }

                            {/* <CompleteProfileAlert /> */}
                            {/*  <PreferencesAlert />    */}
                        </div>
                                                
                </div>
            </Card>
            
        </>
    );

    

};

export default AccountSetup;