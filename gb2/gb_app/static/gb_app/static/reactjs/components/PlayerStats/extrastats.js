'use client';

import React from "react";
import { Card, Chip, Spacer } from "@nextui-org/react";
import { PieChart, Pie, Legend, Tooltip,  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,} from 'recharts';


const platformData = [
    { name: 'XBX', value: 3 },
    { name: 'PSN', value: 0 },
    { name: 'PC', value: 15 },
   
  ];
  

const tourneyCategoryData = [
    {
      subject: 'Marvel Rivals',
      A: 120,
      fullMark: 150,
    },
    {
      subject: 'NBA 2K',
      A: 98,
      fullMark: 150,
    },
    {
      subject: 'Madden 25',
      A: 86,
      fullMark: 150,
    },
    {
      subject: 'UFC Undisputed',
      A: 99,
      fullMark: 150,
    },
    {
      subject: 'Fortnite',
      A: 85,
      fullMark: 150,
    },
    {
      subject: 'WoW',
      A: 65,
      fullMark: 150,
    },
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
                
                <Card className='bg-gray-100 col-6  justify-center align-center mx-auto p-2'>
                    <p className='justify-center align-center mx-auto text-black text-tiny'> Favorite </p>
                    <h4 className='justify-center align-center mx-auto text-black font-semibold'> PC </h4>
                </Card>
            </div>    
            <Spacer></Spacer>
            <div className='w-full mt-4'>
                <Card className='p-4  bg-transparent h-15 justify-center align-center mx-auto col-9'>
                    <p className='text-black text-center justify-center align-center mx-auto font-semibold text-tiny'> <i>Favorite Tournament Category</i> </p>
                    <Chip 
                        color='success' 
                        variant='flat' 
                        className='justify-center align-center mx-auto'
                        startContent={<i className="fa-solid fa-gamepad fa-sm"></i>}
                        > <span className='text-black text-center justify-center align-center mx-auto '> Marvel Rivals </span>
                    </Chip>

                        
                </Card>
            </div>
            
        </>
    )
};


export default ExtraPlayerStats;

