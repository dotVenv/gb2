import React from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const Dashboard = () => {
    
    
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
                        <span className='text-black'>Dashboard</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
                    <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                        <div className="border-2 border-dashed rounded-lg border-rounded border-gray-300 dark:border-gray-600 h-96 mb-4">

                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                        
                            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                            </div>
                            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                            </div>
                            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                            </div>
                            
                        </div>
                        
                  
                    </div>
                </section>
            </Layout>
        </>
    );
};
export default Dashboard;