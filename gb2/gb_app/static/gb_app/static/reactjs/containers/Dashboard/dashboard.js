'use client';

import React, {useState,} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  Spacer } from "@nextui-org/react";
import { Box, Switch, Paper, Grow, FormControlLabel} from "@mui/material";
import { TournamentCard, DailyRewards } from "../../components";





const Dashboard = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
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
                        <span>Dashboard</span>
                    </BreadcrumbItem>
                
                </Breadcrumbs>
                    <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            
                            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-70 p-4 ">
                                <Spacer></Spacer>
                                <h6 className=' text-center mt-3 text-black justify-center align-center mx-auto'> <i> Daily Reward <i className="fa-solid fa-gift"></i> </i></h6>
                                <Spacer></Spacer>
                                <br></br>
                                   <DailyRewards />
                            </div>
                            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

                            </div>
                        
                        </div>

                        <div className="border-2 border-dashed rounded-lg border-rounded border-gray-300 dark:border-gray-600 h-96 mb-4 p-4">
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Show Recent Matches"
                            />
                            <Box sx={{ display: 'flex' }}>
                            <Grow in={checked}><Card><p> Hello World </p></Card></Grow>
                            {/* Conditionally applies the timeout prop to change the entry speed. */}
                            <Grow
                                in={checked}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(checked ? { timeout: 1000 } : {})}
                            >
                              <Card><p> Hello World Again</p></Card>
                            </Grow>
                            </Box>
                        </div>
                        
                    </div>
                </section>
            </Layout>
        </>
    );
};
export default Dashboard;



{ /*

 <div className='mt-4 py-4 col-9 justify-center align-center mx-auto'>
    <div className="border-2 border-dashed rounded-lg border-rounded border-gray-300 dark:border-gray-600 h-96 mb-4">
        
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
    
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">

        </div>
        
    </div>
    

</div>
*/}