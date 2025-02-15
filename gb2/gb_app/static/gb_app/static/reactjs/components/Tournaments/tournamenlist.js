'use client';


import React, { useState } from 'react';
import { TournamentCard } from '../index';

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
            TournamentInfo.map((key, index) => {
                return(<TournamentCard key={index} tournamentInfo={key} />)
            })
        }
                
        </>
    );
};

export default TournamentList;