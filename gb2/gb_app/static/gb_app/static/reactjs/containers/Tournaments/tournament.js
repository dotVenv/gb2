'use client';


import React, { useContext, useEffect, useMemo, useState } from 'react';
import Layout from '../Layout/layout';
import { Breadcrumbs, 
        BreadcrumbItem, 
        Alert, 
        Chip, 
        Card, 
        Spinner,
        Button, 
        Spacer, 
        ScrollShadow,
        Accordion, 
        AccordionItem,
        Switch } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { ConnContext } from '../../connector';
import { signal, effect } from '@preact/signals-react';
import { AuroraText, CompCard, CustomToast, HyperText, TourneyTable } from '../../components';

const fetched = signal(0);
const recentlyupdated = signal(new Date());
const tournament_start = signal();
const tournament_end = signal();

const toastData = signal({
    toastType: '',
    desc: '',
})
const Tournament = () => {

    const cu = useContext(ConnContext);
    const [ userInfo ] = useAtom(cu.userAtom);
    const [newToast, setNewToast] = useState(false);
    const [isLoaded, setisLoaded] = useState(false);
    const  [isUpdated, setIsUpdated] = useState();
    var current_date = new Date();
    var hours = current_date.getHours();
    var minutes = current_date.getMinutes();
    var seconds = current_date.getSeconds();
    var current_time = hours + ':' + minutes + ':' + seconds;
    current_time = current_time.replace(':', '');
    const checkLive = () => {
        if ( parseInt(current_time) >= parseInt(tournament_start.value) && parseInt(current_time) <= parseInt(tournament_end.value)){
            return true;
        }else if( parseInt(current_time) >= parseInt('1730:00') && parseInt(current_time) < parseInt('18:00')){
            return 'soon'
        }else{
            return false;
        }
    };

    
    const rePull = async() => {
        if (checkLive() == false){
            if (fetched.value == 0){
                let res = await cu.setTournament(cu.currentTourney.hash, 'entry', 'get_all');
                if (res){
                    
                    fetched.value ++;
                    if (fetched.value == 1){
                    
                        recentlyupdated.value = new Date();
                        setIsUpdated();
                    };
                }else{
                    fetched.value = 0;
                };
            }else{
                fetched.value = 0;
            };
        };
        
    };
    

    const [isLive, setisLive] = useState(false);


    const handleLoader = () => {
        var current_date = new Date();
        var hours = current_date.getHours();
        var minutes = current_date.getMinutes();
        var seconds = current_date.getSeconds();
        var current_time = hours + ':' + minutes + ':' + seconds;
        current_time = current_time.replace(':', '');
        
        tournament_start.value = new Date(cu.currentTourney.start).toISOString().slice(11,19).replace(':', '');
        tournament_end.value =  new Date(cu.currentTourney.end).toISOString().slice(11,19).replace(':', '');
        setisLive(checkLive());
        setisLoaded(true);
        try{

            setInterval(rePull,35000);
            setIsUpdated(true);
            
        }catch (e){
            console.log("error" + e);
            setIsUpdated(true);
        }
    };

    useEffect(() => {cu.currentTourney == undefined ? setisLoaded(false) : handleLoader();}, [cu.currentTourney, recentlyupdated.value]);

    
    const handleMatchmakingSwitch = async() => {
        let res = await cu.setMatchmaking('set_matchmaking',cu.currentTourney.hash);
        if (res){
            if(res.status == 'successful'){
                cu.currentTourney.stats.matchmaking = res.matchmaking_status;
                toastData.value.toastType = 'success';
                toastData.value.desc = 'Matchmaking status changed';
                //newToast ? setNewToast(false) : undefined;
                setNewToast(true);
                setIsUpdated(true);
                //
            }else{
                toastData.value.toastType = 'error';
                toastData.value.desc = 'Unable to update matchmaking';
                newToast ? setNewToast(false) : undefined;
                setNewToast(true);
                setIsUpdated(true);
            };
        }else{
            toastData.value.toastType = 'error';
            toastData.value.desc = 'Unable to update matchmaking';
            setNewToast(true);
        };
    };

    
    return (
        <>
            <Layout>
            {isLoaded ? 
                <>
                    <section className='h-full'>
                        <Breadcrumbs className='justify-center align-center mx-auto col-9' 
                            variant="solid"
                            radius='full'
                            itemClasses={{
                                separator: "px-2",
                            }}
                            separator="/">
                            <BreadcrumbItem key="dashboard" isCurrent>
                                <span>Tournament  <i className='fa-regular fa-hand-back-fist'></i></span>
                            </BreadcrumbItem>
                      
                        </Breadcrumbs>
                   
                    </section>
                    <section className='h-full'>
                        <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                            <Chip variant='dot' color={isLive ? 'danger': 'warning'} className='text-black text-tiny'>{isLive ? 'This tournament is Live!' : 'This tournament has not started, or has ended'} </Chip>
                            <Spacer></Spacer>
                            <p className="text-large text-default-400">

                                {new Date(cu.currentTourney.start).toDateString()} {'  '}
                                {new Date(cu.currentTourney.start).toLocaleTimeString("en-us",{ timeZone: "UTC", timeZoneName: "short"}).replace('UTC', '')}
                                {' '}-{' '} 
                                {new Date(cu.currentTourney.end).toLocaleTimeString("en-us",{ timeZone: "UTC", timeZoneName: "short"}).replace('UTC', '')
                            }<i className="fa-solid fa-calendar-days"></i></p>
                             <p className="text-tiny text-default-400">
                                Last updated: <b> <i>{ recentlyupdated.value.toLocaleTimeString("en-us",{ timeZone: "UTC", timeZoneName: "short"}).replace('UTC', '') }</i></b> <i className="fa-solid fa-clock-rotate-left"></i>
                            </p>
                        </div>
                        <div className='py-4 col-9 mx-auto justify-center  grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            <Card className='w-full h-[275px] float-start'>
                                <img src={cu.currentTourney.thumbnail} className='object-cover'/>
                            </Card>
                            <div>
                                
                                <HyperText  className='text-center mx-auto' text={ "$"+cu.currentTourney.pool +" "+ cu.currentTourney.name + " " + "("+cu.currentTourney.specific +")" +""} />
                               
                                <h4 className="text-2xl font-semibold tracking-tighter md:text-2xl lg:text-5xl justify-center align-center mx-auto flex gap-2 mr-3">
                                    Place {' '} <AuroraText>#{ cu.currentTourney.user_position }</AuroraText>
                                </h4>
                                <ul className='mx-auto items-center flex gap-1'>
                                    <li className='justify-center mx-auto'> Games Played <b>{cu.currentTourney.stats.wins + cu.currentTourney.stats.losses}</b></li>
                                    <li className='justify-center mx-auto'> Games Won <b>{cu.currentTourney.stats.wins} </b></li>
                                    <li className='justify-center mx-auto'> Playing on: { userInfo.platform == 'PC' 
                                                            ? <i className="fa-solid fa-computer"></i>
                                                            : userInfo.platform == 'Xbox' 
                                                                ? <i className='fa-solid fa-xbox'></i>
                                                                : userInfo.platform = 'PSN'
                                                                    ? <i className='fa-solid fa-playstation'></i>
                                                                    : undefined }  </li>
                                </ul>
                                <Alert 
                                    size='sm'
                                    radiu='lg'
                                    variant='faded'
                                    className='col-5 justify-center align-center mx-auto flex' 
                                    title={cu.currentTourney.user_position == 1 
                                        ? 'You\'re #1! Keep the lead to secure $'+ (cu.currentTourney.pool / (cu.currentTourney.placement / 100) * 3 / 100  + (cu.currentTourney.pool / (cu.currentTourney.last_disp / 100) * 3 / 100 )).toFixed(2)
                                        : cu.currentTourney.user_position == 2
                                            ? 'You\'re #1! Keep the lead to secure $'+ (cu.currentTourney.pool / (cu.currentTourney.placement / 100) * 3 / 100 ).toFixed(2)
                                            : cu.currentTourney.user_position > 3 && cu.currentTourney.user_position <= 15 
                                                ? 'You\'re TOP 15! Finish here to secure $'+ (cu.currentTourney.pool / (cu.currentTourney.placement / 100) * 3 / 100  - (cu.currentTourney.pool / (cu.currentTourney.last_disp / 100) * 3 / 100 )).toFixed(2)
                                                : 'You\'re '+ (cu.currentTourney.user_position - 13) +'away from  top 15!' }
                                    color={cu.currentTourney.user_position <= 3 
                                            ? 'success' 
                                            : cu.currentTourney.user_position > 3 && cu.currentTourney.user_position <= 15 
                                                ? 'warning' 
                                                : 'secondary'}
                                    
                                />
                                <Spacer></Spacer>
                                <Switch
                                    className='justify-center align-center mx-auto flex text-black' 
                                    defaultSelected={cu.currentTourney.stats.matchmaking == 'idle' ? false : true }
                                    value={cu.currentTourney.stats.matchmaking == 'idle' ? false : true }
                                    color="secondary"
                                    size="lg"
                                    onValueChange={(e) => { handleMatchmakingSwitch(); setIsUpdated();}}
                                    thumbIcon={({isSelected, className}) =>
                                      isSelected ? <i className="fa-solid fa-xmark"></i>: <i className="fa-solid fa-globe"></i>
                                    }> 
                                    <span className='text-black text-small font-semibold flex'>
                                        Matchmaking:  
                                        { cu.currentTourney.stats.matchmaking !== 'idle' ? <>
                                            <Spinner color='secondary' size="sm" /><Spacer></Spacer></> : undefined 
                                        }
                                        
                                        { cu.currentTourney.stats.matchmaking == 'matchmaking' 
                                            ? 'Searching for opponent' 
                                            : cu.currentTourney.stats.matchmaking.charAt(0).toUpperCase()+cu.currentTourney.stats.matchmaking.slice(1)
                                        }
                                        
                                    </span>
                                </Switch>
                            </div>
                        </div>
                        <div className='col-9 justify-center align-center mx-auto grid sm:grid-cols-1 lg:grid-cols-2 h-[40vh]'>
                            <div className='w-full jutify-center align-center mx-auto'>
                                <TourneyTable allUsers={cu.currentTourney.top_3} />
                            </div>
                            <ScrollShadow size={20}  >
                                <Accordion className='bg-dark h-[65vh] overflow-y-hidden col-10 rounded-border rounded-large border-rounded justify-center align-center mx-auto'>
                                { cu.currentTourney.rules.map((key, index) => {
                                    return (
                                    
                                        <AccordionItem
                                        key={index}
                                        aria-label={key.id}
                                        subtitle="Press to expand"
                                        title={key.id}
                                        >
                                        
                                            <i className='text-tiny text-white'>{key.value}</i>
                                        </AccordionItem>
                                    )
                                    
                                })}
                                </Accordion>
                            </ScrollShadow>
                            
                        </div>
                        <br></br>
                    </section>
                   
                </>
                :
                    <div className='col 9 justify-center align-center mx-auto'>
                        <span className='justify-center align-center mx-auto flex'>
                            <Spinner color="warning" className='text-black' label={"Taking a while, but still Loading..."} />
                        </span>
                        <br></br>
                        <Spacer></Spacer>
                        <div className='justify-center align-center mx-auto flex' >
                            <Button startContent={<i className='fa-solid fa-rotate-right fa-xl'></i>} 
                                onPress={(e) => {window.location.reload()}}
                                className='justify-center align-center mx-auto' 
                                radius='lg' size='lg' variant='flat' color='primary'> Refresh me</Button>
                        </div>
                        <br></br>
                        <Spacer></Spacer>
                        <br></br>
                    </div>
            }
            { newToast ? <CustomToast sev={toastData.value.toastType} desc={toastData.value.desc} /> : undefined } 
            </Layout>
        </>
    );

};


export default Tournament;