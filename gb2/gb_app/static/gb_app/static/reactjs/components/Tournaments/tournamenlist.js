'use client';


import React, { useState } from 'react';
import { TournamentCard } from '../index';

const TournamentList = ({cu}) => {

    const TournamentInfo = cu.tournaments.tournaments;

    return(
        <>
            { TournamentInfo.map((key, index) => {
                return(<TournamentCard key={index} tournamentInfo={key} />)
            })}
            
        </>
    );
};

export default TournamentList;