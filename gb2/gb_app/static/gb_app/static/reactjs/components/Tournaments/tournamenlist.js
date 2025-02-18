'use client';

import React, { useState } from 'react';
import { TournamentCard } from '../index';
import { ScrollShadow, Spacer } from '@nextui-org/react';


const TournamentList = ({cu, newFilter, setnewFilter}) => {

    const TournamentInfo = cu.tournaments.tournaments;

    return(
        <>
        { newFilter 
            ?
                TournamentInfo.filter((index) => index.name.toLowerCase().includes(newFilter.toLowerCase() 
                    || index.specific.toLowerCase().includes(newFilter.toLowerCase())
                    || index.pool.toString().includes(newFilter))).map((key, index) => {
                    return(<TournamentCard key={index} tournamentInfo={key} />)
                })
            : 
                <>
                <div className='grid grid-cols-1 w-full'>
                <h4 className='font-semibold'>
                        <b>
                            Daily
                        </b>
                        {'  '}
                        Events 
                </h4>
                    <ScrollShadow size={30} hideScrollBar>
                        <div className='flex gap-3 w-full overflow-x-hidden'>
                            {TournamentInfo.filter((index) => index.weekend_only == false).map((key, index) => {
                                return(<TournamentCard key={index} tournamentInfo={key} />)
                            })}
                        </div>
                    </ScrollShadow>
                </div>
                <Spacer></Spacer>
                <br></br>
                <div className='grid grid-cols-1 w-full'>
                
                    <h4 className='font-semibold'>
                        <b>
                            Weekend
                        </b>
                        {'  '}
                        Events 
                    </h4>
                    <ScrollShadow size={30} hideScrollBar>
                        <div className='flex gap-3 w-full overflow-x-hidden'>
                            {TournamentInfo.filter((index) => index.weekend_only == true).map((key, index) => {
                                return(<TournamentCard key={index} tournamentInfo={key} />)
                            })}
                        </div>
                    </ScrollShadow>
                </div>
                </>
        }
                
        </>
    );
};

export default TournamentList;