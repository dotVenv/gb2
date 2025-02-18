'use client';


import React, { useContext, useEffect, useMemo, useState } from 'react';
import Layout from '../Layout/layout';
import { Breadcrumbs, BreadcrumbItem, Alert, Image, Card, Spinner,Button, Spacer, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Switch } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { ConnContext } from '../../connector';
import { signal } from '@preact/signals-react';
import { AuroraText, HyperText } from '../../components';

const fetched = signal(0);

const Tournament = () => {

    const cu = useContext(ConnContext);
    const [ userInfo ] = useAtom(cu.userAtom);
    const [newToast, setNewToast] = useState(false);
    const [isLoaded, setisLoaded] = useState(false);
    useEffect(() => {cu.currentTourney == undefined ? setisLoaded(false) : setisLoaded(true)}, [cu.currentTourney])
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
                                <span>Tournament { cu.currentTourney.name }</span>
                            </BreadcrumbItem>
                      
                        </Breadcrumbs>
                    </section>
                    <section className='h-full'>
                        <div className='mt-4 py-4 col-9 mx-auto justify-center  grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            <Card className='w-full h-[275px] float-start'>
                                <img src={cu.currentTourney.thumbnail} className='object-cover'/>
                            </Card>
                            <div>
                                <HyperText  className='text-center mx-auto' text={ "$"+cu.currentTourney.pool +" "+ cu.currentTourney.name + " " + "("+cu.currentTourney.specific +")"} />
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
                                    className='justify-center align-center mx-auto flex' 
                                    defaultSelected={cu.currentTourney.stats.matchmaking == 'idle' ? false : true }
                                    color="secondary"
                                    size="lg"
                                    thumbIcon={({isSelected, className}) =>
                                      isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
                                    }> Matchmaking 
                                </Switch>
                            </div>
                        </div>
                        <div className='col-9 mx-auto justify-center '>
                                
                        <Table  aria-label="Current Tournament Leaderboard">
                            <TableHeader>
                                <TableColumn>NAME</TableColumn>
                                <TableColumn>ROLE</TableColumn>
                                <TableColumn>STATUS</TableColumn>
                            </TableHeader>
                            <TableBody>

                                <TableRow key="1">
                                    <TableCell>Tony Reichert</TableCell>
                                    <TableCell>CEO</TableCell>
                                    <TableCell>Active</TableCell>
                                </TableRow>

                            </TableBody>
                            </Table>
                          
                        </div>

                        <br></br>
                    </section>
                   
                </>
                :
                    <div className='col 9 justify-center align-center mx-auto'>
                        <span className='justify-center align-center mx-auto flex'>
                            <Spinner color="warning" className='text-black' label="Taking a while, but still Loading..." />
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
            </Layout>
        </>
    );

};


export default Tournament;