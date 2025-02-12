'use client';


import React, { useState, useContext } from "react";
import { 
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    Image,
    Link,
    Tooltip,
    Avatar,
    AvatarGroup,
    ScrollShadow,
    Accordion, 
    AccordionItem,
    Card,
    User,
    Spacer,
    CardBody,
    ButtonGroup, } from "@nextui-org/react";
import { ConnContext } from "../../connector";
import { useAtom } from "jotai";


const TournamentDrawer = ({isOpen, setisOpen, tournamentInfo, isLive}) => {


  const cu = useContext(ConnContext);
  const [ userInfo ] = useAtom(cu.userAtom);
  return (
    <>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  bg-gradient-to-r from-zinc-800 from-gray-800 rounded-medium",
        }}
        isOpen={isOpen}
      >
        
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip className='text-white' content="Close">
                  <Button
                    isIconOnly
                    className="text-white"
                    size="sm"
                    variant="light"
                    onPress={(e) => {setisOpen(!isOpen)}}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </Button>
                </Tooltip>
                <div className="w-full flex justify-start gap-2">
                  <Button
                    className="font-medium text-small text-default-500"
                    size="sm"
                    color='primary'
                    startContent={
                        <i className="fa-solid fa-ticket-simple"></i>
                    }
                    variant="flat"
                  >
                    Enter Now
                  </Button>
                  <p className='text-white text-small mt-2' >{tournamentInfo.limit - tournamentInfo.registered_count} Spots Left</p>
                </div>
               
              </DrawerHeader>
              <ScrollShadow size={20} >
              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4">
                  <Image
                    isBlurred
                    isZoomed
                    alt="Tournament Thumbnail"
                    className="aspect-square w-full hover:scale-110"
                    height={300}
                    src={tournamentInfo.thumbnail}
                  />
                </div>
                <ButtonGroup>
                  <Button variant='flat' color='secondary' radius="lg" size='sm'> Ask Manager </Button>
                  <Button  variant='flat' color='primary' radius="lg" size='sm'> Ask Team Manager </Button>
                </ButtonGroup>
                
                <div className="flex flex-col gap-2 py-4">
                <p className='text-white'>
                {isLive == true 
                    ? <span><i className="fa-solid fa-circle fa-beat fa-sm" style={{"color": 'red '}}></i> <b className='text-tiny'>Live Now </b></span>
                    : isLive == 'soon' 
                        ?  <span><i className="fa-solid fa-circle fa-beat" style={{"color": 'red '}}></i> Starting Soon</span>
                            : undefined 
                    }
                </p>
                  <h1 className="text-white text-2xl font-bold leading-7">${tournamentInfo.pool} {tournamentInfo.name.toUpperCase()} Tournament</h1>
                  <p className="text-sm text-default-500">
                    Restrictions/Specifications: ({tournamentInfo.specific})
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                        <div className="text-tiny bg-default-100 py-0.5 text-default-500">{ months[new Date().getMonth()]}</div>
                        <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                          { new Date().getDate()}
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-medium text-foreground font-medium">
                          {new Date(tournamentInfo.start).toDateString()}
                        </p>
                        <p className="text-small text-default-500">
                          {new Date(tournamentInfo.start).toLocaleTimeString("en-us",{ timeZone: "UTC", timeZoneName: "short"}).replace('UTC', '')}
                           {' '}-{' '} 
                          {new Date(tournamentInfo.end).toLocaleTimeString("en-us",{ timeZone: "UTC", timeZoneName: "short"}).replace('UTC', '')}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                        <svg
                          className="text-default-500"
                          height="20"
                          viewBox="0 0 16 16"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={
                            <svg
                              className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                          }
                          className="group gap-x-0.5 text-medium text-foreground font-medium"
                          href="#"
                          rel="noreferrer noopener"
                        >
                          Gamers-Bounty.com
                        </Link>
                        <p className="text-small text-default-500">Compete from home! </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden py-0.5">
                        <i className="fa-solid fa-headset fa-md text-default-400 h-6 mt-2" style={{'color': 'default-400'}}></i>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-medium text-foreground font-medium">
                          Platform Options
                        </p>
                        <p className="text-small text-default-500">
                          { tournamentInfo.platform.map((key, index) => {
                            return( <i key={index}> {key.id} {key.id == 'Xbox' 
                              ? <i className="fa-brands fa-xbox"></i> 
                              : key.id == 'PSN' 
                                ? <i className="fa-brands fa-playstation"></i>
                                : key.id == 'PC' 
                                  ? <i className="fa-solid fa-computer"></i>
                                  : undefined }</i>)
                          })}  
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-medium font-medium text-white">About the event</span>
                      <div className="text-medium text-default-500 flex flex-col gap-2">
                        <p>
                          <b>Hey {userInfo.username}</b>! As always, we are exicted to host another unofficial { tournamentInfo.name.toUpperCase() } event!
                          <Spacer></Spacer>
                            <i className='text-tiny'>Although we would love to partner up down the road and host official events. 👌 </i>
                          <Spacer></Spacer>
                          <br></br>
                          Read more about the tournament below to decide if you want to compete.
                        </p>
                        <Card className="p-4">
                          <b className='text-small font-semibold'> Description:</b>
                          <br></br>
                          <ul>
                            <li className='text-tiny'>
                              {tournamentInfo.desc}
                            </li>
                          </ul>
                        </Card>
                        <br></br>
                        <b>Rules:</b><i className="text-tiny"> Any rulebreak/violation can result in a permanent ban.</i>
                        <ScrollShadow size={30} hideScrollBar>
                        <Accordion className='h-40 overflow-y-auto'>
                          { tournamentInfo.rules.map((key, index) => {
                            return (
                             
                                <AccordionItem
                                  key={index}
                                  aria-label={key.id}
                                  subtitle="Press to expand"
                                  title={key.id}
                                >
                                  
                                    <i className='text-tiny'>{key.value}</i>
                                </AccordionItem>
                            )
                            
                          })}
                         </Accordion>
                         </ScrollShadow>
                       <hr></hr>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <b className='text-white'>Top 3</b>
                      <Spacer></Spacer>
                      <ul className='gap-y-2 space-y-2'>
                        <li className='rounded-border rounded-large items-start '>
                            <Card className='rounded-border rounded-large items-start w-full h-full p-2'>
                              <User
                               
                                  avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                  }}
                                  description="1st Place - 1420 pts."
                                  name={<span className='text-white'>"Jane Doe"</span>}
                                />
                             </Card>
                             <Spacer></Spacer>
                        </li>
                        <li className='rounded-border rounded-large items-start '>
                            <Card className='rounded-border rounded-large items-start w-full h-full p-2'>
                              <User
                               
                                  avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                  }}
                                  description="2nd Place - 1420 pts."
                                  name={<span className='text-white'>"Jane Doe"</span>}
                                />
                             </Card>
                             <Spacer></Spacer>
                        </li>
                        <li className='rounded-border rounded-large items-start '>
                            <Card className='rounded-border rounded-large items-start w-full h-full p-2'>
                              <User
                               
                                  avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                  }}
                                  description="3rd Place - 1420 pts."
                                  name={<span className='text-white'>"Jane Doe"</span>}
                                />
                             </Card>
                             <Spacer></Spacer>
                        </li>
                       
                        </ul>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-small text-default-500">{ tournamentInfo.registered_count }/{tournamentInfo.limit} Competing</span>
                      <div className="flex gap-2 items-center">
                        <AvatarGroup
                          isBordered
                          classNames={{
                            base: "pl-2",
                            count: "text-default-500 text-tiny bg-default-100",
                          }}
                          size="sm"
                          total={tournamentInfo.registered_count}
                        >
                          <Tooltip content="Alex">
                            <Avatar
                              className="data-[hover=true]:!translate-x-0"
                              name="Alex"
                              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                            />
                          </Tooltip>
                          
                        </AvatarGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerBody>

              </ScrollShadow>
              <DrawerFooter className="flex flex-col gap-1">
              <p className='text-white'>Brought to you by{" "}
                  <Link className="text-default-700 text-tiny" href="https://gamers-bounty.com">
                  
                  <i className="fa-regular fa-hand-point-right fa-sm"></i>{'  '}<Spacer></Spacer> Gamers-Bounty
                  </Link>
                  .
                </p>
              
                <Link className="text-default-400" href="mailto:hello@heroui.com" size="sm">
                  Report event
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>);
};


export default TournamentDrawer;




var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"];

