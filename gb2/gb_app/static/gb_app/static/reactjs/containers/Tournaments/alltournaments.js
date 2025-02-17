'use client';

import React, { useContext, useEffect, useState } from 'react';
import { ConnContext } from "../../connector";
import { useAtom } from "jotai";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Select, SelectItem, Spacer, Button, Input, } from "@nextui-org/react";
import { TournamentList } from '../../components';
import { signal } from '@preact/signals-react';

const fetched = signal(0);

const AllTournaments = () => {


    
    const cu = useContext(ConnContext);
    const [newFilter, setnewFilter] = useState('');
    const getT = async() => { await cu.getTournaments('get_all', 'id');}

    if (fetched.value == 0){
        getT();
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
                        <Input className='col-4 bg-zinc-700 rounded-border rounded-large' radius='lg' size='lg'  value={newFilter} onValueChange={(value) => {setnewFilter(value)}}
                            endContent={<Button size='sm' color='default' isIconOnly radius='lg'><i className='fa-solid fa-search'></i></Button>} 
                            placeholder='Search tournaments' />
                            <Spacer></Spacer>
                            <Select
                                className="text-white max-w-xs col-3"
                                items={TournamentFilters}
                                size='sm'
                                radius='lg'
                                label="Filter by Title"
                                selectedKeys=''
                                onChange={(e) => setnewFilter(e.target.value)}
                                >
                                {(tourney) => <SelectItem className='text-white' key={tourney.name}>{tourney.name}</SelectItem>}
                                </Select>
                     
                    </div>
                    <br></br>
                    <div className="justify-center align-center mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-0 mb-4">
                        <TournamentList cu={cu} newFilter={newFilter} setnewFilter={setnewFilter} />
                      
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );

};

export default  AllTournaments;




const TournamentFilters = [{'key':'nba2k','name':'NBA2K'}, {'key':'madden','name':'MADDEN'}, {'key':'rivals','name':'Rivals'}]