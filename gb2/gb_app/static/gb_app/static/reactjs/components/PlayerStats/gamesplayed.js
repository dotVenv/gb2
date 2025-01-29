'use client';

import React from "react";
import { Card, CardBody, CardHeader, ScrollShadow, Spacer } from "@nextui-org/react";
import { LineChart, Line } from 'recharts';

const GamesPlayedStat = () => {


    return(
        
        <>  
            <div className='grid grid-cols-2 gap-0 space-0 mb-4'>
                <Card className='bg-transparent col-6  justify-center align-center mx-auto p-2'>
                    <p className='justify-center align-center mx-auto text-black'> Wins </p>
                    <p className='justify-center align-center mx-auto text-black font-semibold'> 0 </p>
                </Card>
                <Card className='bg-transparent col-6  justify-center align-center mx-auto p-2'>
                    <p className='justify-center align-center mx-auto text-black'> Losses </p>
                    <p className='justify-center align-center mx-auto text-black font-semibold'> 0 </p>
                </Card>
            </div>    
            <Spacer></Spacer>
            <div className='w-full mt-4'>
                
                <Card className='-p-4 bg-transparent justify-center align-center mx-auto col-9'>
                    <CardHeader> <p className='text-black text-center justify-center align-center mx-auto'> Your W/L Trend </p></CardHeader>
                    <ScrollShadow hideScrollBar size={45}>
                        <CardBody className='flex max-w-md overflow-y-hidden justify-center align-center mx-auto'>
                            <LineChart className='justify-center align-center mx-auto' width={250} height={200} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            </LineChart>
                        </CardBody>
                        </ScrollShadow>
                </Card>
            </div>
            
        </>
    )
};


export default GamesPlayedStat;



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  