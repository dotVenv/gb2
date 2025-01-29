'use client';

import React from "react";
import { Card, CardBody, CardHeader, ScrollShadow, Spacer } from "@nextui-org/react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const platformData = [
    { name: 'XBX', value: 3 },
    { name: 'PSN', value: 0 },
    { name: 'PC', value: 15 },
   
  ];
  

const ExtraPlayerStats = () => {


    return(
        
        <>  
            <div className='grid grid-cols-2 gap-0 space-0 mb-4'>
                
                <div>
                <span className='flex'>
                    <p className='text-center align-center mx-auto text-black text-small font-semibold'>
                        <i> Games Played</i> 
                    </p> 
                    <i className='text-tiny text-black'>(by platform)</i>
                </span>
                    <PieChart width={275} height={250}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={platformData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                        </PieChart>
                </div>
                
                <Card className='bg-transparent col-6  justify-center align-center mx-auto p-2'>
                    <p className='justify-center align-center mx-auto text-black text-tiny'> Favorite </p>
                    <h4 className='justify-center align-center mx-auto text-black font-semibold'> PC </h4>
                </Card>
            </div>    
            <Spacer></Spacer>
            <div className='w-full mt-4'>
                <Card className='-p-4 bg-transparent justify-center align-center mx-auto col-9'>
                    <CardHeader> <p className='text-black text-center justify-center align-center mx-auto'> <i>W/L Visual Trend</i> </p></CardHeader>
                    <ScrollShadow orientation="horizontal" hideScrollBar size={45}>
                        <CardBody className='flex max-w-md overflow-y-hidden justify-center align-center mx-auto'>
                           
                           
                        </CardBody>
                        </ScrollShadow>
                </Card>
            </div>
            
        </>
    )
};


export default ExtraPlayerStats;

