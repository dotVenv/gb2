'use client';

import React, {useState,useContext} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  CardBody, CardFooter, Spacer, Button, Chip, Image } from "@nextui-org/react";
import { useAtom } from "jotai";
import { ConnContext } from "../../connector";


const MyProfile = () => {

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
                    <BreadcrumbItem key="myprofile" isCurrent>
                        <span>My Profile</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
                </section>
            
            <section className='h-full'>

                
            </section>

            </Layout>
        </>
    );
};

export default MyProfile;