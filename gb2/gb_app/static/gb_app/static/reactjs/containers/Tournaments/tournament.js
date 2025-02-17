'use client';


import React, { useState } from 'react';
import Layout from '../Layout/layout';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';


const Tournament = () => {
    return (
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
                            <span>Tournament</span>
                        </BreadcrumbItem>
                    
                    </Breadcrumbs>
                </section>
                <section className='h-full'>
                    <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                    
                    </div>
                </section>

            </Layout>
        </>
    );

};


export default Tournament;