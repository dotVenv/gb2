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
                    <h4 className='justify-center align-center mx-auto text-black font-semibold'> 0 </h4>
                </Card>
                <Card className='bg-transparent col-6  justify-center align-center mx-auto p-2'>
                    <p className='justify-center align-center mx-auto text-black'> Losses </p>
                    <h4 className='justify-center align-center mx-auto text-black font-semibold'> 0 </h4>
                </Card>
            </div>    
            <Spacer></Spacer>
            <div className='w-full mt-4'>
                <div className='-p-4 bg-transparent justify-center align-center mx-auto col-9'>
                     <p className='text-black text-center justify-center align-center mx-auto'> <i>W/L Weekly Trend</i> </p>
                    <ScrollShadow orientation="horizontal" hideScrollBar size={45}>
                        <div className='flex max-w-md overflow-y-hidden justify-center align-center mx-auto'>
                            <LineChart 
                                className='justify-center align-center mx-auto' width={250} height={200} data={data}
                                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    
                                <Line type="monotone" dataKey="wins" stroke="#8884d8" />
                                <Line type="monotone" dataKey="losses" stroke="#FF0000" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                           
                        </div>
                        </ScrollShadow>
                </div>
            </div>
            
        </>
    )
};


export default GamesPlayedStat;



const data = [
    {
      name: 'Mon',
      wins: 17,
      losses: 8,
      amt: 9,
    },
    {
      name: 'Tue',
      wins:21,
      losses: 13,
      amt: 7,
    },
    {
      name: 'Wed',
      wins: 4,
      losses: 15,
      amt: -1,
    },
    {
      name: 'Thu',
      wins: 11,
      losses: 11,
      amt: 0,
    },
    {
      name: 'Fri',
      wins: 19,
      losses: 4,
      amt: 16,
    },
    {
      name: 'Sat',
      wins: 10,
      losses: 10,
      amt: 0,
    },
    {
      name: 'Sun',
      wins: 14,
      losses: 15,
      amt: -1,
    },
  ];
  