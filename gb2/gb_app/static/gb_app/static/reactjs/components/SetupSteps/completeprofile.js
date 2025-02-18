'use client';

import React, { useState } from "react";
import { Button, Alert, Form, Input,  Select, SelectItem, Checkbox} from "@nextui-org/react";
import { signal } from '@preact/signals-react';
import { CustomToast } from '../index';




const toastData = signal({
    toastType: '',
    desc: '',
});

const CompleteProfileAlert = ({cu}) => {
    

    const [isSelected, setIsSelected] = useState(true);
    const [chosenState, setchosenState] = useState();
    const [updateSubmitted, setupdateSubmited] = useState();
    
    return(
        <>

            <Alert 
                color='warning'
                title='Finish your Gamers-Bounty profile'
                description={
                    <>
                        <br></br>
                        <Form
                            className="w-full max-w-xs flex flex-col gap-4"
                            validationBehavior="native"
                            
                            onSubmit={async(e) => {
                                e.preventDefault();
                                let data = Object.fromEntries(new FormData(e.currentTarget));
                                let res = await cu.submitSetup('profile_update', data);
                                if (res.step == 'passed'){
                                    toastData.value.toastType = 'success';
                                    toastData.value.desc = 'Successfully updated profile';
                                    setupdateSubmited(true); 
                                    location.reload();
                                }else{

                                    toastData.value.toastType = 'error';
                                    toastData.value.desc = 'Unable to update profile';
                                    setupdateSubmited(true); 
                                };

                               
                            }}
                            >
                            <div className='flex gap-2' >
                                <Input
                                    isRequired
                                    errorMessage="Please enter your first name"
                                    label="First name"
                                    labelPlacement="outside"
                                    name="firstname"
                                    placeholder="First Name"
                                    type="text"
                                />

                                <Input
                                    isRequired
                                    errorMessage="Please enter a last name"
                                    label="Last Name"
                                    labelPlacement="outside"
                                    name="lastname"
                                    placeholder="Last name"
                                    type="text"
                                />
                                
                            </div>
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <div className="flex flex-col gap-2">
                                <Checkbox value={isSelected} isSelected={true} name='consent_verif' isRequired size='sm' className="text-tiny">
                                    I confirm I am over the age of consent in my state.
                                </Checkbox>
                                
                            </div>
                            </div>
                            <Select
                                isRequired
                                className="max-w-xs"
                                items={allStates}
                                label="Choose state"
                                placeholder="Select a state"
                                name='userstate'
                                onSelectionChange={setchosenState}
                                >
                                {(allStates) => <SelectItem className="text-white" key={allStates.code}>{allStates.name}</SelectItem>}
                            </Select>
                            <div>
                                <Input
                                    label="Choose Profile Picture (optional)"
                                    labelPlacement="outside"
                                    name="profilepic"
                                    type='file' />
                            </div>
                            <div className="flex gap-2">
                                <Button color="default" variant='flat' type="submit">
                                    Update Profile
                                </Button>
                                
                            </div>
                            
                            </Form>
                            { updateSubmitted ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined }
                    </>
                    }
                variant='flat'/>


        </>
    );
};

export default CompleteProfileAlert;


const allStates = [
    {
        "name": "Alabama",
        "code": "AL"
    },
    {
    "name": "Alaska",
    "code": "AK"
    },
    {
    "name": "Arizona",
    "code": "AZ"
    },
    {
    "name": "Arkansas",
    "code": "AR"
    },
    {
    "name": "California",
    "code": "CA"
    },
    {
    "name": "Colorado",
    "code": "CO"
    },
    {
    "name": "Connecticut",
    "code": "CT"
    },
    {
    "name": "Delaware",
    "code": "DE"
    },
    {
    "name": "Florida",
    "code": "FL"
    },
    {
    "name": "Georgia",
    "code": "GA"
    },
    {
    "name": "Hawaii",
    "code": "HI"
    },
    {
    "name": "Idaho",
    "code": "ID"
    },
    {
    "name": "Illinois",
    "code": "IL"
    },
    {
    "name": "Indiana",
    "code": "IN"
    },
    {
    "name": "Iowa",
    "code": "IA"
    },
    {
    "name": "Kansas",
    "code": "KS"
    },
    {
    "name": "Kentucky",
    "code": "KY"
    },
    {
    "name": "Louisiana",
    "code": "LA"
    },
    {
    "name": "Maine",
    "code": "ME"
    },
    {
    "name": "Maryland",
    "code": "MD"
    },
    {
    "name": "Massachusetts",
    "code": "MA"
    },
    {
    "name": "Michigan",
    "code": "MI"
    },
    {
    "name": "Minnesota",
    "code": "MN"
    },
    {
    "name": "Mississippi",
    "code": "MS"
    },
    {
    "name": "Missouri",
    "code": "MO"
    },
    {
    "name": "Montana",
    "code": "MT"
    },
    {
    "name": "Nebraska",
    "code": "NE"
    },
    {
    "name": "Nevada",
    "code": "NV"
    },
    {
    "name": "New Hampshire",
    "code": "NH"
    },
    {
    "name": "New Jersey",
    "code": "NJ"
    },
    {
    "name": "New Mexico",
    "code": "NM"
    },
    {
    "name": "New York",
    "code": "NY"
    },
    {
    "name": "North Carolina",
    "code": "NC"
    },
    {
    "name": "North Dakota",
    "code": "ND"
    },
    {
    "name": "Ohio",
    "code": "OH"
    },
    {
    "name": "Oklahoma",
    "code": "OK"
    },
    {
    "name": "Oregon",
    "code": "OR"
    },
    {
    "name": "Pennsylvania",
    "code": "PA"
    },
    {
    "name": "Rhode Island",
    "code": "RI"
    },
    {
    "name": "South Carolina",
    "code": "SC"
    },
    {
    "name": "South Dakota",
    "code": "SD"
    },
    {
    "name": "Tennessee",
    "code": "TN"
    },
    {
    "name": "Texas",
    "code": "TX"
    },
    {
    "name": "Utah",
    "code": "UT"
    },
    {
    "name": "Vermont",
    "code": "VT"
    },
    {
    "name": "Virginia",
    "code": "VA"
    },
    {
    "name": "Washington",
    "code": "WA"
    },
    {
    "name": "West Virginia",
    "code": "WV"
    },
    {
    "name": "Wisconsin",
    "code": "WI"
    },
    {
    "name": "Wyoming",
    "code": "WY"
    }
  ];