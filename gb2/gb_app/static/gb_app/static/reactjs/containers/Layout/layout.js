'use client';

import React, { Suspense, useContext, useState } from "react";
import { CustomSidebar, AnnouncmentBanner, MembershipModal, CustomToast, StickyOptions} from "../../components";
import { AccountSetup } from '../index';
import { Spacer, Card, Alert, Button, Chip} from "@nextui-org/react";
import { ConnContext } from "../../connector";
import { useAtom } from 'jotai';
import { signal } from "@preact/signals-react";
import { motion } from "framer-motion";

var checkWindowLoc = window.location.pathname.split('/');
const fetchedTourney = signal(0);

const toastData = signal({
    toastType: '',
    desc: '',
});

const Layout = ({ children }) => {



    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);
    const accountProgress = userInfo.setup_step;   
    const [membershipModal, setmembershipModal] = useState();
    const [newToastAlert, setNewToastAlert] = useState();


    //start/continue matchmaking
    if (userInfo.mm_status == 'matchmaking'){
        setInterval(cu.matchmakingSearch, 1000);
    };
    
 
    return(
        <>  
         
            
            <CustomSidebar userInfo={userInfo} />
            {cu.newAnnouncment.toLowerCase() !== 'no announcment'
                ? <AnnouncmentBanner newAnnouncment={cu.newAnnouncment} />
                :  undefined
                }
           
            { accountProgress < 4
                ? <AccountSetup accountProgress={accountProgress} cu={cu} />
                :
                <> 
                <Spacer></Spacer>
                <div className='sticky-bottom z-index-1 left-25 bottom-1 w-full flex align-center justify-center mx-auto '>
                    {membershipModal ? undefined : <StickyOptions cu={cu} userInfo={userInfo} /> }
                    
                </div>
                    <section className='mt-3 py-4'>
                       
                        <div className="flex items-center w-[50px] mx-auto  justify-center align-center  col-9">
                        { accountProgress < 4 ? undefined :  userInfo.membership == 'free'
                            ?    <Alert
                                        color="warning"
                                        aria-describedby="No active membership"
                                        variant='bordered'
                                        description={<i className="text-black">You are not subscribed to a membership plan, please upgrade to unlock more features</i>}

                                        endContent={
                                        <Button color="warning" onPress={async(e) => {
                                                
                                                let res = await cu.allMemberships('get');
                                                if (res){
                                                    setmembershipModal(true);
                                                }else{
                                                    toastData.value.desc = 'Unable to view memberships'
                                                    toastData.value.toastType = 'error';
                                                    setNewToastAlert();
                                                }
                                               
                                                }}size="sm" variant="shadow">
                                            Upgrade
                                        </Button>
                                        }
                                        title={<i className='text-black'>No active membership</i>}
                                    
                                    />
                            :   <Alert
                                    color="success"
                                    description={<><i className='text-black'>Your account is looking good, there are no issues found.</i></>}
                                    title={<><i className='text-black'>Account Status: </i><b>OK</b></>}
                                    variant="faded"
                                /> 
                        }

                        
                        </div>
                        <br></br>
                        <span className='flex col-9  mx-auto'>
                            <Chip variant='light'size='sm' radius='lg' color={userInfo.mfa.toLowerCase() == 'true' ? 'success' : 'danger'}
                                startContent={<i className="fa-solid fa-fingerprint"></i>}>
                                <i>{userInfo.mfa.toLowerCase() == 'true' ? 'MFA Active' : 'MFA Inactive' }</i>
                            </Chip>
                        </span>
                    </section>
                   
                        <div >
                            {children}
                        </div>
                                                    
                       
                    <Spacer></Spacer>
                    <br></br>

                    { membershipModal ? <MembershipModal cu={cu} isModalOpen={membershipModal} setModal={setmembershipModal}  /> : undefined}
                    { newToastAlert ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined }

                   
                </> 
            }
            <footer className='col-9 justify-center align-center mx-auto'>
                <p className='mx-auto text-small left-0'>Copyright &#169; 2025 <b> Gamers-Bounty Inc </b></p>
            </footer>
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

  




  {/* 
    <section className='mx-auto justify-center align-center col-10'>    
    
        <dl className="sm:grid flex flex-col  justify-center align-center mx-auto py-4 mt-4 grid-cols-3 gap-0 sm:grid-cols-2 md:grid-cols-3">
            <Card  isPressable className=" shadow-2xl p-3 border border-none dark:border-default-100 bg-gradient-to-r from-zinc-400 to-gray-100 dark:bg-gray-900/80">
                
                <div className="flex">
                    <div className="flex flex-col gap-y-2">
                    <dt className="text-small text-black font-medium text-default-500">Membership <i className="fa-solid fa-money-check-dollar"></i></dt>
                    <dd className="text-2xl font-semibold text-black">{ userInfo.memberhsip == null ? "N/A" : userInfo.memberhsip }</dd>
                </div>
                    
                </div>
            </Card>
            <Card  isPressable className="p-3 border border-transparent dark:border-default-100 bg-gradient-to-r from-zinc-400 to-gray-100 dark:bg-gray-900/80">
                <div className="flex">
                    <div className="flex flex-col gap-y-2">
                    <dt className="text-small text-black font-medium text-default-500">Active Entries <i className="fa-solid fa-ticket-simple"></i></dt>
                    <dd className="text-2xl text-black"><b>0</b> <span className='text-tiny text-black'> entries</span></dd>
                    </div>
                    
                </div>
            </Card>
            <Card  isPressable className="p-3 border border-transparent dark:border-default-100 bg-gradient-to-r from-zinc-400 to-gray-100 dark:bg-gray-900/80">
                <div className="flex">
                    <div className="flex flex-col gap-y-2">
                        <dt className="float start text-small text-black font-medium ">Preferences <i className="fa-solid fa-user-gear"></i></dt>
                        <div className='flex'>
                            <div className='grid grid-cols-1'>
                                <dd className="text-2xl font-semibold text-black">{ 
                                    userInfo.console == 'PC' 
                                        ? <i className="fa-solid fa-computer"></i>
                                        : userInfo.console == 'Xbox' 
                                            ? <i className='fa-solid fa-xbox'></i>
                                            : userInfo.console = 'PSN'
                                                ? <i className='fa-solid fa-playstation'></i>
                                                : undefined
                                    }</dd>
                                <span className='text-tiny text-black'><b> { userInfo.console } </b></span>
                            </div>
                            <Spacer></Spacer>
                            <div className='grid grid-cols-1 end justify-end mx-auto'>
                                <dd className="text-2xl font-semibold text-black"><i className="fa-solid fa-server"></i></dd>
                                <span className='text-tiny text-black'> <b> { userInfo.server } </b></span>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </Card>    
        </dl>
        
    </section>

    */ }