'use client';

import React, { useContext, useEffect } from 'react';
import { ConnContext } from "../../connector";
import { useAtom } from "jotai";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Select, SelectItem, Spacer, Button, Input } from "@nextui-org/react";
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
                    <div className='flex'>
                        <Input className='col-4 bg-zinc-700' radius='lg' size='lg' 
                            endContent={<Button size='sm' color='default' isIconOnly radius='lg'><i className='fa-solid fa-search'></i></Button>} 
                            placeholder='Search tournaments' />
                            <Spacer></Spacer>
                            <Select
                                className="text-white max-w-xs col-3"
                                items={TournamentFilters}
                                size='sm'
                                radius='lg'
                                label="Filter by Title"
                                >
                                {(tourney) => <SelectItem className='text-white'>{tourney.name}</SelectItem>}
                                </Select>
                     
                    </div>
                    <br></br>
                    <div className="justify-center align-center mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-0 mb-4">
                        <TournamentList cu={cu} />
                      
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );

};

export default  AllTournaments;




const TournamentFilters = [{'key':'nba2k','name':'NBA2K'}, {'key':'madden','name':'MADDEN'}, {'key':'rivals','name':'Rivals'}]