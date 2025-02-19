
'use client';

import React from "react";
import {  Button, Card, CardBody, Spacer, User, Badge, Tooltip } from "@nextui-org/react";

import batman_banner from '../../../imgs/pngs/batman_banner.png';
import LRank1  from '../../../imgs/ranks/low_rank_one.png';




const CompCard = ({userInfo, isViewing, opponent}) => {


    return(
        <>
        <Card  
            className='  mx-auto w-full h-full'>
            <CardBody>
                <img src={batman_banner} style={{'height': '100px'}} className='object-cover' radius='full' />
                
                <Badge className='bg-transparent mr-4' showOutline={false}
                    content={
                        <>
                            <span size='sm' >
                                <Tooltip className='text-white' content='@gdub is on a 4 tournaments win streak with 27 total wins!'>
                                    <i className="fa-solid fa-fire"></i>
                                </Tooltip> 
                            </span>
                            <span size='sm' >
                                <Tooltip className='text-white' content='@gdub is currently rank L1 !'>
                                    <img src={LRank1}  style={{'height': '35px', 'width': '35px'}} alt='current rank' />
                                </Tooltip> 
                            </span>
                            <span size='sm' >
                                <Tooltip className='text-white' content='@gdub currently competes Xbox!'>
                                    <i className="fa-brands fa-xbox"></i>
                                </Tooltip> 
                            </span>
                            
                            
                        </>}>
                { userInfo ? 
                    <User
                        avatarProps={{
                            src:userInfo.profile_pic,
                            isBordered : true,
                            radius : 'md',
                            showFallback: true,
                        }}
                        description={"Games Won: "+userInfo.wins}
                        name={<span className='text-tiny'>@{userInfo.username}</span>}
                    />:
                    <User
                            avatarProps={{
                                src:opponent.value.opponent_profile_pic,
                                isBordered : true,
                                radius : 'md',
                                showFallback: true,
                            }}
                            description={
                                <> 
                                    <div className='grid grid-cols-1'>
                                        <span className='text-tiny'>Games Won <b>{opponent.value.wins}</b></span>
                                    </div>
                                </>
                            }
                            name={<span className='text-tiny'>@{opponent.value.opponent_name}</span>}
                        />
                    
                    }
                
                </Badge>
                {opponent ? 
                    <>
                    <br></br>
                    <Spacer></Spacer>
                    <span className='text-tiny'>Plaform: { opponent.value.opponent_platform == 'Xbox' 
                        ? <i className="fa-brands fa-xbox"></i> 
                        : opponent.value.opponent_platform == 'PSN' 
                        ? <i className="fa-brands fa-playstation"></i>
                        : opponent.value.opponent_platform == 'PC' 
                            ? <i className="fa-solid fa-computer"></i>
                            : undefined }</span>
                    <span className='text-tiny'>Server: <b>{ opponent.value.opponent_server }</b></span>
                    </>
                :
                userInfo ? <>
                <br></br>
                <Spacer></Spacer>
                <span className='text-tiny'>Plaform: { userInfo.platform == 'Xbox' 
                    ? <i className="fa-brands fa-xbox"></i> 
                    : userInfo.platform == 'PSN' 
                    ? <i className="fa-brands fa-playstation"></i>
                    : userInfo.platform == 'PC' 
                        ? <i className="fa-solid fa-computer"></i>
                        : undefined }</span>
                <span className='text-tiny'>Server: <b>{ userInfo.server }</b></span>
                </>: undefined  }
            </CardBody>
            { isViewing ?
                <div className='p-2 flex'>
                    <Button variant='flat' className='text-tiny' color='primary' size='sm' radius='lg' startContent={<i className="fa-regular fa-pen-to-square"></i>}>
                        Banner
                    </Button>
                    <Spacer></Spacer>
                    <Button className='text-tiny' variant='flat' color='secondary' size='sm' radius='lg' startContent={<i className="fa-solid fa-eye"></i>}>
                        Esport Profile
                    </Button>
                </div>
                : undefined 
            }
        </Card>
        
        
        
        </>
    );
};

export default CompCard;