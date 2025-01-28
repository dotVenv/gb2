'use client';

import React, {useState,} from "react";
import { Layout } from '../index';
import { Breadcrumbs, BreadcrumbItem, Card,  Spacer, Chip, Progress } from "@nextui-org/react";
import { Box, Switch, Paper, Grow, FormControlLabel} from "@mui/material";
import { TournamentCard, DailyRewards, Globe, MagicCard, RankingStepper, } from "../../components";





const Dashboard = () => {
    const [checked, setChecked] = useState(false);
    const [userGoalValue, setUserGoalValue] = useState(25);

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
                            
                            <MagicCard 
                                    className="p-7 px-4  bg-gray-50 border-gray-50 dark:border-gray-600 h-70 p-4 cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                                    >
                                <Spacer></Spacer>
                                <Chip variant='flat' color='secondary' className='flex sm:text-small text-center mt-3 text-black justify-center align-center mx-auto'> 
                                    <i> Daily Reward <i className="fa-solid fa-gift"></i> </i>
                                </Chip>
                                <Spacer></Spacer>
                                <br></br>
                                   <DailyRewards />
                            </MagicCard>
                            <div className='grid grid-cols-1 gap-1'>
                            <Card className=" bg-gray-50 shadow bg-gray-50 border-gray-50 dark:border-gray-600 h-[200px] p-1 cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl">
                                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-800/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                    Connected
                                </span>
                                <Globe className="top-0 border-none justify-center align-center mx-auto" />
                            </Card>
                            <Card className='h-[300px] bg-gray-50 shadow-2xl p-4 items-center'>
                             
                                <RankingStepper />
                            </Card>
                            </div>
                        </div>

                        <div className="border-2 border-dashed rounde
                                d-lg border-rounded border-gray-300 dark:border-gray-600 h-96 mb-4 p-4">
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