'use client';


import React, { useContext, useEffect, useMemo, useState } from 'react';
import Layout from '../Layout/layout';
import { Breadcrumbs, BreadcrumbItem, Alert, Image, Card, Spinner, Table, TableHeader, TableBody } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { ConnContext } from '../../connector';
import { signal } from '@preact/signals-react';
import { HyperText } from '../../components';

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
                        <div className='mt-4 py-4 col-9 mx-auto justify-center '>
                            <Card className='w-25 h-25 float-start'>
                                <img src={cu.currentTourney.thumbnail} className='object-cover'/>
                            </Card>
                            <div>
                                <HyperText className='jutsify-center align-center mx-auto font-bold' text={ "$"+cu.currentTourney.pool +" "+ cu.currentTourney.name + " " + "("+cu.currentTourney.specific +")"} />
                                <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl lg:text-7xl">
                                    Ship <span className='justify-center align-center mx-auto bg-gradient-to-r from-pink-500 to-purple-800'>beautiful</span>
                                </h1>
                            </div>
                        </div>
                        <div className='col-9 mx-auto justify-center '>

                            <Table>
                                <TableHeader></TableHeader>
                                <TableBody></TableBody>
                                
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
                    </div>
            }
            </Layout>
        </>
    );

};


export default Tournament;