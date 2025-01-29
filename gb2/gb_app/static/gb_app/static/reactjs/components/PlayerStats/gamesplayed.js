'use client';

import React from "react";
import { Card, CardBody, CardHeader, ScrollShadow, Spacer } from "@nextui-org/react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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
                    <CardHeader> <p className='text-black text-center justify-center align-center mx-auto'> <i>W/L Visual Trend</i> </p></CardHeader>
                    <ScrollShadow hideScrollBar size={45}>
                        <CardBody className='flex max-w-md overflow-y-hidden justify-center align-center mx-auto'>
                            <LineChart 
                                className='justify-center align-center mx-auto' width={250} height={200} data={data}
                                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    
                                <Line type="monotone" dataKey="wins" stroke="#8884d8" />
                                <Line type="monotone" dataKey="loss" stroke="#FF0000" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
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
      name: 'Monday',
      wins: 17,
      loss: 8,
      amt: 9,
    },
    {
      name: 'Tuesday',
      wins:21,
      loss: 13,
      amt: 7,
    },
    {
      name: 'Wednesday',
      wins: 4,
      loss: 15,
      amt: -1,
    },
    {
      name: 'Thursday',
      wins: 11,
      loss: 11,
      amt: 0,
    },
    {
      name: 'Friday',
      wins: 19,
      loss: 4,
      amt: 16,
    },
    {
      name: 'Saturday',
      wins: 10,
      loss: 10,
      amt: 0,
    },
    {
      name: 'Sunday',
      uv: 14,
      pv: 15,
      amt: -1,
    },
  ];
  