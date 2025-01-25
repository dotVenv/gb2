'use client';


import React, { useEffect, useState } from "react"
import { Spacer, Card, CardBody, Alert, Chip, RadioGroup, Radio, Button} from "@nextui-org/react";
import { effect, signal } from "@preact/signals-react";
import { CustomToast } from '../index';

const preferenceData = signal({
    console: '',
    server: '',

});


const consoleOptions = [
    {name: 'Xbox', icon:    <i className="fa-brands fa-xbox fa-xl object-cover"></i>},
    {name: 'PS4', icon: <i className="fa-brands fa-playstation fa-xl object-cover"></i>},
    {name: 'PC', icon:  <i className="fa-solid fa-computer fa-xl object-cover"></i>},
    
]

const serverOptions = [
    {name: 'US0-Chicago', ping: <span className='text-white font-semibold'>32m Ping</span>},
    {name: 'US0-NewJersey', ping: <span className='text-white font-semibold'>178m Ping</span>},
    {name: 'US0-LosAngeles', ping: <span className='text-white font-semibold'>124m Ping</span>}
]

const toastData = signal({ 
    toastType: '',
    desc: '',
})

const PreferencesAlert = ({cu}) => {

    const [consoleChoice, setconsoleChoice] = useState(preferenceData.value.console);
    const [prefResponse, setPrefResponse] = useState(null);

    const savePreferences = async() => {
        console.log(preferenceData.value.console, preferenceData.value.server);

        if (preferenceData.value.server == '' || preferenceData.value.server == null || preferenceData.value.console == '' || preferenceData.value.console == null ){
            toastData.value.toastType = 'error';
            toastData.value.desc = 'Please select a console and server';
            setPrefResponse(true);
        }else{
            let res = await cu.submitSetup('preferences',preferenceData.value)
            if (res){
                if (res.step == 'passed'){
                    toastData.value.toastType = 'success';
                    toastData.value.desc = 'Preferences successfully saved';
                    setPrefResponse(true);
                }else{
                    toastData.value.toastType = 'error';
                    toastData.value.desc = 'Unable to update preferences';
                    setPrefResponse(true);
                }
               
            };
        };

        
        
        
    };

    return(
        <>
        <Alert
            color='warning'
            variant='flat'
            title='Tailor your expierence.'
            size='lg'
            className='flex flex-cols'
            description={
                <>
                <p className="text-tiny"> This can be changed in your profile settings anytime.</p>
                <Spacer></Spacer>
                <p className='text-tiny text-white'> Choose Console </p>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-3 mt-3 gap-2 '>
                        { consoleOptions.map((key, index) => {
                            
                            return(
                                <Card isPressable  
                                    key={index} 
                                    onPress={(e) => { preferenceData.value.console = key.name, setconsoleChoice(key.name);}} isBlurred 
                                        className={'col-5 '+  preferenceData.value.console == key.name ? 'bg-transparent' : ''}>
                                    <CardBody className='justify-center align-center mx-auto grid grid-cols-2 gap-2'>
                                        { key.icon } {preferenceData.value.console == key.name ? <i className="fa-solid fa-check justify-end end"></i> : undefined }
                                    </CardBody>
                                </Card> 
                            )
                        })}
                       
                    </div>
                    <div>
                    <br></br>
                    <Spacer></Spacer>
                    
                    <p> Membership Type: <i> <b>N/A</b></i></p>
                    <Chip startContent={<i className="fa-solid fa-user-lock"></i>} variant='faded' color='primary' size='sm' className='flex justify-center align-center mx-auto'>
                        <span className='text-tiny flex'>Choose after completeing.</span>
                    </Chip>
                    
                    </div>

                    <div>
                        <br></br>
                        <Spacer></Spacer>
                        <p className='text-small'> Select your preferred server.</p>
                        <RadioGroup 
                            color="warning" 
                            
                            label="Since we don't actually need in-game servers, we provide servers pings to determine your in-game connection vs your opponent." orientation="horizontal">
                            { serverOptions.map((key,index) => {
                                return(<Radio className='text-white' onChange={(e) => { preferenceData.value.server = key.name }} key={index} description={<span className='text-white font-semibold'>{key.ping}</span>}value={key.name}>
                                    {key.name}
                                </Radio>)
                            })}
                        </RadioGroup>
                    </div>
                    <div>
                        <Spacer></Spacer>
                        <Button variant='flat' color='default' size='sm' onPress={(e) => { savePreferences();}}> Save Preferences</Button>
                    </div>
                    { prefResponse !== null ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined}
                </>
            }
            />
        
        </>
    );
};

export default PreferencesAlert;