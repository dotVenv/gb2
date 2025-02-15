'use client';

import React, {useState,useContext} from "react";

import { User, Card, CardBody, CardFooter, Spacer, Button, Chip, cn, CardHeader, Tooltip, } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ButtonGroup } from "flowbite-react";
import { EditAccountModal, CustomToast, EditPasswordModal, Edit2FAModal } from '../../components';
import { ConnContext } from "../../connector";
import { signal } from "@preact/signals-react";

const editOptions = [
    {title: 'editAccount', content: 'Edit account details', icon: <i className="fa-solid fa-user-pen"></i>,  },
    {title: 'editPassword', content: 'Change account password', icon: <i className="fa-solid fa-key"></i>},
    {title: 'edit2FA', content: 'Change account 2FA', icon: <i className="fa-solid fa-fingerprint"></i>},
]


const toastData = signal({
    toastType: '',
    desc: '',
});

const formholder = signal({});

const ProfileSide = ({userInfo}) => {
    

    const cu = useContext(ConnContext);

    const [editAccount, setEditAccount] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [edit2FA, setedit2FA] = useState(false);
    const [showQR, setShowQR] = useState(false);
  
    const [newToastAlert, setNewToastAlert] = useState();



    const updateAccount = async(e, poststep, extra) =>{

        if (poststep == 'uname_change_req'){
            //username change request
            let response = await cu.updateAccount(null, 'uname_change_req')
            if (response.status == 'successful'){
                toastData.value.desc = 'Username change request submitted';
                toastData.value.toastType = 'success';
            }else{
                toastData.value.desc = 'Unable to request username change';
                toastData.value.toastType = 'error';
            };
           
        }else{

            
            let data = Object.fromEntries(new FormData(e.currentTarget));
            try{
                if (data.email && data.email.toLowerCase() != userInfo.email.toLowerCase()){
                    //email verification for updating user email
                    let response = await cu.updateAccount(data, 'verify_email');
                    if (response.status == 'successful'){

                        formholder.value = data;
                        formholder.value = {...formholder.value, time_left: response.temp_time}
                        extra(true);
                    }else if (response.status == 'exists'){
                        toastData.value.desc = 'Email already exists';
                        toastData.value.toastType = 'error';
                    }else{
                        toastData.value.desc = 'Failed to update account';
                        toastData.value.toastType = 'error';
                    };
                }else if(data.otp){
                    //verify otp for email change
                    let response = await cu.updateAccount(formholder.value, poststep);
                    if (response){
                        
                        if (response.status == 'successful'){
                            toastData.value.desc = 'Successfully updated account';
                            toastData.value.toastType = 'success';
                            !data.email ? undefined : userInfo.email = data.email;
                            !data.fname ? undefined : userInfo.fname = data.fname;
                            !data.lname ? undefined : userInfo.lname = data.lname;
                            setEditAccount(false);
                        }else{
                            toastData.value.desc = 'Invalid OTP, try again';
                            toastData.value.toastType = 'error';
                        };
                    
                    };

                }else{
                    //no email change needed submit regular
                    let response = await cu.updateAccount(data, poststep);
                    if (response){
                        //if qr is the step
                        console.log(response, poststep);
                        if (poststep == 'change_2fa'){
                                //qr code is generated
                            let poststep_check = response.mfa_data != 'activated' ? response.mfa_data != 'deactivated' : false
                           
                            if (poststep_check == false){
                                toastData.value.desc = 'MFA is '+ response.mfa_data;
                                toastData.value.toastType = 'success';
                                response.mfa_data ==  'activated' ? userInfo.mfa = 'true' : userInfo.mfa = 'false';
                                setedit2FA(!edit2FA);
                            }else{
                                setShowQR(true);
                                cu.setQR(response.mfa_data);
                                userInfo.mfa.toLowerCase() == 'true'
                                toastData.value.desc = 'MFA ready to complete';
                                toastData.value.toastType = 'warning';
                               
                            }; 
                        }else if ( poststep == 'verify_2fa'){
                            console.log('inside 2');
                            toastData.value.desc = 'MFA is '+ response.mfa_data;
                            toastData.value.toastType = 'success';
                            response.mfa_data ==  'activated' ? userInfo.mfa = 'true' : userInfo.mfa = 'false';
                            setShowQR(!showQR); 
                            setedit2FA(!edit2FA);
                        }else{
                            if (response.status == 'successful'){
                                toastData.value.desc = 'Successfully updated account';
                                toastData.value.toastType = 'success';
                        
                                !data.fname ? undefined : userInfo.fname = data.fname;
                                !data.lname ? undefined : userInfo.lname = data.lname;
                                setEditAccount(false);
                            }else{
                                //response but not successful
                                toastData.value.desc = 'Failed to update account- not successful';
                                toastData.value.toastType = 'error';
                            };
                        };
                    }else{
                        //no response
                        toastData.value.desc = 'Failed to update account';
                        toastData.value.toastType = 'error';
                    };
                    
                };

            }catch (e){
                //error 
                toastData.value.desc = 'Failed to update account';
                toastData.value.toastType = 'error';
            };
        };
        
        setNewToastAlert(true);

    };
    
    return(
        <>
        
        <aside className='relative mb-3 w-50'>
            <Card isBlurred  className='shadow-2xl bg-gray-100 h-full rounded-border rounded-large w-80 shrink-0 overflow-y-auto'>
                <CardHeader>
                <div className="p-3">
                    <User
                        className='text-black'
                        avatarProps={{
                            src: userInfo.profile_pic,
                            size:'lg',
                            isBordered: true,
                            className: 'h-16 w-16 rounded-lg',
                            showFallback: true,
                        }}
                        description={
                            <Chip variant='flat' color={userInfo.membership.toLowerCase() == 'free' ? 'warning' : 'primary'} className="p-2 inline-block rounded text-tiny font-bold font-medium text-black "> <b className='mt-1 '><i>{ userInfo.membership.toLowerCase() == 'free' ? "Free" : userInfo.membership.toLowerCase() == '7day' ? "Trial" : "Official" }</i></b> Member </Chip>
                        }
                        name={ <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl"> <Spacer></Spacer>@{ userInfo.username}</h2>}
                        />

                    <Spacer></Spacer>
                    <br></br>
                    <ul className="flex text-sm text-black">
                        <li className="me-2">
                            
                            <span className="font-semibold text-gray-900 dark:text-white">{ userInfo.social_count[1] }</span>
                            {'    '}
                            <span>Following</span>
                            
                        </li>
                        <li>
                            
                            <span className="font-semibold text-gray-900 dark:text-white">{ userInfo.social_count[0] }</span>
                            {'    '}
                            <span>Followers</span>
                        
                        </li>
                    </ul>
                </div>
                </CardHeader>
                <CardBody>
                    <ButtonGroup className='justify-center align-center mx-auto gap-2' size='lg'>
                        { editOptions.map((key, index) => {
                            return(
                                <Tooltip key={index} className="capitalize" color='secondary' content={key.content}>
                                    <Button variant='flat' onPress={(e) => { key.title == 'editAccount' ? setEditAccount(!editAccount) : key.title == 'editPassword' ? setEditPassword(!editPassword) : key.title == 'edit2FA' ? setedit2FA(!edit2FA) : undefined  }} color='primary' size='lg' style={{'color': 'orange'}} isIconOnly>
                                        {key.icon}
                                    </Button>
                                </Tooltip>
                                )
                        })}
                       
                     
                    </ButtonGroup>
                </CardBody>
                <CardFooter>
                <Button variant='ghost' className='justify-center align-center mx-auto' size='sm' color='danger'> Request Account Deletion </Button>
            </CardFooter>
            </Card>
        
        </aside>

        { editAccount ? <EditAccountModal updateAccount={updateAccount} isModalOpen={editAccount} setModal={setEditAccount} userInfo={userInfo} formholder={formholder} /> : undefined }
        { editPassword ? <EditPasswordModal updateAccount={updateAccount} isModalOpen={editPassword} setModal={setEditPassword} userInfo={userInfo}  /> : undefined }
        { edit2FA ? <Edit2FAModal cu={cu} showQR={showQR} updateAccount={updateAccount} isModalOpen={edit2FA} setModal={setedit2FA} userInfo={userInfo} /> : undefined }
        { newToastAlert ?  <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined }  
           
        
      
        </>
    );
};

export default ProfileSide;