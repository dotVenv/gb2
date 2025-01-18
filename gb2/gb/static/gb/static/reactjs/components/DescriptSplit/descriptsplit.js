import React, { useEffect, useState , useRef } from "react";

import { Spacer,Button, Card, CardBody, CardHeader, CardFooter, User, Badge, Tooltip, Image, Divider, Chip, ScrollShadow} from "@nextui-org/react";
import TextScrollAnim from '../Animations/TextScroll';
import { signal } from '@preact/signals-react';
import AnimatedGradientText from "../magicui/animated-gradient-text";
import beargif from '../../../imgs/gifs/bear.gif';
import medalgif from '../../../imgs/gifs/medal.gif';
import batman_banner from '../../../imgs/pngs/batman_banner.png';
import marvel_r from '../../../imgs/pngs/marvel_r.png';

const descItems = [
    {text: "COMPETE HEAD-TO-HEAD", 
        desc: "Compete head-to-head or form a team and go for a top placement. We designed a unique matchmaking system for indiviual players and teams. Tournament run daily from 6pm-9pm EST.",
        img: beargif ,
        ref: null,},
    
    {text: "BECOME A BOUNTY HUNTER", 
        desc: "Win enough to earn the Bounty-Hunter badge and become eligible for prizes along-side the prize pool for every tournament you enter.",
        img: medalgif,
        ref: null},
]


  
const stats = [
    { id: 1, name: 'Bounty Hunters', value: '44 million' },
    { id: 2, name: 'Paid Out', value: '$119 trillion' },
    { id: 3, name: 'Total Gamers', value: '46,000' },
  ]

const DescriptionSplit = () => {


    descItems.map((key, index) => {
        key.ref = useRef();
    });
  

    return(
           <>
     
          
                <div className='relative lg:h-[400px] sm:h-[750px] justify-center mx-auto align-center'>
                   
                    <div className='absolute h-[500px] overflow-hidden  inset-0  mt-3'>
                        <b className='sticky top'> <TextScrollAnim  displayText={0}/> </b>
                        <Spacer></Spacer>
                        <b className='sticky bottom'><TextScrollAnim  displayText={1}/></b> 
                        <Spacer></Spacer>
                    </div>      
                <Spacer></Spacer>
                
                <div className='lg:h-[500px]  sm:h-[850px]'>
                    <div className='flex  gap-4  text-black'>
                        
                        <AnimatedGradientText className='w-full h-full  col-9 grid grid-cols-1 bg-transparent'>
                        
                            <div className="mx-auto max-w-2xl  lg:max-w-7xl ">
                            
                                <div className=" grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                                <div className="relative lg:row-span-2">
                                    <div className=" inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                                    <div className="relative flex flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                    <p className=" text-lg justify-center align-center mx-auto font-medium tracking-tight text-gray-950 max-lg:text-center mt-3">Popular Tournaments</p>
                                    <Spacer></Spacer>
                                    <br></br>
                                    <ScrollShadow className="h-[500px]" hideScrollBar>
                                    <ul className='justify-center align-center mx-auto px-8  space-y-8'>
                                        <li> 
                                            <Card  
                                                isFooterBlurred className=" py-0 justify-center align-center mx-auto"
                                                isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                                                <CardBody className="overflow-visible ">
                                                    <img
                                                    alt="Card background"
                                                    className="object-cover justify-center align-center mx-auto"
                                                    radius='lg'
                                                    shadow='sm'
                                                    src={marvel_r}
                                                    width='100%'
                                                    height={250}
                                                    />
                                                </CardBody>
                                                <CardFooter className=' grid grid-cols-1 text-small  gap-0 space-x-1'> 
                                                    <b className="text-small font-bold"><i>Marvel Rivals</i> </b>
                                                    <b className="text-tiny font-bold"><i>6v6 2s Tournament</i> </b>
                                                    <br></br>
                                                    <div className="flex gap-2 justify-center align-items-center mx-auto pb-2">
                                                        <Chip radius='lg' size='sm' color='secondary'
                                                            startContent={<i className="fa-solid fa-money-bills"></i>}>
                                                            <b>$200</b>
                                                        </Chip>
                                                        <Divider orientation="vertical" />
                                                        <Chip radius='lg' size='sm' color='secondary'
                                                            startContent={<i className="fa-solid fa-people-group"></i>}>
                                                            <b>0/75</b>
                                                        </Chip>
                                                    </div>
                                                    <Spacer></Spacer>
                                                    <p className='text-tiny text-gray-400'> <i>Click to view details </i> </p>
                                                </CardFooter>
                                            </Card>

                                        </li>

                                        
                                    </ul>
                                    </ScrollShadow>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                                </div>
                                <div className="relative max-lg:row-start-1">
                                    <div className=" inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                                    <div className="relative flex h-[300px] flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <p className="mt-2 text-md font-medium tracking-tight text-gray-950 max-lg:text-center">{descItems[1].text}</p>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        {descItems[1].desc}
                                        </p>
                                    </div>
                                    {/* <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                        <img
                                            style={{'width':'100px', 'height': '100px'}}
                                        src={descItems[1].img}
                                        alt=""
                                        />
                                    </div> */}
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                                </div>
                                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                    <div className=" inset-px rounded-lg bg-white"></div>
                                    <div className="relative flex h-[300px] flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                    <div className="px-8  sm:px-10 ">
                                        <p className=" text-md justify-center align-center mx-auto font-medium tracking-tight text-gray-950 max-lg:text-center mt-3">{descItems[0].text}</p>
                                        <p className="mt-1 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        {descItems[0].desc}
                                        </p>
                                    </div>
                                    {/* <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                        <img
                                            style={{'width':'100px', 'height': '100px'}}
                                        src={descItems[0].img}
                                        alt=""
                                        />
                                    </div> */}
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                                </div>
                                <div className="relative lg:row-span-2">
                                    <div className=" inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                    <div className="relative flex  flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                        <p className=" text-lg justify-center align-center mx-auto font-medium tracking-tight text-gray-950 max-lg:text-center mt-3">Top Competitors</p>
                                    <Spacer></Spacer>
                                    <br></br>

                                    <ScrollShadow className="h-[500px]" hideScrollBar>
                                    <ul className='px-8 justify-center align-center mx-auto gap-3 space-y-3'>
                                        <li> 
                                            <Card  
                                                isPressable shadow="sm" onPress={() => console.log("item pressed")}
                                                className='justify-center align-center  mx-auto mr-4'>
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
                                                                <Spacer></Spacer>
                                                                <span size='sm' >
                                                                    <Tooltip className='text-white' content='@gdub has ranked up to a knight!'>
                                                                        <i className="fa-solid fa-chess-knight"></i>
                                                                    </Tooltip> 
                                                                </span>
                                                                <Spacer></Spacer>
                                                                <span size='sm' >
                                                                    <Tooltip className='text-white' content='@gdub currently competes Xbox!'>
                                                                        <i className="fa-brands fa-xbox"></i>
                                                                    </Tooltip> 
                                                                </span>
                                                                
                                                               
                                                            </>}>
                                                    
                                                    <User
                                                        avatarProps={{
                                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                                            isBordered : true,
                                                            radius : 'md',
                                                        }}
                                                        description="Tournaments Won: 27 "
                                                        name="@gdub"
                                                    />
                                                    </Badge>
                                                </CardBody>
                                            </Card>
                                        </li>
                                    </ul>

                                    </ScrollShadow>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                </div>
                                </div>
                            </div>
                           
                        </AnimatedGradientText>
                        
                        <br></br>
                      
                    </div>
                    </div>
                    <br></br>
                </div>
            </>
           
   );

};
export default DescriptionSplit;


{/*{ descItems.map((key, index) => {
                    return(
                        <motion.div
                            className='col-7 justify-center align-center mx-auto'
                           
                            whileInView={{opacity:1}}
                            whileHover={{scale:1.2, rotateY:360}}
                            key={index}
                            >
                                <Card
                                    isHoverable
                                    isBlurred
                                    radius="lg">
                                        <CardHeader>
                                            {key.text}
                                        </CardHeader>
                                            <img src={key.img} className="align-center justify-center mx-auto w-full h-full" style={{'width' : '175px', 'height': '175px'}} />
                                        <CardFooter>
                                            {key.text}
                                        </CardFooter>
                                </Card>
                            
                        </motion.div>
                    )
                })}
                    
                   <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                        <img
                            className="size-full object-cover object-top"
                            src={descItems[0].img}
                            alt=""
                        />
                    </div>
                      <div className="relative min-h-[30rem] w-full grow">
                            <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                    NotificationSetting.jsx
                                </div>
                                <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                </div>
                            </div>
                            <div className="px-6 pb-14 pt-6">* Your code example *</div>
                            </div>
                        </div>
                                        
                                        
                                        
                                        */}