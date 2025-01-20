'use client';
import React, { useState } from "react";
import { CustomSidebar } from "../../components";
import { AccountSetup } from '../index';
import { Spacer,
    Button,
    Card,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Progress,
    cn,} from "@nextui-org/react";



const Layout = ({ children }) => {

    const [accountProgress, setAccountProgress] = useState('[4/4]');
    const [selectMembership, setSelectMembership] = useState('pass')
    const status = 'good';
   
    return(
        <>  
            <CustomSidebar  />
           
            { accountProgress !== '[4/4]' 
                ? <AccountSetup accountProgress={accountProgress}/>
                :
                <> 
                <Card  className="mx-auto max-w-7xl justify-center align-center  col-9 sm:px-4 lg:px-3 mt-4 py-4 bg-gray-300">
                    
                </Card>
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
                    
                    
                    <div className='justify-center align-center mx-auto'>
                        {children}
                    </div>
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

  
