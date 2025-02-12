'use client';

import React, { useContext, useEffect } from 'react';
import { ConnContext } from "../../connector";
import { useAtom } from "jotai";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  CardBody, CardFooter, Spacer, Button, Chip, Image } from "@nextui-org/react";
import { TournamentList } from '../../components';
import { signal } from '@preact/signals-react';

const fetched = signal(0);

const AllTournaments = () => {


    
    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);
    const setT = async() => { await cu.setTournaments();}

    if (fetched.value == 0){
        setT();
        fetched.value ++;
    };
    
    
    return(
        <>
        <Layout>
            <section className='h-full'>
                <Breadcrumbs className='justify-center align-center mx-auto col-9' 
                    variant="solid"
                    radius='full'
                    itemClasses={{
                        separator: "px-2",
                    }}
                    separator="/">
                    <BreadcrumbItem key="dashboard" isCurrent>
                        <span>Tournaments</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
                </section>
            <section className='h-full'>
                <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                    <div className="sm:justify-center mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <TournamentList cu={cu} />
                      
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );

};

export default  AllTournaments;