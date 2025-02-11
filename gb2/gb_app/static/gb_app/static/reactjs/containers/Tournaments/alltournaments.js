'use client';

import React, { useContext } from 'react';
import { ConnContext } from "../../connector";
import { useAtom } from "jotai";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  CardBody, CardFooter, Spacer, Button, Chip, Image } from "@nextui-org/react";


const AllTournaments = () => {

    const cu = useContext(ConnContext);
    const [userInfo] = useAtom(cu.userAtom);

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
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <p> Hello {userInfo.username}</p>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );

};

export default  AllTournaments;