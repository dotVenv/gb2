import React, { useState } from "react";
import { CustomSidebar } from "../../components";
import { Spacer, Card, CardBody, Progress, Button } from "@nextui-org/react";
const Layout = ({ children }) => {

    const [accountProgress, setAccountProgress] = useState('[1/4]');
    return(
        <>  
            <CustomSidebar />
            <Card  className="mx-auto max-w-7xl justify-center align-center h-[15vh] col-9 sm:px-6 lg:px-8 mt-4 py-4 bg-gray-300">
              
               <p className='text-center text-black mx-auto'> Quick Account Overview </p>
                <div className='flex gap-x-4'>

                <Progress
                        classNames={{
                            base: "max-w-md ",
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-black",
                            value: "text-black",
                        

                        }}
                        label={"Account Setup Progress " + accountProgress }
                        radius="full"
                        showValueLabel={true}
                        size="md"
                        value={25}
                        />
                        <Spacer></Spacer>
                        <Card className='bg-gray-700 opacity-50 h-[45px] w-[38vw] px-9 align-center mx-auto text-center items-center '>
                           
                                <div className='lg:flex sm:grid lg:grid-cols-3 sm:grid-cols-1 w-full gap-y-0 space-y-0' >
                                    <i className="justify-start align-center items-center mx-auto mt-2 fa-regular fa-circle-check fa-xl" style={{'color': 'gray'}}></i>
                                    <p className='text-tiny'><b> Next step: </b> Verify Account Email</p>
                                    <Spacer></Spacer>
                                    <Button size='sm' color='primary' variant='flat' radius='md' className='w-[15vh] h-[20px]'> Resend Email </Button>
                                </div>
                            
                        </Card>
                        
                </div>
            </Card>
           
            

            
        </>
    );
};

export default Layout;