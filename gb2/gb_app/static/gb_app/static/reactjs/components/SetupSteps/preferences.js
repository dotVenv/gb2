import React from "react"
import { Spacer, Card, CardBody, Alert, Chip, RadioGroup, Radio, Button} from "@nextui-org/react";



const PreferencesAlert = () => {

    return(
        <>
        <Alert
            color='warning'
            variant='flat'
            title='Tailor your expierence.'
            size='sm'
            description={
                <>
                <p className="text-tiny"> This can be changed in your profile settings anytime.</p>
                <Spacer></Spacer>
                <p className='text-tiny text-white'> Choose Console </p>
                    <div className='grid sm:grid-cols-1 lg:grid-cols-3 mt-3 gap-2'>
                        
                        <Card isPressable isBlurred>
                            <CardBody>
                                <i className="fa-brands fa-xbox fa-xl object-cover"></i>
                            </CardBody>
                        </Card>
                        <Card isPressable isBlurred>
                            <CardBody>
                                <i className="fa-brands fa-playstation fa-xl object-cover"></i>
                            </CardBody>
                        </Card>
                        <Card isPressable isBlurred>
                            <CardBody>
                                <i className="fa-solid fa-computer fa-xl object-cover"></i>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <br></br>
                    <Spacer></Spacer>
                    
                    <p> Membership Type: <i> <b>N/A</b></i></p>
                    <Chip startContent={<i className="fa-solid fa-user-lock"></i>} variant='faded' color='primary' size='sm' className='justify-center align-center mx-auto'>
                        <span className='text-tiny'>You can choose your membership after completeing.</span></Chip>
                    
                    </div>

                    <div>
                        <br></br>
                        <Spacer></Spacer>
                        <p className='text-small'> Select your preferred server.</p>
                        <RadioGroup color="warning" label="Since we don't actually need in-game servers, we provide servers pings to determine your in-game connection vs your opponent." orientation="horizontal">
                            <Radio className='text-white' description={<span className='text-white font-semibold'>37m Ping</span>}value="US0-Chicago">
                                US0-Chicago
                            </Radio>
                            <Radio className='text-white' description={<span className='text-white font-semibold'>145m Ping</span>}value="US0-NewJersy">
                                US0-NewJersey
                            </Radio>
                            <Radio className='text-white' description={<span className='text-white font-semibold'>178m Ping</span>}value="US0-LosAngeles">
                                US0-LosAngeles
                            </Radio>
                        </RadioGroup>
                    </div>
                    <div>
                        <Spacer></Spacer>
                        <Button variant='flat' color='default' size='sm'> Save Preferences</Button>
                    </div>
                </>
            }
            />
        
        </>
    );
};

export default PreferencesAlert;