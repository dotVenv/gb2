'use client';
import React, { Suspense, useContext, useMemo } from "react";
import { CustomSidebar, AnnouncmentBanner } from "../../components";
import { AccountSetup } from '../index';
import { Spacer, Card, Alert, Button} from "@nextui-org/react";
import { ConnContext } from "../../connector";
import { useAtom } from 'jotai';



const Layout = ({ children }) => {



    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);
    const accountProgress = userInfo.setup_step;   



    const onClicked = () => {
        //undefined
    };

    
    return(
        <>  
            
            
            <CustomSidebar userInfo={userInfo} />
            {cu.newAnnouncment 
                ? <AnnouncmentBanner newAnnouncment={cu.newAnnouncment} />
                :  undefined
                }
           
            { accountProgress < 4
                ? <AccountSetup accountProgress={accountProgress} cu={cu} />
                :
                <> 
                    <section className='mt-3 py-4'>
                       
                        <div className="flex items-center w-[50px] mx-auto  justify-center align-center  col-9">
                        
                         <Alert
                            color="success"
                            description={<><i className='text-black'>Your account is looking good, there are no issues found.</i></>}
                            title={<><i className='text-black'>Account Status: </i><b>OK</b></>}
                            variant="faded"
                        />

                        {/* <Alert
                            color="warning"
                            description="You are not subscribed to a membership plan, please upgrade to unlock more features"
                            endContent={
                            <Button color="warning" size="sm" variant="flat">
                                Upgrade
                            </Button>
                            }
                            title="No active membership"
                            variant="faded"
                        /> */ }
                        </div>
                       
                    </section>
                    <section className='mx-auto justify-center align-center col-10'>    
                    
                        <dl className="sm:grid flex flex-col  justify-center align-center mx-auto py-4 mt-4 grid-cols-3 gap-0 sm:grid-cols-2 md:grid-cols-3">
                            <Card isBlurred isPressable className=" p-3 border border-transparent dark:border-default-100 bg-background/60 dark:bg-gray-900/80">
                                
                                <div className="flex">
                                    <div className="flex flex-col gap-y-2">
                                    <dt className="text-small font-medium text-default-500">Membership <i className="fa-solid fa-money-check-dollar"></i></dt>
                                    <dd className="text-2xl font-semibold text-default-700">N/A</dd>
                                </div>
                                    
                                </div>
                            </Card>
                            <Card isBlurred isPressable className="p-3 border border-transparent dark:border-default-100 bg-background/60 dark:bg-gray-900/80">
                                <div className="flex">
                                    <div className="flex flex-col gap-y-2">
                                    <dt className="text-small font-medium text-default-500">Active Entries <i className="fa-solid fa-ticket-simple"></i></dt>
                                    <dd className="text-2xl text-default-700"><b>0</b> <span className='text-tiny text-white'> entries</span></dd>
                                    </div>
                                    
                                </div>
                            </Card>
                            <Card isBlurred isPressable className="p-3 border border-transparent dark:border-default-100 bg-background/60 dark:bg-gray-900/80">
                                <div className="flex">
                                    <div className="flex flex-col gap-y-2">
                                        <dt className="float start text-small font-medium text-default-500">Preferences <i className="fa-solid fa-user-gear"></i></dt>
                                        <div className='flex'>
                                            <div className='grid grid-cols-1'>
                                                <dd className="text-2xl font-semibold text-default-700"><i className="fa-solid fa-computer"></i></dd>
                                                <span className='text-tiny'><b> PC </b></span>
                                            </div>
                                            <Spacer></Spacer>
                                            <div className='grid grid-cols-1 end justify-end mx-auto'>
                                                <dd className="text-2xl font-semibold text-default-700"><i className="fa-solid fa-server"></i></dd>
                                                <span className='text-tiny'> <b> US0-Chicago </b></span>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    
                                </div>
                            </Card>    
                        </dl>
                    </section>
                    <div>
                   
                    </div>
                        {children}
                    <Spacer></Spacer>
                    <br></br>
                </> 
            }
            
        </>
    );
};

export default Layout;


const data = [
    {
      title: "Server Load",
      value: 38,
      status: "good",
      iconName: "solar:server-square-linear",
    },
    {
      title: "Server Load",
      value: 98,
      status: "danger",
      iconName: "solar:server-square-linear",
    },
    {
      title: "Average Memory Used",
      value: 64,
      status: "warn",
      iconName: "solar:sd-card-linear",
    },
  ];

  
